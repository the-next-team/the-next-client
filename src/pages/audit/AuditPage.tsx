import { Icon } from "@iconify/react";
import { useState } from "react";
import { usePopupChild } from "../../hooks/usePopupChild";
import useQueryParams from "../../hooks/useQueryParams";

function AuditPage() {
  const params = useQueryParams();

  // URLSearchParams를 사용하여 파라미터 읽기
  const inspNo = params.get("inspNo");

  const { sendResultToParent, closePopup , popupId} = usePopupChild();

  const handleSubmit = () => {
    const result = { message: "Task completed!" };
    sendResultToParent(result);  // 부모 창으로 데이터 전달 후 닫기
  };

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
    <div className="w-full h-full text-custom-black">
      {/* header */}
      <button onClick={handleSubmit}>TEST {popupId} 응답</button>
      <button onClick={closePopup}>TEST {popupId} 닫기</button>
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
          <div className="flex flex-col w-3/4 h-full gap-2 p-2 overflow-y-auto bg-white rounded">
            <div className="flex gap-2">
              <div className="w-3/5 border border-t-2 rounded-b border-t-custom-gray-200 border-custom-gray-100"></div>
              <div className="w-2/5 p-2 border border-t-2 rounded-b border-t-custom-gray-200 border-custom-gray-100">
                <div className="flex text-xs border border-custom-gray-100">
                  <div className="flex w-1/2 divide-x divide-custom-gray-100">
                    <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                      접수경로
                    </div>
                    <div className="w-3/5 px-1 py-[1px] bg-gray-100">-</div>
                  </div>
                  <div className="flex w-1/2 divide-x divide-custom-gray-100">
                    <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                      중개사
                    </div>
                    <div className="w-3/5 px-1 py-[1px] bg-gray-100">MW001</div>
                  </div>
                </div>
              </div>
            </div>
            {/* 신청정보 */}
            <div className="p-2 border border-custom-gray-100 rounded-xl">
              <div className="flex items-center gap-1 bg-white">
                <p className="text-[10px] text-blue-400">●</p>
                <p className="text-xs font-medium">{"신청정보"}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-3/5">
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        자금용도
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        상환방법
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option>원금균등분할</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        신청금액
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100 text-right">
                        0
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        CSS한도
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100 text-right">
                        0
                      </div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        CSS금리
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100 text-right">
                        0
                      </div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        대출/거치기간
                      </div>
                      <div className="flex gap-1 w-3/5 px-1 py-[1px] bg-gray-100 text-right">
                        <select className="w-full h-full bg-white outline-none">
                          <option></option>
                        </select>
                        <select className="w-full h-full bg-white outline-none">
                          <option>0개월</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        승인금액
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">0</div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        승인금리
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">0</div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        약정일
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100 text-right">
                        <select className="w-full h-full bg-white outline-none">
                          <option>05 일</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        예외한도
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">0</div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        예외금리
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">0</div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        중도상환수수료
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100 text-right">
                        <select className="w-full h-full bg-white outline-none">
                          <option>N</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        금융취약계층
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option>대상아님 (금융취약)</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        공적지원대상자
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option>N - 대상아님</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex w-1/3 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        <button className="w-full px-1 text-white bg-blue-200 rounded">
                          IVR일반안내
                        </button>
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100"></div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/3 min-h-[18px] divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50"></div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100"></div>
                    </div>
                    <div className="flex w-1/3 min-h-[18px] divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50"></div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100"></div>
                    </div>
                    <div className="flex w-1/3 min-h-[18px] divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        <button className="w-full px-1 text-white bg-blue-200 rounded">
                          IVR공적지원안내
                        </button>
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100"></div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        심사진행상태
                      </div>
                      <div className="flex gap-1 w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option>본인인증완료</option>
                        </select>
                        <button className="px-1 bg-gray-300 rounded break-keep">
                          저장
                        </button>
                      </div>
                    </div>
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        접수일시
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">
                        2024-05-17 17:43
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        상담상태
                      </div>
                      <div className="flex gap-1 w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option>1차상담</option>
                        </select>
                        <button className="px-1 bg-gray-300 rounded break-keep">
                          저장
                        </button>
                      </div>
                    </div>
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        심사
                      </div>
                      <div className="flex justify-between w-3/5 px-1 py-[1px] bg-gray-100">
                        시스템
                        <button className="px-1 bg-gray-300 rounded break-keep">
                          저장
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        신청상태
                      </div>
                      <div className="flex gap-1 w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option>접수중</option>
                        </select>
                        <button className="px-1 bg-gray-300 rounded break-keep">
                          저장
                        </button>
                      </div>
                    </div>
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        승인1
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">-</div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        자동대출여부
                      </div>
                      <div className="flex gap-1 w-3/5 px-1 py-[1px] bg-gray-100">
                        <select className="w-full h-full bg-white outline-none">
                          <option></option>
                        </select>
                        <button className="px-1 bg-gray-300 rounded break-keep">
                          저장
                        </button>
                      </div>
                    </div>
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        기표/회계
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">-</div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        추천인
                      </div>
                      <div className="flex gap-1 w-3/5 px-1 py-[1px] bg-gray-100">
                        -
                      </div>
                    </div>
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        현재담당자
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">
                        시스템
                      </div>
                    </div>
                  </div>
                  <div className="flex text-xs border border-custom-gray-100">
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        상담사명
                      </div>
                      <div className="flex justify-between w-3/5 px-1 py-[1px] bg-gray-100">
                        <p></p>
                        <button className="px-1 bg-gray-300 rounded break-keep">
                          저장
                        </button>
                      </div>
                    </div>
                    <div className="flex w-1/2 divide-x divide-custom-gray-100">
                      <div className="w-2/5 px-1 py-[1px] text-right bg-green-50">
                        스크래핑
                      </div>
                      <div className="w-3/5 px-1 py-[1px] bg-gray-100">N</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-1 mt-2">
                <button className="px-1 py-[1px] text-xs text-white bg-indigo-300 rounded">
                  신용정보변경
                </button>
                <button className="px-1 py-[1px] text-xs text-white bg-indigo-300 rounded">
                  사전거절제외
                </button>
                <button className="px-1 py-[1px] text-xs text-white bg-indigo-300 rounded">
                  강제심사전환
                </button>
                <button className="px-1 py-[1px] text-xs text-white bg-indigo-300 rounded">
                  강제적격
                </button>
              </div>
            </div>
            {/* tab */}
            <div className="flex gap-1 border-b-2 border-b-gray-400">
              {tab.map((item, i) => (
                <div
                  className={`${
                    select === i
                      ? "bg-gray-400 text-white"
                      : "border-gray-400 border-2 bg-gray-50 px-1"
                  } px-1 py-[1px] rounded-t border-b-0 cursor-pointer`}
                  onClick={() => setSelect(i)}
                >
                  <p className="text-xs">{item.name}</p>
                </div>
              ))}
            </div>
            {/* tab content */}
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
          <div className="flex flex-col w-1/4 h-full gap-4 overflow-y-auto rounded">
            {/* 진행메모 */}
            <div>
              <div className="p-1 bg-blue-400 rounded-t w-fit">
                <p className="text-xs text-white">진행메모</p>
              </div>
              <div className="px-1 pb-1 text-xs bg-white border-t-2 border-blue-400">
                {/* 여기에 진행메모 */}
                <div className="flex justify-around py-2">
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="radio1"
                      name="radio"
                      defaultChecked
                    />
                    <label htmlFor="radio1">전체</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="radio" id="radio2" name="radio" />
                    <label htmlFor="radio2">진행메모</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="radio" id="radio3" name="radio" />
                    <label htmlFor="radio3">SMS</label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="radio" id="radio4" name="radio" />
                    <label htmlFor="radio4">중개사메모</label>
                  </div>
                </div>
                <div className="overflow-y-auto border divide-y rounded max-h-80">
                  <div className="flex divide-x">
                    <p className="px-1">1</p>
                    <p className="w-1/2 px-1 bg-red-200">
                      스크래핑(안내) 06-05 10:50
                    </p>
                    <p className="w-1/4 px-1">모바일WE</p>
                    <p className="w-1/4 px-1">발송완료</p>
                  </div>
                  <div className="px-2 py-4">
                    <p>[모바일웹] 신분증 진위 확인 및 저장 완료 (4100)</p>
                  </div>
                  <div className="flex divide-x">
                    <p className="px-1">2</p>
                    <p className="w-1/2 px-1 bg-red-200">
                      스크래핑(안내) 06-05 10:50
                    </p>
                    <p className="w-1/4 px-1">모바일WE</p>
                    <p className="w-1/4 px-1">발송전</p>
                  </div>
                  <div className="px-2 py-4">
                    <p>신분증 스크래핑 완료</p>
                  </div>
                  <div className="flex divide-x">
                    <p className="px-1">3</p>
                    <p className="w-1/2 px-1 bg-red-200">
                      스크래핑(안내) 06-05 09:44
                    </p>
                    <p className="w-1/4 px-1">모바일WE</p>
                    <p className="w-1/4 px-1">발송전</p>
                  </div>
                  <div className="px-2 py-4">
                    <p>신분증 스크래핑 완료</p>
                  </div>
                  <div className="flex divide-x">
                    <p className="px-1">4</p>
                    <p className="w-1/2 px-1 bg-red-200">
                      스크래핑(안내) 06-05 09:44
                    </p>
                    <p className="w-1/4 px-1">모바일WE</p>
                    <p className="w-1/4 px-1">발송완료</p>
                  </div>
                  <div className="px-2 py-4">
                    <p>[모바일웹] 신분증 진위 확인 및 저장 완료 (4100)</p>
                  </div>
                  <div className="flex divide-x">
                    <p className="px-1">5</p>
                    <p className="w-1/2 px-1 bg-red-200">
                      스크래핑(안내) 06-05 09:42
                    </p>
                    <p className="w-1/4 px-1">모바일WE</p>
                    <p className="w-1/4 px-1">발송전</p>
                  </div>
                  <div className="px-2 py-4">
                    <p>[모바일웹] 신분증 진위 확인 및 저장 완료 (4100)</p>
                  </div>
                  <div className="flex divide-x">
                    <p className="px-1">6</p>
                    <p className="w-1/2 px-1 bg-red-200">
                      스크래핑(안내) 06-04 14:03
                    </p>
                    <p className="w-1/4 px-1">모바일WE</p>
                    <p className="w-1/4 px-1">발송전</p>
                  </div>
                  <div className="px-2 py-4">
                    <p>신분증 스크래핑 완료</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 심사배정 */}
            <div>
              <div className="p-1 bg-blue-400 rounded-t w-fit">
                <p className="text-xs text-white">심사배정 List</p>
              </div>
              <div className="bg-white border-t-2 border-blue-400 h-[400px]">
                {/* 여기에 심사배정 */}
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
