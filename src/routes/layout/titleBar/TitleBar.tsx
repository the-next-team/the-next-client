import { useEffect, useRef } from "react";
import TitleBarButton from "./components/TitleBarButton";

function TitleBar() {
  const ref = useRef<HTMLDivElement>(null);

  // --vh 변수를 설정하는 함수
  const setVHVariable = () => {
    if (ref.current) {
      const divHeight = ref.current.offsetHeight; // div의 높이를 가져옴
      const vh = (window.innerHeight - divHeight) * 0.01;
      console.log("divHeight", divHeight);
      console.log("window.innerHeight", window.innerHeight);
      console.log(
        "window.innerHeight - divHeight",
        window.innerHeight - divHeight
      );
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  };

  useEffect(() => {
    setVHVariable(); // 컴포넌트 마운트 시 함수 실행

    // 윈도우 크기가 변경될 때마다 함수를 다시 실행
    window.addEventListener("resize", setVHVariable);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", setVHVariable);
    };
  }, []); // 빈 의존성 배열을 전달하여 마운트 시에만 useEffect 내의 로직이 실행되도록 함

  return (
    <div
      ref={ref}
      className="bg-white border-b drag z-[999]"
    >
      <div className="flex items-center justify-end h-6 gap-6 px-4">
        <TitleBarButton message="minimizeApp">
          <svg
            width="14"
            height="14"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
          </svg>
        </TitleBarButton>

        <TitleBarButton message="maximizeApp">
          <svg
            width="14"
            height="14"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z" />
          </svg>
        </TitleBarButton>

        <TitleBarButton message="closeApp">
          <svg
            width="14"
            height="14"
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </TitleBarButton>
      </div>
    </div>
  );
}

export default TitleBar;
