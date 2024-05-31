import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserService } from "../../api/services/userService";
import { storageKey } from "../../constants";
import { userState } from "../../states/user/userAtom";
import CustomInput from "../../components/form/CustomInput";

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

        navigate("/main/");
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
    <div className="flex items-center justify-center w-full h-screen">
      <form
        onSubmit={onSubmit}
        className="w-[520px] p-10 bg-white rounded-lg flex flex-col gap-6 text-custom-black shadow-md"
      >
        <p className="text-2xl font-semibold text-center">Sign In</p>
        <div className="flex flex-col gap-4">
          <CustomInput
            label="username"
            placeholder="username"
            value={"nTree"}
          />
          <CustomInput label="password" placeholder="password" value={"1"} />
        </div>
        <button type="submit" className="w-full py-4 rounded bg-custom-black">
          <p className="text-white">로그인</p>
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
