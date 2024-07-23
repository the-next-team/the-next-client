import { useEffect, useRef, useState } from "react";
import { GridView, LocalDataProvider, ValueType } from "realgrid";
import {
  IUserName,
  userNameService,
} from "../../../../api/services/userNameService";
import { ApiResponseStats } from "../../../../api/models/common/apiResponseStats";
import RealGridTable, {
  RealGridHandle,
} from "../../../../components/table/RealGridTable";

type Props = {
  onClick: (item: IUserName) => void;
};

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

function Table({ onClick }: Props) {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<IUserName[]>([]);
  var dp = new LocalDataProvider(true);
  const [formData, setFormData] = useState({
    brCode: "",
  });

  const realGridRef = useRef<RealGridHandle>(null);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await userNameService.getUserName();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  // useEffect(() => {
  //   const container = realgridElement.current;
  //   dp = new LocalDataProvider(true);
  //   const gv = new GridView(container as any);

  //   gv.setDataSource(dp);
  //   dp.setFields([]);
  //   gv.setColumns([]);

  //   gv.onCellClicked = (grid, data) => {
  //     if (data.itemIndex) {
  //     }
  //   };

  //   gv.onCellDblClicked = () => {
  //     console.log("onCellDblClicked");
  //   };

  //   dp.setRows(items);

  //   return () => {
  //     dp.clearRows();
  //     gv.destroy();
  //     dp.destroy();
  //   };
  // }, [items]);

  return (
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
  );
}

export default Table;
