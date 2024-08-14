import { FallbackProps } from "react-error-boundary";

function Error500Page({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-20">
      <div className="mx-auto error" data-text="500">
        500
      </div>
      <div className="text-center text-custom-black">
        <p className="text-lg font-medium b-2">Internal Server error</p>
        <p className="text-sm">오류가 발생하였습니다. 다시 시도해 주세요.</p>
      </div>
      <a className="pt-4" href="/">
        &larr; 홈으로
      </a>
    </div>
  );
}

export default Error500Page;
