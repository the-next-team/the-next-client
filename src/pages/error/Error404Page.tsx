import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/images/all-img/404-2.svg";

function Error404Page() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center py-20 text-center dark:bg-slate-900">
      <img src={ErrorImage} alt="" />
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="mb-4 text-slate-900">페이지를 찾을 수 없어요</h4>
        <div className="mb-10 text-sm font-normal dark:text-white">
          요청하신 페이지를 찾을 수 없어요
        </div>
      </div>
      {/* <div className="max-w-[300px] mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="w-full text-center font-semibold text-sm leading-6 md:px-6 md:py-3 px-4 py-[10px] rounded capitalize  transition-all duration-150 md:whitespace-nowrap whitespace-normal relative dark:bg-slate-800"
        >
          이전 화면으로
        </button>
      </div> */}
    </div>
    </div>
  )
}

export default Error404Page