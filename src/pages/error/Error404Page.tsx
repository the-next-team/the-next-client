import ErrorImage from "../../assets/images/all-img/404-2.svg";

function Error404Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-20">
      <img src={ErrorImage} alt="" className="block" />
      <div className="text-center text-custom-black">
        <p className="text-lg font-medium b-2">페이지를 찾을 수 없어요</p>
        <p className="text-sm">요청하신 페이지를 찾을 수 없어요</p>
      </div>
    </div>
  );
}

export default Error404Page;
