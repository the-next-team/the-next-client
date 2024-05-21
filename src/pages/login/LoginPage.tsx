import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      LoginPage
      <button
        className="p-4 bg-black-200"
        onClick={() => {
          navigate("/main/");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default LoginPage;
