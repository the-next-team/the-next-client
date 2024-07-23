/**
 * 팀(파트) 페이지
 * 시스템 > 사용자 > 팀(파트)
 * CMC002U
 */
import { useEffect, useRef, useState } from "react";
import { LocalDataProvider, ValueType } from "realgrid";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import { ITeam, TeamService } from "../../../api/services/teamService";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";

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
    fieldName: "depCode",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "depNm",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "viewSeq",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "depTelno",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "depFaxno",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "useYn",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "brCode",
    fieldName: "brCode",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "부점코드",
      showTooltip: true,
      tooltip: '<span style="color: red;">이름</span>',
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
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "부점명",
      showTooltip: false,
    },
  },
  {
    name: "depCode",
    fieldName: "depCode",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: "팀(파트)코드",
  },
  {
    name: "depNm",
    fieldName: "depNm",
    type: "data",
    width: "130",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "팀(파트)명",
      showTooltip: false,
    },
    numberFormat: "0",
  },
  {
    name: "viewSeq",
    fieldName: "viewSeq",
    type: "data",
    width: "130",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "보기순서",
      showTooltip: false,
    },
    numberFormat: "0",
  },
  {
    name: "depTelno",
    fieldName: "depTelno",
    type: "data",
    width: "300",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "대표번호",
      showTooltip: false,
    },
  },
  {
    name: "depFaxno",
    fieldName: "depFaxno",
    type: "data",
    width: "300",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "팩스번호",
      showTooltip: false,
    },
  },
  {
    name: "useYn",
    fieldName: "useYn",
    type: "data",
    width: "80",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "사용여부",
      showTooltip: false,
    },
  },
];

function CMC002U() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [items, setItems] = useState<ITeam[]>([]);
  const realgridElement = useRef<HTMLDivElement | null>(null);
  var dataProvider = new LocalDataProvider(true);
  const [formData, setFormData] = useState({
    brCode: "",
  });
  const realGridRef = useRef<RealGridHandle>(null);

  useEffect(() => {
    findAll();
  }, [formData]);

  const findAll = async () => {
    try {
      const response = await TeamService.getTeam(formData);
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    // gridView.onCellClicked = (grid, data) => {
    //   if (data.itemIndex) {
    //     setSelectedIndex(data.itemIndex);
    //   }
    // };
    // gridView.onCellDblClicked = (grid, data) => {
    //   console.log("onCellDblClicked", data.itemIndex);
    //   if (data.itemIndex) {
    //     setSelectedIndex(data.itemIndex);
    //   }
    // };
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 verflow-x-auto">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              setSelectedIndex(null);
              setFormData(data);
            }}
            onExcelClick={() => {
              realGridRef.current?.excelExport();
            }}
          />
        </div>

        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <RealGridTable
              ref={realGridRef}
              fields={fields}
              columns={columns}
              onCellClicked={(grid, data) => {
                console.log("onCellClicked", data.itemIndex);
                if (data.itemIndex) {
                  setSelectedIndex(data.itemIndex);
                }
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div>
          <FooterForm
            initialValues={selectedIndex ? items[selectedIndex] : null}
            onAdd={(data) => {
              console.log("onAdd", data);
            }}
            onEdit={(data) => {
              console.log("onEdit", data);
            }}
            onReset={() => {
              console.log("onReset");
              setSelectedIndex(null);
            }}
            onDelete={() => {
              console.log("onDelete");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CMC002U;
