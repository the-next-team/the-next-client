import { GridView, LocalDataProvider, ValueType } from "realgrid";
import Button from "../../components/button/ExampleButton";
import { useEffect, useRef } from "react";
import FooterForm from "./components/FooterForm";

function CMM005U() {
  const realgridElement = useRef<HTMLDivElement | null>(null);
  var dp = new LocalDataProvider(true);

  useEffect(() => {
    const container = realgridElement.current;
    dp = new LocalDataProvider(true);
    const gv = new GridView(container as any);

    gv.setEditOptions({
      editable: false,
    });
    gv.setDataSource(dp);
    dp.setFields([
      {
        fieldName: "code",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "groupName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "name",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "user",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "registrar",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "dataTime",
        dataType: ValueType.DATETIME,
      },
      {
        fieldName: "useYn",
        dataType: ValueType.TEXT,
      },
    ]);
    gv.setColumns([
      {
        name: "code",
        fieldName: "code",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "화면그룹코드",
      },
      {
        name: "groupName",
        fieldName: "groupName",
        type: "data",
        width: "240",
        styles: {
          textAlignment: "center",
        },
        header: "화면 그룹명",
      },
      {
        name: "name",
        fieldName: "name",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "프로그램 명세",
      },
      {
        name: "user",
        fieldName: "user",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "사용자 명세",
      },
      {
        name: "registrar",
        fieldName: "registrar",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "등록자",
      },
      {
        name: "dataTime",
        fieldName: "dataTime",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "등록일시",
      },
      {
        name: "useYn",
        fieldName: "useYn",
        type: "data",
        width: "120",
        styles: {
          textAlignment: "center",
        },
        header: "사용",
      },
    ]);

    gv.onCellClicked = () => {
      console.log("onCellClicked");
    };
    gv.onCellDblClicked = () => {
      console.log("onCellDblClicked");
    };

    return () => {
      dp.clearRows();
      gv.destroy();
      dp.destroy();
    };
  }, []);

  return (
    <div className="verflow-x-auto ">
      {/* Header */}
      <div className="flex justify-end">
        <div className="flex gap-2 mb-2">
          <Button text="조회" className="w-12 btn-primary btn-sm" />
          <Button text="초기화" className="w-12 btn-primary btn-sm" />
        </div>
      </div>

      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden ">
          {/* RealGrid */}
          <div
            className="h-[500px] min-w-full divide-y table-fixed divide-slate-100 dark:divide-slate-700"
            ref={realgridElement}
          ></div>
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
  );
}

export default CMM005U;
