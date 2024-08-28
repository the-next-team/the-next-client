/**
 * 화면권한그룹 페이지
 * 시스템 > 메뉴관리 > 화면권한그룹
 * CMM005U
 */
import { ValueType } from "realgrid";
import Button from "../../../components/button/Button";
import FooterForm from "./components/FooterForm";
import { useRef } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";

const fields = [
  {
    fieldName: "a",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "b",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "c",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "d",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "e",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "f",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "g",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "a",
    fieldName: "a",
    type: "data",
    width: "120",

    header: "화면그룹코드",
  },
  {
    name: "b",
    fieldName: "b",
    type: "data",
    width: "240",

    header: "화면 그룹명",
  },
  {
    name: "c",
    fieldName: "c",
    type: "data",
    width: "120",

    header: "프로그램 명세",
  },
  {
    name: "d",
    fieldName: "d",
    type: "data",
    width: "120",

    header: "사용자 명세",
  },
  {
    name: "e",
    fieldName: "e",
    type: "data",
    width: "120",

    header: "등록자",
  },
  {
    name: "f",
    fieldName: "f",
    type: "data",
    width: "120",

    header: "등록일시",
  },
  {
    name: "g",
    fieldName: "g",
    type: "data",
    width: "120",

    header: "사용",
  },
];

function CMM005U() {
  const realGridRef = useRef<RealGridHandle>(null);

  return (
    <div className="flex flex-col gap-2 relative h-full">
      {/* Header */}
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="w-12 btn-primary btn-sm" />
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
        </div>
      </div>

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

export default CMM005U;
