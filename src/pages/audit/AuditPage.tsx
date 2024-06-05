import { Icon } from "@iconify/react";
import { useState } from "react";

function AuditPage() {
  const [select, setSelect] = useState<number>(0);
  const tab = [
    { name: "고객기본정보" },
    { name: "스크래핑(신)" },
    { name: "금융정보" },
    { name: "지불다짐&약정정보" },
    { name: "햇살론" },
    { name: "사잇돌" },
    { name: "약관동의&서류안내" },
    { name: "스크래핑" },
    { name: "최저신용자특례보증" },
  ];

  return (
    <div className="w-full h-screen text-custom-black">
      {/* header */}
      <div className="flex items-center h-12 gap-1 px-4 overflow-x-auto text-sm bg-white break-keep">
        <div className="flex gap-1">
          <p className="text-[8px]">▶︎</p>
          <p>{"식별번호"}</p>
        </div>
        <input
          value={"3384222342011"}
          className="border border-orange-300 rounded outline-none bg-yellow-50"
        />
        <button className="px-1 bg-orange-300 rounded">변경</button>
        <input value={"김석환"} className="text-center border rounded w-14" />
        <input
          value={"남 만35세 (용)"}
          className="text-center border rounded w-28"
        />
        <div className="flex gap-1">
          <p className="text-[8px]">▶︎</p>
          <p>{"신청번호"}</p>
        </div>
        <input
          value={"20240517255867"}
          className="border border-orange-300 rounded outline-none bg-yellow-50"
        />
        <button className="h-[22px] px-1 bg-orange-300 rounded">
          <Icon
            icon="heroicons:arrow-path-16-solid"
            width="16"
            color="#111625"
          />
        </button>
        <div className="flex gap-1">
          <p className="text-[8px]">▶︎</p>
          <p>{"상품"}</p>
        </div>
        <select className="border border-orange-300 rounded outline-none bg-yellow-50">
          <option>햇살론</option>
        </select>
        <select className="border border-orange-300 rounded outline-none bg-yellow-50">
          <option>온라인햇살론</option>
        </select>
        <div className="flex gap-1">
          <p className="text-[8px]">▶︎</p>
          <p>{"취급구분"}</p>
        </div>
        <select className="border border-orange-300 rounded outline-none bg-yellow-50">
          <option>신규</option>
        </select>
        <button className="px-1 bg-orange-300 rounded">상품변경</button>
        <button className="px-1 bg-blue-200 rounded">성희롱</button>
        <button className="px-1 bg-blue-200 rounded">언어폭력</button>
        <input
          placeholder="한줄메모를 입력하세요."
          className="border border-orange-300 rounded outline-none bg-yellow-50"
        />
      </div>
      <div className="flex w-full h-[calc(100vh-48px)]">
        {/* contents */}
        <div className="flex w-full gap-2 p-2">
          {/* main */}
          <div className="flex flex-col w-2/3 h-full gap-2 p-2 overflow-y-auto bg-white rounded">
            {/* 신청정보 */}
            <div className="h-20 p-2 border border-custom-gray-100 rounded-xl">
              <div className="flex items-center gap-1">
                <p className="text-[10px] text-blue-400">●</p>
                <p className="text-sm font-medium">{"신청정보"}</p>
              </div>
            </div>
            <div className="flex gap-1 border-b-2 border-b-gray-400">
              {tab.map((item, i) => (
                <div
                  className={`${select === i ? "bg-gray-400 text-white" : "border-gray-400 border-2 bg-gray-50"} px-1 rounded-t border-b-0 cursor-pointer`}
                  onClick={() => setSelect(i)}
                >
                  <p className="text-sm">{item.name}</p>
                </div>
              ))}
            </div>
            {select == 0 ? (
              <div className="flex flex-col gap-2">
                {/* 고객정보 */}
                <div className="h-20 p-2 border border-custom-gray-100 rounded-xl">
                  <div className="flex items-center gap-1">
                    <p className="text-[10px] text-blue-400">●</p>
                    <p className="text-sm font-medium">{"고객정보"}</p>
                  </div>
                </div>
                {/* 직장정보 */}
                <div className="h-20 p-2 border border-custom-gray-100 rounded-xl">
                  <div className="flex items-center gap-1">
                    <p className="text-[10px] text-blue-400">●</p>
                    <p className="text-sm font-medium">{"직장정보"}</p>
                  </div>
                </div>
                <div className="flex w-full gap-2">
                  {/* 기타 */}
                  <div className="w-1/3 h-20 p-2 border border-custom-gray-100 rounded-xl">
                    <div className="flex items-center gap-1">
                      <p className="text-[10px] text-blue-400">●</p>
                      <p className="text-sm font-medium">{"기타"}</p>
                    </div>
                  </div>
                  {/* 심사메모 */}
                  <div className="flex flex-col w-2/3 h-20 gap-1 p-2 border border-custom-gray-100 rounded-xl">
                    <div className="flex items-center gap-1">
                      <p className="text-[10px] text-blue-400">●</p>
                      <p className="text-sm font-medium">{"심사메모"}</p>
                    </div>
                    <textarea className="w-full h-10 px-1 border rounded outline-none resize-none border-custom-gray-100" />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* sub */}
          <div className="w-1/3 h-full overflow-y-auto rounded">
            <div>
              <div className="p-1 bg-blue-400 rounded-t w-fit">
                <p className="text-xs text-white">진행메모</p>
              </div>
              <div className="bg-white border-t-2 border-blue-400 h-[400px]">
                {/* 여기에 진행메모 */}
              </div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div className="flex flex-col w-16 h-full overflow-y-auto text-xs whitespace-pre-line">
          <div className="bg-white divide-y divide-custom-gray-100">
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"SMS\n발송"}</p>
            </div>
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"햇살론"}</p>
            </div>
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"NICE"}</p>
            </div>
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"KCB"}</p>
            </div>
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"중앙회"}</p>
            </div>
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"첨부서류"}</p>
            </div>
            <div className="flex items-center gap-0.5 px-1 py-1 cursor-pointer">
              <span className="text-[6px]">▶︎</span>
              <p>{"대출\n계산기"}</p>
            </div>
          </div>
          <div className="h-full bg-gray-400">
            <div className="flex flex-col items-center hover:bg-lime-300 justify-center gap-1 py-1.5 text-center text-white cursor-pointer bg-lime-400">
              <Icon icon="heroicons:clipboard" width="24" color="white" />
              <p>{"진행메모\n조회"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-lime-300 justify-center gap-1 py-1.5 text-center text-white cursor-pointer bg-lime-400">
              <Icon
                icon="heroicons:pencil-square-solid"
                width="24"
                color="white"
              />
              <p>{"메모등록"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-lime-300 justify-center gap-1 py-1.5 text-center text-white cursor-pointer bg-lime-400">
              <Icon
                icon="heroicons:chat-bubble-left-ellipsis"
                width="24"
                color="white"
              />
              <p>{"SMS이력"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-blue-300 justify-center gap-1 py-1.5 text-center text-white bg-blue-400 cursor-pointer">
              <Icon
                icon="heroicons:square-3-stack-3d-20-solid"
                width="24"
                color="white"
              />
              <p>{"품의/결재"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-blue-300 justify-center gap-1 py-1.5 text-center text-white bg-blue-400 cursor-pointer">
              <Icon icon="heroicons:document-text" width="24" color="white" />
              <p>{"승인"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-blue-300 justify-center gap-1 py-1.5 text-center text-white bg-blue-400 cursor-pointer">
              <Icon
                icon="heroicons:document-chart-bar"
                width="24"
                color="white"
              />
              <p>{"부결"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-blue-300 justify-center gap-1 py-1.5 text-center text-white bg-blue-400 cursor-pointer">
              <Icon
                icon="heroicons:presentation-chart-bar"
                width="24"
                color="white"
              />
              <p>{"심사이력"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-300 justify-center gap-1 py-1.5 text-center text-white bg-gray-400 cursor-pointer">
              <Icon icon="heroicons:play-circle" width="24" color="white" />
              <p>{"Action"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-300 justify-center gap-1 py-1.5 text-center text-white bg-gray-400 cursor-pointer">
              <Icon icon="heroicons:phone-16-solid" width="24" color="white" />
              <p>{"통화이력"}</p>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-300 justify-center gap-1 py-1.5 text-center text-white bg-gray-400 cursor-pointer">
              <Icon
                icon="heroicons:microphone-20-solid"
                width="24"
                color="white"
              />
              <p>{"녹취이력"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuditPage;
