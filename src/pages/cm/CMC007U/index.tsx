/**
 * 부서(지점) 페이지
 * 시스템 > 기준관리(중앙회) > 부서(지점)
 * CMC007U
 */
import { ValueType } from "realgrid";
import Button from "../../../components/button/Button";
import FooterForm from "./components/FooterForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import {
  departmentService,
  IDepartment,
} from "../../../api/services/departmentService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "brCode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "viewSeq",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brTelno",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "brFaxno",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "crtDtm",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "brCode",
    fieldName: "brCode",
    type: "data",
    width: "150",

    header: {
      text: "부점코드",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "brNm",
    fieldName: "brNm",
    type: "data",
    width: "120",
    styleName: "text-left",
    header: {
      text: "부점명",
      showTooltip: false,
    },
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "120",

    header: "부점약어",
  },
  {
    name: "viewSeq",
    fieldName: "viewSeq",
    type: "data",
    width: "80",

    header: "보기순서",
  },
  {
    name: "brTelno",
    fieldName: "brTelno",
    type: "data",
    width: "180",

    header: "대표번호",
  },
  {
    name: "brFaxno",
    fieldName: "brFaxno",
    type: "data",
    width: "180",

    header: "팩스번호",
  },
  {
    name: "",
    fieldName: "",
    type: "data",
    width: "180",

    header: "등록자",
  },
  {
    name: "crtDtm",
    fieldName: "crtDtm",
    type: "data",
    width: "220",

    header: "등록일시",
  },
];

function CMC007U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IDepartment[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await departmentService.getDepartments();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-2 relative h-full">
      <div className="flex justify-end">
        <div className="flex gap-2">
          <Button text="조회" className="w-12 btn-primary btn-sm" />
        </div>
      </div>

      {/* Table */}
      <div className="flex-grow">
        <RealGridTable
          ref={realGridRef}
          fields={fields}
          columns={columns}
          onCellDblClicked={(grid, data) => {
            console.log("onCellDblClicked", data.itemIndex);
          }}
        />
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
  );
}

export default CMC007U;
