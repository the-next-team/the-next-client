import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../api/services/userService";
import NextLoge from "../../assets/images/logo/the-next.png";
import Input from "../../components/form/input/Input";
import { storageKey } from "../../constants";
import useLoading from "../../hooks/useLoading";
import useUser from "../../hooks/useUser";
import { ApiResponseStats } from "../../api/models/common/apiResponseStats";

type FormValues = {
  username: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const { fetchUser } = useUser();
  const { showLoading, hideLoading } = useLoading();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      username: "nTree",
      password: "1",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      showLoading();
      const data = {
        username: values.username,
        password: values.password,
      };
      const response = await UserService.login(data);
      hideLoading();

      if (response.status === ApiResponseStats.OK) {
        localStorage.setItem(storageKey.user, JSON.stringify(response.data));
        localStorage.setItem(storageKey.accessToken, response.data.accessToken);
        localStorage.setItem(
          storageKey.refreshToken,
          response.data.refreshToken
        );
        await fetchUser();

        navigate("/dashboard/Dashboard", {
          replace: true,
        });
      } else {
        console.log(response.error);
        alert("[" + response.error.code + "] " + response.error.message);
      }
    } catch (error) {
      hideLoading();
      console.log(error);
      //      setError("fail", {
      //        type: "custom",
      //        message: "아이디 또는 비밀번호가 올바르지 않아요.",
      //      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <div>
            <img className="" src={NextLoge} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="username"
            {...register("username", {
              required: "아이디를 입력해 주세요.",
            })}
          />
          <Input
            type="password"
            placeholder="password"
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
            })}
          />
        </div>
        {(errors.password || errors.password) && (
          <p className="text-red-500">
            {"아이디 또는 비밀번호를 다시 입력해주세요"}
          </p>
        )}
        <button
          type="submit"
          className="w-full py-1 rounded-[2px] hover:animate-gradient-primary mt-4 bg-custom-black"
        >
          <p className="text-sm text-white">로그인</p>
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
