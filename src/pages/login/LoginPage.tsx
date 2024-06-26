import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserService } from "../../api/services/userService";
import Input from "../../components/form/input/Input";
import { storageKey } from "../../constants";
import { userState } from "../../states/user/userAtom";

function LoginPage() {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);
  // const { showLoading, hideLoading } = useLoading();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // showLoading();
      const response = await UserService.login({
        // username: data.username,
        // password: data.password,
        username: "nTree",
        password: "1",
      });
      // hideLoading();

      if (response.status === "OK") {
        localStorage.setItem(storageKey.user, JSON.stringify(response.data));
        localStorage.setItem(storageKey.accessToken, response.data.accessToken);
        localStorage.setItem(
          storageKey.refreshToken,
          response.data.refreshToken
        );

        setUserState(response.data);

        navigate("/", {
          replace: true,
        });
      }
    } catch (error) {
      // hideLoading();
      // setError("fail", {
      //   type: "custom",
      //   message: "아이디 또는 비밀번호가 올바르지 않아요.",
      // });
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <p className="text-2xl font-semibold text-center text-custom-black">
            Sign In
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Input label="username" placeholder="username" value={"nTree"} />
          <Input label="password" placeholder="password" value={"1"} />
        </div>
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
