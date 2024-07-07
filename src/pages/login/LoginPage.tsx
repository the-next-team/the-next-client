import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../api/services/userService";
import Input from "../../components/form/input/Input";
import { storageKey } from "../../constants";
import useLoading from "../../hooks/useLoading";
import useUser from "../../hooks/useUser";

function LoginPage() {
  const navigate = useNavigate();
  const {fetchUser} = useUser();
  const { showLoading, hideLoading } = useLoading();
  const [inputUsername, setInputUsername] = useState("nTree");
  const [inputPassword, setInputPassword] = useState("1");
  
  const handleChange = (e:React.SyntheticEvent<HTMLInputElement>) => {
    var obj = e.currentTarget;
    if( obj.id == "username" )
      setInputUsername(obj.value);
    else if( obj.id == "password" )
      setInputPassword(obj.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      showLoading();
      const req_data = {
        username: inputUsername,
        password: inputPassword,
      };
      console.log(req_data);
      const response = await UserService.login(req_data);
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
      }
      else {
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
      <form onSubmit={onSubmit}>
        <div className="mb-6">
          <p className="text-2xl font-semibold text-center text-custom-black">
            nTree.next Login
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Input type="text" id="username" placeholder="username" onChange={handleChange} value={inputUsername} />
          <Input type="password" id="password" placeholder="password" onChange={handleChange} value={inputPassword} />
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
