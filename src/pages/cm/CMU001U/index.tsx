/**
 * 사용자 관리 페이지
 * 시스템 > 사용자 > 사용자 관리
 * CMU001U
 */
import { ValueType } from "realgrid";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { userNameService } from "../../../api/services/userNameService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "userNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "sabNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "createdDate",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "사용자ID",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "userNm",
    fieldName: "userNm",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "사용자명",
      showTooltip: false,
    },
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "시스템사번",
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "직급",
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "사번",
  },
  {
    name: "sabNm",
    fieldName: "sabNm",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "상태",
  },
  {
    name: "brNm",
    fieldName: "brNm",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "부점",
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "화면권한",
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "이기종ID",
  },
];

function CMU001U() {
  const realgridElement = useRef<HTMLDivElement | null>(null);

  const realGridRef = useRef<RealGridHandle>(null);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await userNameService.getUserName();
      if (response.status === ApiResponseStats.OK) {
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex flex-col gap-2 overflow-x-auto ">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
            onExcelClick={() => {}}
          />
        </div>

        {/* <Card> */}
        <div>
          <div
            className="h-[500px] mt-2 min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
            ref={realgridElement}
          >
            <RealGridTable
              ref={realGridRef}
              fields={fields}
              columns={columns}
              onCellClicked={(grid, data) => {
                console.log("onCellClicked", data.itemIndex);
                if (data.itemIndex) {
                }
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div>
          <FooterForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CMU001U;
