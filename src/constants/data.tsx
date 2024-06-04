import Dashboard from "../pages/dashboard/Dashboard";
import MenuManagement from "../pages/menumanagement/MenuManagement";
import CommonCodePage from "../pages/preferences/code/common/CommonCodePage";
import Team from "../pages/preferences/team/Team";
import User from "../pages/preferences/user/User";
import ScreenManagement from "../pages/screen/ScreenManagement";
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

export const menuItems: MenuItemType[] = [
  {
    title: "메인",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "대시보드",
        childlink: "home/dashboard",
        childElement: Dashboard,
      },
    ],
  },
  {
    title: "심사관리",
    icon: "heroicons-outline:building-library",
    isHide: false,
    child: [
      {
        childtitle: "심사진행목록",
        multi_menu: [
          {
            multiTitle: "심사진행목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사접수진행상태",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "적합성확인목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "결재대기목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "전자계약대기목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출등록대기목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "심사완료",
        multi_menu: [
          {
            multiTitle: "대출완료목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출완료(당대환)목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "현황조회",
        multi_menu: [
          {
            multiTitle: "대외플랫폼접수현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "상담원심사현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사부결현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사첨부파일등록현황",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "기준관리",
        multi_menu: [
          {
            multiTitle: "사전거절(PreScreen)대상",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사배정상담원",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심사배정룰",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "상품별 기준금리관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "채권관리",
    icon: "heroicons-outline:document-chart-bar",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "채권현황",
        multi_menu: [
          {
            multiTitle: "채권현황목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "여신거래내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출완제목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "초본열람대상명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "방문관리명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채권배정현황(실시간)",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사고채권",
        multi_menu: [
          {
            multiTitle: "개인회생목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "워크아웃목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "파산관리명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사망관리명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "법무관리목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "법원결정문관리명세",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "특수채권",
        multi_menu: [
          {
            multiTitle: "특수채권현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "특수채권회수내역",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "조기경보",
        multi_menu: [
          {
            multiTitle: "CIS신용도판단및공공정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CIS대부면체",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채무불이행정보(신용정보사)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "KCB연체정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대지급정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "주민등록번호변경정보",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "일단위연체관리정보",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "배정관리",
        multi_menu: [
          {
            multiTitle: "채권담당자배덩Rule관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채권팀배정Rule관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "채권(엑셀)이수관",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "기준관리",
        multi_menu: [
          {
            multiTitle: "DM양식관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "업무지원",
    icon: "heroicons-outline:chart-pie",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "회계관리",
        multi_menu: [
          {
            multiTitle: "가상계좌발급",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가상계좌거래명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CMS출금명세(온라인)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "완제계좌가수금조회",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "이기종시제관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "온라인수납관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "플랫폼사 수수료정산",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사후관리",
        multi_menu: [
          {
            multiTitle: "민원내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "대출계약철회",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "금리인하요구권",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "제증명신청",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CMS신청",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "CMS신청(변경)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "개명신청",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "1:1문의",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "고객관리",
        multi_menu: [
          {
            multiTitle: "본인인증내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "고객조회",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "맴버십내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "포인트적립내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "쿠폰신청내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "마케팅동의내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "이벤트응모내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "추가대출대상자업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "두낫콜현황(중앙회)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "SMS수신거부(080)",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "경영정보",
        multi_menu: [
          {
            multiTitle: "일일현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "일일실적현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "중금리공시자료",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가계대출월보",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "자산건전성",
        multi_menu: [
          {
            multiTitle: "자산건전성분류계산",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "자산건전성분류계산결과",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "자산건전성기초파일업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사업자휴폐업조회",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "UMS",
        multi_menu: [
          {
            multiTitle: "UMS개별발송",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "UMS발송승인명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "UMS발송이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "FAX/MO수신이력",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "기준관리(업무)",
        multi_menu: [
          {
            multiTitle: "탬플릿 관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "ActionPlan기준",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "ActionPlan실행내역",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가상팩스번호",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "가상팩스배정이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "쿠폰 관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "QUPID",
        multi_menu: [
          {
            multiTitle: "서식 정보설정",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송 대상명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송 승인",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송 이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "발송대상액셀목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },

  {
    title: "NPL채권",
    icon: "heroicons-outline:swatch",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "기준채권",
        multi_menu: [
          {
            multiTitle: "상품관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "매입",
        multi_menu: [
          {
            multiTitle: "매입채권등록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "매입채권명세",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "상환스케줄/조건표 등록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "채권",
        multi_menu: [
          {
            multiTitle: "채권명세",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "상환",
        multi_menu: [
          {
            multiTitle: "입금이력",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "신용회복입금등록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "통계",
        multi_menu: [
          {
            multiTitle: "일마감현황",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "월별 회계처리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "신정원 개인대출집중",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "기업금융",
    icon: "heroicons-outline:home",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "홈",
        childlink: "",
        childElement: null,
      },
      {
        childtitle: "고객관리",
        multi_menu: [
          {
            multiTitle: "고객목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "사업관리",
        multi_menu: [
          {
            multiTitle: "사업목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "기타안건목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "신청관리",
        multi_menu: [
          {
            multiTitle: "신청목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "부의목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심의목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심의결과목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "승인목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "부결목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "계좌연결대상목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "통합목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "계정관리",
        multi_menu: [
          {
            multiTitle: "대출계좌목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "유가증권계좌목록",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
      {
        childtitle: "DB정보관리",
        multi_menu: [
          {
            multiTitle: "원장조회(여신)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "원장조회(유가증권)",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "문서관리목록",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "기준항목관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "PF현황 엑셀업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "자산건전성 엑셀업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "심의위원회관리",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "리스크평가 엑셀업로드",
            multiLink: "",
            multiElement: null,
          },
          {
            multiTitle: "사업유형코드관리",
            multiLink: "",
            multiElement: null,
          },
        ],
      },
    ],
  },
  {
    title: "시스템",
    icon: "heroicons-outline:cog",
    isHide: false,
    isMultiple: true,
    child: [
      {
        childtitle: "코드관리",
        multi_menu: [
          {
            multiTitle: "공통코드",
            multiLink: "system/commoncode",
            multiElement: CommonCodePage,
          },
        ],
      },
      {
        childtitle: "메뉴권한",
        multi_menu: [
          {
            multiTitle: "메뉴관리",
            multiLink: "system/menumanagement",
            multiElement: MenuManagement,
          },
          {
            multiTitle: "화면관리",
            multiLink: "system/screenmanagement",
            multiElement: ScreenManagement,
          },
        ],
      },
      {
        childtitle: "사용자",
        multi_menu: [
          {
            multiTitle: "팀(파트)",
            multiLink: "system/team",
            multiElement: Team,
          },
          {
            multiTitle: "사용자",
            multiLink: "system/user",
            multiElement: User,
          },
        ],
      },
      {
        childtitle: "이력조회",
        childlink: "",
        childElement: null,
      },
      {
        childtitle: "전문관리",
        multi_menu: [
          {
            multiTitle: "전문처리이력",
            multiLink: "system/message",
            multiElement: MessageListPage,
          },
        ],
      },
      {
        childtitle: "배치관리",
        childlink: "",
        childElement: null,
      },
      {
        childtitle: "개인정보파기관리",
        childlink: "",
        childElement: null,
      },
      {
        childtitle: "공공마이데이터",
        childlink: "",
        childElement: null,
      },
    ],
  },
];

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   menuItems.push(...sampleMenuItems);
// }
