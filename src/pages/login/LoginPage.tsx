import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../api/services/userService";
import Input from "../../components/form/input/Input";
import { storageKey } from "../../constants";
import useLoading from "../../hooks/useLoading";
import useUser from "../../hooks/useUser";

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
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      showLoading();
      const data = {
        username: values.password,
        password: values.password,
      };
      const response = await UserService.login(data);
      hideLoading();

      if (response.status === "OK") {
        localStorage.setItem(storageKey.user, JSON.stringify(response.data));
        localStorage.setItem(storageKey.accessToken, response.data.accessToken);
        localStorage.setItem(
          storageKey.refreshToken,
          response.data.refreshToken
        );
        await fetchUser();

        navigate("/", {
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
          <p className="text-2xl font-semibold text-center text-custom-black">
            nTree.next Login
          </p>
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
