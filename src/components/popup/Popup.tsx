import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {};

const Popup = ({}: Props) => {
  const navigate = useNavigate();
  const { register, watch } = useForm({});

  useEffect(() => {
    if (!window.opener) {
      // url 입력 접속 방지
      navigate(-1);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <p>새창으로 열리는 팝업 테스트입니다</p>
      <input
        placeholder="메시지를 입력해 주세요"
        className="border rounded"
        {...register("message")}
      />
      <button
        onClick={() => {
          const result = { status: "success", data: watch("message") };
          window.opener.postMessage({ result }, window.location.origin);
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Popup;
