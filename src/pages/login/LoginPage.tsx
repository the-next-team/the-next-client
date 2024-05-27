import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserService } from "../../api/services/userService";
import { storageKey } from "../../constants";
import { userState } from "../../states/user/userAtom";

function LoginPage() {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);
  // const { showLoading, hideLoading } = useLoading();

  const onSubmit =async () => {
    try {
      // showLoading();
      const response = await UserService.login({
        // username: data.username,
        // password: data.password,
        username: 'nTree',
        password: '1',
      });
      // hideLoading();

      if(response.status === 'OK') {
        localStorage.setItem(storageKey.user, JSON.stringify(response.data));
        localStorage.setItem(storageKey.accessToken, response.data.accessToken);
        localStorage.setItem(storageKey.refreshToken, response.data.refreshToken);

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
  }

  return (
    <div>
      LoginPage
      <button
        className="p-4 bg-black-200"
        onClick={() => {
          onSubmit();
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default LoginPage;
