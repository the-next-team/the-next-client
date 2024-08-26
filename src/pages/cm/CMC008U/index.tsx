/**
 * 직업/직군코드
 * 시스템 > 코드관리 > 직업/직군코드
 * CMC008U
 */
import { ValueType } from "realgrid";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import { CodeService, IJobCode } from "../../../api/services/codeService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import { useQuery } from "@tanstack/react-query";

const fields = [
  {
    fieldName: "jobCode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "jobName",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "jobLevel1",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "jobLevel2",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "acctJobCode",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "jobCode",
    fieldName: "jobCode",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "직업코드",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "jobName",
    fieldName: "jobName",
    type: "data",
    width: "300",
    styleName: "text-left",
    header: {
      text: "직업명",
      showTooltip: false,
    },
  },
  {
    name: "jobLevel1",
    fieldName: "jobLevel1",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: "직업등급1",
  },
  {
    name: "jobLevel2",
    fieldName: "jobLevel2",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: "직업등급2",
  },
  {
    name: "acctJobCode",
    fieldName: "acctJobCode",
    type: "data",
    width: "100",
    styles: {
      textAlignment: "center",
    },
    header: "계정계 직업코드",
  },
];

function CMC008U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IJobCode[]>([]);

  const { data } = useQuery({
    queryKey: ["jobList"],
    queryFn: async () => {
      const response = await CodeService.getJobCode();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
        return response.data;
      }
      return [];
    },
  });

  return (
    <div className="flex flex-col gap-2 relative h-full ">
      {/* Header */}
      <div>
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </div>

      {/* Body */}
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
        <FooterForm onSubmit={(data) => console.log(data)} />
      </div>
    </div>
  );
}

export default CMC008U;
