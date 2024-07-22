import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ApiResponseStats } from "../../api/models/common/apiResponseStats";
import { UserService } from "../../api/services/userService";
import NextLoge from "../../assets/images/logo/the-next.png";
import TextInput from "../../components/form/TextInput";
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

        navigate("/dashboard", {
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
        <div className="mb-8">
          <div>
            <img className="" src={NextLoge} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <TextInput
            id="username"
            type="text"
            label="아이디"
            className="w-full py-2"
            placeholder="아이디"
            // error={{ message: "아이디를 입력해 주세요." }}
            register={register}
          />
          <TextInput
            id="password"
            type="password"
            label="비밀번호"
            className="w-full py-2"
            placeholder="비밀번호"
            // error={{ message: "비밀번호를 입력해 주세요." }}
            register={register}
          />
        </div>
        <button className="w-full py-2 rounded-[2px] hover:animate-gradient-primary bg-custom-black">
          <p className="text-white">로그인</p>
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
