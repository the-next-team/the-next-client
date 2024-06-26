import Dashboard from "../pages/dashboard/Dashboard";
import CommonCodePage from "../pages/preferences/code/common/CommonCodePage";
import JobCodePage from "../pages/preferences/code/job/JobCodePage";
import MenuManagement from "../pages/preferences/menu/MenuManagement";
import Team from "../pages/preferences/team/Team";
import User from "../pages/preferences/user/User";
import ScreenManagement from "../pages/screen/ScreenManagement";
import MessageListPage from "../pages/system/message/MessageListPage";

export type MenuItemType = {
  isHeadr?: boolean;
  title: string;
  icon?: string;
  link?: string;
  element?: React.ComponentType | null;
  badge?: string;
  isOpen?: boolean;
  isHide?: boolean;
  isMultiple?: boolean;
  child?: MenuItemChildType[];
};

export type MenuItemChildType = {
  childtitle?: string;
  childlink?: string;
  childElement?: React.ComponentType | null;
  multi_menu?: MenuItemChildMultiType[];
};

export type MenuItemChildMultiType = {
  multiTitle: string;
  multiLink: string;
  multiElement?: React.ComponentType | null;
  badge?: string;
};

// export const menuItems: MenuItemType[] = [
//   {
//     title: "메인",
//     icon: "heroicons-outline:home",
//     isOpen: true,
//     isHide: true,
//     child: [
//       {
//         childtitle: "대시보드",
//         childlink: "home/dashboard",
//         childElement: Dashboard,
//       },
//     ],
//   },
//   {
//     title: "심사관리",
//     icon: "heroicons-outline:building-library",
//     isHide: false,
//     child: [
//       {
//         childtitle: "심사진행목록",
//         multi_menu: [
//           {
//             multiTitle: "심사진행목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심사접수진행상태",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "적합성확인목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "결재대기목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "전자계약대기목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "대출등록대기목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "심사완료",
//         multi_menu: [
//           {
//             multiTitle: "대출완료목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "대출완료(당대환)목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "현황조회",
//         multi_menu: [
//           {
//             multiTitle: "대외플랫폼접수현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "상담원심사현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심사현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심사부결현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심사첨부파일등록현황",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "기준관리",
//         multi_menu: [
//           {
//             multiTitle: "사전거절(PreScreen)대상",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심사배정상담원",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심사배정룰",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "상품별 기준금리관리",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "채권관리",
//     icon: "heroicons-outline:document-chart-bar",
//     isHide: false,
//     isMultiple: true,
//     child: [
//       {
//         childtitle: "채권현황",
//         multi_menu: [
//           {
//             multiTitle: "채권현황목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "여신거래내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "대출완제목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "초본열람대상명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "방문관리명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "채권배정현황(실시간)",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "사고채권",
//         multi_menu: [
//           {
//             multiTitle: "개인회생목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "워크아웃목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "파산관리명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "사망관리명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "법무관리목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "법원결정문관리명세",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "특수채권",
//         multi_menu: [
//           {
//             multiTitle: "특수채권현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "특수채권회수내역",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "조기경보",
//         multi_menu: [
//           {
//             multiTitle: "CIS신용도판단및공공정보",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "CIS대부면체",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "채무불이행정보(신용정보사)",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "KCB연체정보",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "대지급정보",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "주민등록번호변경정보",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "일단위연체관리정보",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "배정관리",
//         multi_menu: [
//           {
//             multiTitle: "채권담당자배덩Rule관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "채권팀배정Rule관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "채권(엑셀)이수관",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "기준관리",
//         multi_menu: [
//           {
//             multiTitle: "DM양식관리",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "업무지원",
//     icon: "heroicons-outline:chart-pie",
//     isHide: false,
//     isMultiple: true,
//     child: [
//       {
//         childtitle: "회계관리",
//         multi_menu: [
//           {
//             multiTitle: "가상계좌발급",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "가상계좌거래명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "CMS출금명세(온라인)",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "완제계좌가수금조회",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "이기종시제관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "온라인수납관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "플랫폼사 수수료정산",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "사후관리",
//         multi_menu: [
//           {
//             multiTitle: "민원내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "대출계약철회",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "금리인하요구권",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "제증명신청",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "CMS신청",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "CMS신청(변경)",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "개명신청",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "1:1문의",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "고객관리",
//         multi_menu: [
//           {
//             multiTitle: "본인인증내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "고객조회",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "맴버십내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "포인트적립내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "쿠폰신청내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "마케팅동의내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "이벤트응모내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "추가대출대상자업로드",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "두낫콜현황(중앙회)",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "SMS수신거부(080)",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "경영정보",
//         multi_menu: [
//           {
//             multiTitle: "일일현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "일일실적현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "중금리공시자료",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "가계대출월보",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "자산건전성",
//         multi_menu: [
//           {
//             multiTitle: "자산건전성분류계산",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "자산건전성분류계산결과",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "자산건전성기초파일업로드",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "사업자휴폐업조회",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "UMS",
//         multi_menu: [
//           {
//             multiTitle: "UMS개별발송",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "UMS발송승인명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "UMS발송이력",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "FAX/MO수신이력",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "기준관리(업무)",
//         multi_menu: [
//           {
//             multiTitle: "탬플릿 관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "ActionPlan기준",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "ActionPlan실행내역",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "가상팩스번호",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "가상팩스배정이력",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "쿠폰 관리",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "QUPID",
//         multi_menu: [
//           {
//             multiTitle: "서식 정보설정",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "발송 대상명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "발송 승인",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "발송 이력",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "발송대상액셀목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//     ],
//   },

//   {
//     title: "NPL채권",
//     icon: "heroicons-outline:swatch",
//     isHide: false,
//     isMultiple: true,
//     child: [
//       {
//         childtitle: "기준채권",
//         multi_menu: [
//           {
//             multiTitle: "상품관리",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "매입",
//         multi_menu: [
//           {
//             multiTitle: "매입채권등록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "매입채권명세",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "상환스케줄/조건표 등록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "채권",
//         multi_menu: [
//           {
//             multiTitle: "채권명세",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "상환",
//         multi_menu: [
//           {
//             multiTitle: "입금이력",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "신용회복입금등록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "통계",
//         multi_menu: [
//           {
//             multiTitle: "일마감현황",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "월별 회계처리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "신정원 개인대출집중",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "기업금융",
//     icon: "heroicons-outline:home",
//     isHide: false,
//     isMultiple: true,
//     child: [
//       {
//         childtitle: "홈",
//         childlink: "",
//         childElement: null,
//       },
//       {
//         childtitle: "고객관리",
//         multi_menu: [
//           {
//             multiTitle: "고객목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "사업관리",
//         multi_menu: [
//           {
//             multiTitle: "사업목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "기타안건목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "신청관리",
//         multi_menu: [
//           {
//             multiTitle: "신청목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "부의목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심의목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심의결과목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "승인목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "부결목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "계좌연결대상목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "통합목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "계정관리",
//         multi_menu: [
//           {
//             multiTitle: "대출계좌목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "유가증권계좌목록",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//       {
//         childtitle: "DB정보관리",
//         multi_menu: [
//           {
//             multiTitle: "원장조회(여신)",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "원장조회(유가증권)",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "문서관리목록",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "기준항목관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "PF현황 엑셀업로드",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "자산건전성 엑셀업로드",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "심의위원회관리",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "리스크평가 엑셀업로드",
//             multiLink: "",
//             multiElement: null,
//           },
//           {
//             multiTitle: "사업유형코드관리",
//             multiLink: "",
//             multiElement: null,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "시스템",
//     icon: "heroicons-outline:cog",
//     isHide: false,
//     isMultiple: true,
//     child: [
//       {
//         childtitle: "코드관리",
//         multi_menu: [
//           {
//             multiTitle: "공통코드",
//           },
//           {
//             multiTitle: "직업/직군",
//           },
//         ],
//       },
//       {
//         childtitle: "메뉴권한",
//         multi_menu: [
//           {
//             multiTitle: "메뉴관리",
//             multiLink: "system/menumanagement",
//             multiElement: MenuManagement,
//           },
//           {
//             multiTitle: "화면관리",
//             multiLink: "system/screenmanagement",
//             multiElement: ScreenManagement,
//           },
//         ],
//       },
//       {
//         childtitle: "사용자",
//         multi_menu: [
//           {
//             multiTitle: "팀(파트)",
//             multiLink: "system/team",
//             multiElement: Team,
//           },
//           {
//             multiTitle: "사용자",
//             multiLink: "system/user",
//             multiElement: User,
//           },
//         ],
//       },
//       {
//         childtitle: "이력조회",
//         childlink: "",
//         childElement: null,
//       },
//       {
//         childtitle: "전문관리",
//         multi_menu: [
//           {
//             multiTitle: "전문처리이력",
//             multiLink: "system/message",
//             multiElement: MessageListPage,
//           },
//         ],
//       },
//       {
//         childtitle: "배치관리",
//         childlink: "",
//         childElement: null,
//       },
//       {
//         childtitle: "개인정보파기관리",
//         childlink: "",
//         childElement: null,
//       },
//       {
//         childtitle: "공공마이데이터",
//         childlink: "",
//         childElement: null,
//       },
//     ],
//   },
// ];

export const menuItems: {
  name: string;
  items: {
    name: string;
    items: {
      name: string;
      programId: string;
      url: string;
      element: React.ComponentType | null;
    }[];
    programId?: string;
    url?: string;
    element?: React.ComponentType | null;
  }[];
  programId?: string;
  url?: string;
  element?: React.ComponentType | null;
}[] = [
  {
    name: "업무지원",
    items: [
      {
        name: "회계관리",
        items: [
          {
            name: "플랫폼사 수수료정산",
            programId: "BCM250L",
            url: "",
            element: null,
          },
          {
            name: "가수금 출금실행",
            programId: "BDM305P",
            url: "",
            element: null,
          },
          {
            name: "온라인수납관리",
            programId: "BDM115L",
            url: "",
            element: null,
          },
          {
            name: "CMS출금명세(온라인)",
            programId: "BCA019L",
            url: "",
            element: null,
          },
          {
            name: "가상계좌거래명세",
            programId: "BCM204L",
            url: "",
            element: null,
          },
          {
            name: "가상계좌발급",
            programId: "BCM207L",
            url: "",
            element: null,
          },
          {
            name: "완제계좌가수금조회",
            programId: "BCM305L",
            url: "",
            element: null,
          },
          {
            name: "이기종시재 수기처리이력",
            programId: "BCMTEMP1",
            url: "",
            element: null,
          },
          {
            name: "이기종시재관리",
            programId: "BCM013U",
            url: "",
            element: null,
          },
          {
            name: "자금반환관리",
            programId: "BCM310L",
            url: "",
            element: null,
          },
          {
            name: "효성FMS 처리이력",
            programId: "BCMTEMP2",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "사후관리",
        items: [
          {
            name: "1:1문의",
            programId: "BCM170L",
            url: "",
            element: null,
          },
          {
            name: "CMS신청(변경)",
            programId: "BCM183L",
            url: "",
            element: null,
          },
          {
            name: "대출번호고객정보조회",
            programId: "BCM208P",
            url: "",
            element: null,
          },
          {
            name: "민원내역",
            programId: "BCM930L",
            url: "",
            element: null,
          },
          {
            name: "CMS신청",
            programId: "BCM182L",
            url: "",
            element: null,
          },
          {
            name: "개명신청",
            programId: "BCM030L",
            url: "",
            element: null,
          },
          {
            name: "금리인하요구권",
            programId: "BCM350L",
            url: "",
            element: null,
          },
          {
            name: "대출계약철회",
            programId: "BCM208L",
            url: "",
            element: null,
          },
          {
            name: "제증명신청",
            programId: "BCM181L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "고객관리",
        items: [
          {
            name: "추가대출대상자업로드",
            programId: "BCM090L",
            url: "",
            element: null,
          },
          {
            name: "이벤트응모내역",
            programId: "BCM050L",
            url: "",
            element: null,
          },
          {
            name: "SMS수신거부(080)",
            programId: "BDM320L",
            url: "",
            element: null,
          },
          {
            name: "포인트적립내역",
            programId: "BCM161L",
            url: "",
            element: null,
          },
          {
            name: "쿠폰신청내역",
            programId: "BCM081L",
            url: "",
            element: null,
          },
          {
            name: "두낫콜현황(중앙회)",
            programId: "BCM300L",
            url: "",
            element: null,
          },
          {
            name: "마케팅동의내역",
            programId: "BCM150L",
            url: "",
            element: null,
          },
          {
            name: "멤버십내역",
            programId: "BCM160L",
            url: "",
            element: null,
          },
          {
            name: "본인인증내역",
            programId: "BCM306U",
            url: "",
            element: null,
          },
          {
            name: "고객조회",
            programId: "BCM005L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "기준관리(업무)",
        items: [
          {
            name: "쿠폰 관리",
            programId: "BCM080U",
            url: "",
            element: null,
          },
          {
            name: "ActionPlan기준",
            programId: "BCM910U",
            url: "",
            element: null,
          },
          {
            name: "ActionPlan실행내역",
            programId: "BCM911L",
            url: "",
            element: null,
          },
          {
            name: "템플릿 관리",
            programId: "BCM021L",
            url: "",
            element: null,
          },
          {
            name: "가상팩스배정이력",
            programId: "BCM008U",
            url: "",
            element: null,
          },
          {
            name: "가상팩스번호",
            programId: "BCM001U",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "UMS",
        items: [
          {
            name: "UMS발송승인명세",
            programId: "BCM010U",
            url: "",
            element: null,
          },
          {
            name: "FAX/MO수신이력",
            programId: "BCM002L",
            url: "",
            element: null,
          },
          {
            name: "UMS개별발송",
            programId: "BCM005U",
            url: "",
            element: null,
          },
          {
            name: "UMS발송이력",
            programId: "BCM102L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "경영정보",
        items: [
          {
            name: "일일현황",
            programId: "BCM040L",
            url: "",
            element: null,
          },
          {
            name: "일일현황뷰어팝업",
            programId: "BCM040P",
            url: "",
            element: null,
          },
          {
            name: "중금리공시자료",
            programId: "BCM070U",
            url: "",
            element: null,
          },
          {
            name: "가계대출월보",
            programId: "BCM100L",
            url: "",
            element: null,
          },
          {
            name: "일일실적현황",
            programId: "BCM060L",
            url: "",
            element: null,
          },
          {
            name: "월별영업실적집계",
            programId: "BCM011L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "자산건전성",
        items: [
          {
            name: "사업자휴폐업조회",
            programId: "BDM934L",
            url: "",
            element: null,
          },
          {
            name: "자산건전성분류계산결과",
            programId: "BDM931L",
            url: "",
            element: null,
          },
          {
            name: "자산건전성기초파일업로드",
            programId: "BDM932L",
            url: "",
            element: null,
          },
          {
            name: "자산건전성분류계산",
            programId: "BDM930L",
            url: "",
            element: null,
          },
          {
            name: "자산건전성확정파일업로드",
            programId: "BDM933L",
            url: "",
            element: null,
          },
        ],
      },
    ],
  },
  {
    name: "채권관리",
    items: [
      {
        name: "채권현황",
        items: [
          {
            name: "온라인조회",
            programId: "BDM103P",
            url: "",
            element: null,
          },
          {
            name: "채권담당자 배정",
            programId: "BDM013P",
            url: "",
            element: null,
          },
          {
            name: "초본열람신청",
            programId: "BDM801P",
            url: "",
            element: null,
          },
          {
            name: "초본열람신청_일괄",
            programId: "BDM802P",
            url: "",
            element: null,
          },
          {
            name: "대출완제목록",
            programId: "BDM953L",
            url: "",
            element: null,
          },
          {
            name: "방문관리명세",
            programId: "BDM310L",
            url: "",
            element: null,
          },
          {
            name: "상환유예목록",
            programId: "BDM016L",
            url: "",
            element: null,
          },
          {
            name: "여신거래내역",
            programId: "BDM029L",
            url: "",
            element: null,
          },
          {
            name: "채권배정현황(실시간)",
            programId: "BDM913L",
            url: "",
            element: null,
          },
          {
            name: "채권현황목록",
            programId: "BDM001L",
            url: "",
            element: null,
          },
          {
            name: "초본열람대상명세",
            programId: "BDM070L",
            url: "",
            element: null,
          },
          {
            name: "채권원장",
            programId: "BDM103U",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "사고채권",
        items: [
          {
            name: "법무관리목록",
            programId: "BDM081L",
            url: "",
            element: null,
          },
          {
            name: "법원결정문관리명세",
            programId: "BDM965L",
            url: "",
            element: null,
          },
          {
            name: "사망관리명세",
            programId: "BDM968L",
            url: "",
            element: null,
          },
          {
            name: "개인회생목록",
            programId: "BDM085L",
            url: "",
            element: null,
          },
          {
            name: "워크아웃목록",
            programId: "BDM086L",
            url: "",
            element: null,
          },
          {
            name: "파산관리명세",
            programId: "BDM967L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "특수채권",
        items: [
          {
            name: "특수채권현황",
            programId: "BDM111L",
            url: "",
            element: null,
          },
          {
            name: "특수채권회수내역",
            programId: "BDM900L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "배정관리",
        items: [
          {
            name: "채권(엑셀)이수관",
            programId: "BDM995L",
            url: "",
            element: null,
          },
          {
            name: "채권담당자배정Rule관리",
            programId: "BDM998L",
            url: "",
            element: null,
          },
          {
            name: "채권이수관",
            programId: "BDM994L",
            url: "",
            element: null,
          },
          {
            name: "채권팀배정Rule관리",
            programId: "BDM997L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "기준관리(채권)",
        items: [
          {
            name: "DM양식관리",
            programId: "BDM033L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "조기경보",
        items: [
          {
            name: "대지급정보",
            programId: "BDM924L",
            url: "",
            element: null,
          },
          {
            name: "주민등록번호변경정보",
            programId: "BDM925L",
            url: "",
            element: null,
          },
          {
            name: "일단위연체관리정보",
            programId: "BDM926L",
            url: "",
            element: null,
          },
          {
            name: "채무불이행정보(신용정보사) ",
            programId: "BDM922L",
            url: "",
            element: null,
          },
          {
            name: "CIS대부연체",
            programId: "BDM921L",
            url: "",
            element: null,
          },
          {
            name: "KCB연체정보",
            programId: "BDM923L",
            url: "",
            element: null,
          },
          {
            name: "CIS신용도판단및공공정보",
            programId: "BDM920L",
            url: "",
            element: null,
          },
        ],
      },
    ],
  },
  {
    name: "HOME",
    items: [
      {
        name: "메인",
        items: [
          {
            name: "메인화면",
            programId: "HMM001L",
            url: "home/dashboard",
            element: Dashboard,
          },
        ],
      },
      {
        name: "게시판",
        items: [],
        programId: "",
        url: "",
        element: null,
      },
      {
        name: "홈페이지",
        items: [],
        programId: "",
        url: "",
        element: null,
      },
      {
        name: "블랙컨슈머",
        items: [],
        programId: "",
        url: "",
        element: null,
      },
      {
        name: "알람",
        items: [],
        programId: "",
        url: "",
        element: null,
      },
    ],
  },
  {
    name: "시스템",
    items: [
      {
        name: "테스트",
        items: [],
        programId: "",
        url: "",
        element: null,
      },
      {
        name: "코드관리",
        items: [
          {
            name: "nTree기본코드",
            programId: "CMC021U",
            url: "",
            element: null,
          },
          {
            name: "공통코드",
            programId: "CMC001U",
            url: "system/commoncode",
            element: CommonCodePage,
          },
          {
            name: "심사거절사유코드",
            programId: "CMC020L",
            url: "",
            element: null,
          },
          {
            name: "코드매핑(vs채널플랫폼)",
            programId: "CMC009U",
            url: "",
            element: null,
          },
          {
            name: "표준산업분류코드(국가)",
            programId: "CMC010U",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "기준관리(중앙회)",
        items: [
          {
            name: "부서(지점)",
            programId: "CMC007U",
            url: "",
            element: null,
          },
          {
            name: "영업일",
            programId: "CMC005L",
            url: "",
            element: null,
          },
          {
            name: "이기종사번",
            programId: "CMU040U",
            url: "",
            element: null,
          },
          {
            name: "코드매핑(vs중앙회직업코드)",
            programId: "CMC008U",
            url: "system/jobcode",
            element: JobCodePage,
          },
        ],
      },
      {
        name: "기준관리",
        items: [
          {
            name: "소득구분요율관리",
            programId: "CMC040U",
            url: "",
            element: null,
          },
          {
            name: "신용심사상품",
            programId: "CRA005U",
            url: "",
            element: null,
          },
          {
            name: "신용심사승인전결기준",
            programId: "CMU008L",
            url: "",
            element: null,
          },
          {
            name: "신용심사한도조회기준",
            programId: "CRA101U",
            url: "",
            element: null,
          },
          {
            name: "접수채널",
            programId: "CMC003U",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "메뉴권한",
        items: [
          {
            name: "메뉴관리",
            programId: "CMM001U",
            url: "system/menumanagement",
            element: MenuManagement,
          },
          {
            name: "권한관리",
            programId: "CMM005U",
            url: "",
            element: null,
          },
          {
            name: "화면관리",
            programId: "CMM002U",
            url: "system/screenmanagement",
            element: ScreenManagement,
          },
        ],
      },
      {
        name: "사용자",
        items: [
          {
            name: "사용자",
            programId: "CMU001U",
            url: "system/user",
            element: User,
          },
          {
            name: "사용자신용조회권한",
            programId: "CMU011U",
            url: "",
            element: null,
          },
          {
            name: "팀(파트)",
            programId: "CMC002U",
            url: "system/team",
            element: Team,
          },
        ],
      },
      {
        name: "이력조회",
        items: [
          {
            name: "엑셀다운로드이력",
            programId: "CML010L",
            url: "",
            element: null,
          },
          {
            name: "개인정보식별조회이력",
            programId: "CML040L",
            url: "",
            element: null,
          },
          {
            name: "동기화처리이력",
            programId: "CML050L",
            url: "",
            element: null,
          },
          {
            name: "사용자로그인이력",
            programId: "CML001L",
            url: "",
            element: null,
          },
          {
            name: "사용자신용조회권한변경이력",
            programId: "CMU011H",
            url: "",
            element: null,
          },
          {
            name: "사용자정보변경이력",
            programId: "CMU001TH",
            url: "",
            element: null,
          },
          {
            name: "사용자화면접근이력",
            programId: "CML002L",
            url: "",
            element: null,
          },
          {
            name: "신용정보과다조회명세",
            programId: "CMU021U",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "전문관리",
        items: [
          {
            name: "대내외채널전문처리이력",
            programId: "CMN006L",
            url: "",
            element: null,
          },
          {
            name: "전문관리",
            programId: "CMN002L",
            url: "",
            element: null,
          },
          {
            name: "전문처리이력",
            programId: "CMN003L",
            url: "system/message",
            element: MessageListPage,
          },
          {
            name: "호스트관리",
            programId: "CMN001L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "배치관리",
        items: [
          {
            name: "배치등록",
            programId: "CMM008U",
            url: "",
            element: null,
          },
          {
            name: "배치수행이력",
            programId: "CMM009L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "개인정보파기관리",
        items: [
          {
            name: "부결자파기내역",
            programId: "CMD010L",
            url: "",
            element: null,
          },
          {
            name: "개인정보파기",
            programId: "CMD001L",
            url: "",
            element: null,
          },
          {
            name: "파기복구",
            programId: "CMD002L",
            url: "",
            element: null,
          },
        ],
      },
    ],
  },
  {
    name: "공통팝업",
    items: [
      {
        name: "팝업메뉴",
        items: [
          {
            name: "우편번호검색",
            programId: "CPA109P",
            url: "",
            element: null,
          },
          {
            name: "사용자 명세 설정",
            programId: "CPA005P",
            url: "",
            element: null,
          },
          {
            name: "여신그룹검색",
            programId: "CPA304M",
            url: "",
            element: null,
          },
          {
            name: "여신상품멀티검색",
            programId: "CPA302M",
            url: "",
            element: null,
          },
          {
            name: "사용자검색",
            programId: "CPA300P",
            url: "",
            element: null,
          },
          {
            name: "여신상품검색",
            programId: "CPA302P",
            url: "",
            element: null,
          },
          {
            name: "신용조회권한관리팝업",
            programId: "CPA013P",
            url: "",
            element: null,
          },
          {
            name: "사고채권스크래핑",
            programId: "CPB200P",
            url: "",
            element: null,
          },
          {
            name: "신용상품추가정보",
            programId: "CPA052P",
            url: "",
            element: null,
          },
          {
            name: "상품별필수서류",
            programId: "CPA051P",
            url: "",
            element: null,
          },
          {
            name: "고객정보변경이력",
            programId: "CPB105P",
            url: "",
            element: null,
          },
          {
            name: "고객검색",
            programId: "CPT315P_TSUB01",
            url: "",
            element: null,
          },
          {
            name: "(채권현황관리)조기경보",
            programId: "CPB504P",
            url: "",
            element: null,
          },
          {
            name: "첨부서류",
            programId: "CPA900P",
            url: "",
            element: null,
          },
          {
            name: "회계변경이력",
            programId: "CPB029P",
            url: "",
            element: null,
          },
          {
            name: "DM 이력조회/수정",
            programId: "CPA033P_TSUB01",
            url: "",
            element: null,
          },
          {
            name: "여신거래내역팝업",
            programId: "CPB106P",
            url: "",
            element: null,
          },
          {
            name: "수신팩스 담당자변경",
            programId: "CPB151P",
            url: "",
            element: null,
          },
          {
            name: "통화예약",
            programId: "CPA308P",
            url: "",
            element: null,
          },
          {
            name: "대출계약자 적합성 확인서",
            programId: "CPA901P",
            url: "",
            element: null,
          },
          {
            name: "신용정보조회",
            programId: "CPR000P",
            url: "",
            element: null,
          },
          {
            name: "SMS발송",
            programId: "CPA301P",
            url: "",
            element: null,
          },
          {
            name: "대출계산기",
            programId: "CPA500P",
            url: "",
            element: null,
          },
          {
            name: "발급관리",
            programId: "CPB100P",
            url: "",
            element: null,
          },
          {
            name: "대내외 전문이력상세조회",
            programId: "CPA401P",
            url: "",
            element: null,
          },
          {
            name: "SMS발송2",
            programId: "CPA010P",
            url: "",
            element: null,
          },
          {
            name: "멤버십 관리",
            programId: "CPB016P",
            url: "",
            element: null,
          },
          {
            name: "신용조회이력",
            programId: "CPB076P",
            url: "",
            element: null,
          },
          {
            name: "고객원장 전화번호관리",
            programId: "CPB011P",
            url: "",
            element: null,
          },
          {
            name: "1:1문의답변",
            programId: "CPA307P",
            url: "",
            element: null,
          },
          {
            name: "개명관리",
            programId: "CPB152P",
            url: "",
            element: null,
          },
          {
            name: "PLAN상품관리 ",
            programId: "CPB153P",
            url: "",
            element: null,
          },
          {
            name: "상담요약",
            programId: "CPB104P",
            url: "",
            element: null,
          },
          {
            name: "전문검색",
            programId: "CPA020P",
            url: "",
            element: null,
          },
          {
            name: "엑셀다운로드사유팝업2",
            programId: "CPA029P",
            url: "",
            element: null,
          },
          {
            name: "고객입력소득확인",
            programId: "CPA106P",
            url: "",
            element: null,
          },
          {
            name: "CMS즉시출금",
            programId: "CPB107P",
            url: "",
            element: null,
          },
          {
            name: "SMS 금지(상태변경)",
            programId: "CPB961P",
            url: "",
            element: null,
          },
          {
            name: "전문이력상세조회",
            programId: "CPA400P",
            url: "",
            element: null,
          },
          {
            name: "통합코드멀티검색",
            programId: "CPA318P",
            url: "",
            element: null,
          },
          {
            name: "신용등급별금리표",
            programId: "CPA050P",
            url: "",
            element: null,
          },
          {
            name: "개인환경설정",
            programId: "CPT101P",
            url: "",
            element: null,
          },
          {
            name: "빠른검색",
            programId: "CPT315P",
            url: "",
            element: null,
          },
          {
            name: "민원관리등록",
            programId: "CPA503P",
            url: "",
            element: null,
          },
          {
            name: "안내장 양식인쇄",
            programId: "CPA033P",
            url: "",
            element: null,
          },
          {
            name: "CMS계좌 변경",
            programId: "CPB630P",
            url: "",
            element: null,
          },
          {
            name: "사고채권변제스크래핑",
            programId: "CPB201P",
            url: "",
            element: null,
          },
          {
            name: "소득계산기",
            programId: "CPA105P",
            url: "",
            element: null,
          },
          {
            name: "알람",
            programId: "CPT004P",
            url: "",
            element: null,
          },
          {
            name: "파기고객관리",
            programId: "CPT011P",
            url: "",
            element: null,
          },
          {
            name: "공통코드검색",
            programId: "CPA303M",
            url: "",
            element: null,
          },
          {
            name: "고객검색팝업",
            programId: "CPB310P",
            url: "",
            element: null,
          },
          {
            name: "DM금지(상태변경)",
            programId: "CPB962P",
            url: "",
            element: null,
          },
          {
            name: "사용자검색",
            programId: "CPA301M",
            url: "",
            element: null,
          },
          {
            name: "공통코드검색",
            programId: "CPA304P",
            url: "",
            element: null,
          },
          {
            name: "신분증진위확인",
            programId: "CPA121P",
            url: "",
            element: null,
          },
          {
            name: "사고관리",
            programId: "CPB086P",
            url: "",
            element: null,
          },
          {
            name: "금리인하요구",
            programId: "CPB150P",
            url: "",
            element: null,
          },
          {
            name: "상환유예신청",
            programId: "CPB063P",
            url: "",
            element: null,
          },
          {
            name: "출금이체동의 이력",
            programId: "CPB031P",
            url: "",
            element: null,
          },
          {
            name: "UMS예약발송사유",
            programId: "CPA031P",
            url: "",
            element: null,
          },
          {
            name: "사용자별 화면권한",
            programId: "CPA015P",
            url: "",
            element: null,
          },
          {
            name: "첨부서류(tif)",
            programId: "CPA900P_SUB1",
            url: "",
            element: null,
          },
          {
            name: "첨부서류(Oz)",
            programId: "CPA900P_SUB2",
            url: "",
            element: null,
          },
          {
            name: "직업구분코드팝업",
            programId: "CPA309P",
            url: "",
            element: null,
          },
          {
            name: "특수채권회수내역팝업",
            programId: "CPB137P",
            url: "",
            element: null,
          },
          {
            name: "멤버십포인트관리",
            programId: "CPA306P",
            url: "",
            element: null,
          },
          {
            name: "권한관리팝업",
            programId: "CPA006P",
            url: "",
            element: null,
          },
          {
            name: "그룹화면설정",
            programId: "CPA004P",
            url: "",
            element: null,
          },
          {
            name: "팀(파트)",
            programId: "CPA413P",
            url: "",
            element: null,
          },
          {
            name: "FAX발송(버튼)",
            programId: "CPF005P",
            url: "",
            element: null,
          },
          {
            name: "표준SMS문구",
            programId: "CPA011P",
            url: "",
            element: null,
          },
          {
            name: "(고객별)조기경보요약",
            programId: "CPA955P",
            url: "",
            element: null,
          },
          {
            name: "CSS조회이력",
            programId: "CPR100P",
            url: "",
            element: null,
          },
          {
            name: "사용자검색",
            programId: "CPA305M",
            url: "",
            element: null,
          },
          {
            name: "표준산업분류코드검색",
            programId: "CPA365P",
            url: "",
            element: null,
          },
          {
            name: "고객원장 주소관리",
            programId: "CPB010P",
            url: "",
            element: null,
          },
          {
            name: "법무관리",
            programId: "CPB082P",
            url: "",
            element: null,
          },
          {
            name: "엑셀다운로드사유팝업",
            programId: "CPA030P",
            url: "",
            element: null,
          },
        ],
      },
    ],
  },
  {
    name: "신용심사",
    items: [
      {
        name: "신용심사",
        items: [
          {
            name: "자동기표/송금",
            programId: "LND032P",
            url: "",
            element: null,
          },
          {
            name: "심사메모관리",
            programId: "LNC005P",
            url: "",
            element: null,
          },
          {
            name: "결재대기목록",
            programId: "LND113U",
            url: "",
            element: null,
          },
          {
            name: "대출등록대기목록",
            programId: "LND015U",
            url: "",
            element: null,
          },
          {
            name: "심사접수진행상태",
            programId: "LND014U",
            url: "",
            element: null,
          },
          {
            name: "심사진행목록",
            programId: "LND013U",
            url: "",
            element: null,
          },
          {
            name: "적합성확인목록",
            programId: "LND901L",
            url: "",
            element: null,
          },
          {
            name: "전자계약대기목록",
            programId: "LND022U",
            url: "",
            element: null,
          },
          {
            name: "전화상담예약목록",
            programId: "LNC016U",
            url: "",
            element: null,
          },
          {
            name: "심사원장",
            programId: "LNC002U",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "심사완료",
        items: [
          {
            name: "대출완료목록",
            programId: "LND018U",
            url: "",
            element: null,
          },
          {
            name: "대출완료(당대환)목록",
            programId: "LND984L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "현황조회",
        items: [
          {
            name: "상담원심사현황",
            programId: "LND040L",
            url: "",
            element: null,
          },
          {
            name: "대외플랫폼접수현황",
            programId: "LND041L",
            url: "",
            element: null,
          },
          {
            name: "심사부결현황",
            programId: "LND007U",
            url: "",
            element: null,
          },
          {
            name: "심사첨부파일등록현황",
            programId: "LND024U",
            url: "",
            element: null,
          },
          {
            name: "심사현황",
            programId: "LND001L",
            url: "",
            element: null,
          },
        ],
      },
      {
        name: "기준관리(심사)",
        items: [
          {
            name: "사전거절(PreScreen)대상",
            programId: "LNC108U",
            url: "",
            element: null,
          },
          {
            name: "심사배정룰",
            programId: "LND102U",
            url: "",
            element: null,
          },
          {
            name: "심사배정상담원",
            programId: "LNC401U",
            url: "",
            element: null,
          },
        ],
      },
    ],
  },
];
