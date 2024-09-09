/**
 * 공통코드관리 페이지
 * 시스템 > 코드관리 > 공통코드관리
 * CMC001U
 */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { ValueType } from "realgrid";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";
import { CodeService, ICodeItem } from "../../../api/services/codeService";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/ExampleModal";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import CodeItemTableFooter from "./components/CodeItemTableFooter";
import CodeTableFooter from "./components/CodeTableFooter";
import HeaderForm from "./components/HeaderForm";

type Props = {};

const leftFields = [
  {
    fieldName: "kind",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "useYn",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "createdDate",
    dataType: ValueType.DATETIME,
  },
  {
    fieldName: "a",
    dataType: ValueType.DATETIME,
  },
  {
    fieldName: "b",
    dataType: ValueType.DATETIME,
  },
];

const rightFields = [
  {
    fieldName: "code",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "name",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "useYn",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "updatedDate",
    dataType: ValueType.DATETIME,
  },
  {
    fieldName: "priority",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "createdDate",
    dataType: ValueType.DATETIME,
  },
];

const leftColumns = [
  {
    name: "kind",
    fieldName: "kind",
    type: "data",
    width: "80",
    header: {
      text: "코드",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "name",
    fieldName: "name",
    type: "data",
    width: "150",
    styleName: "text-left",
    header: {
      text: "코드명",
      showTooltip: false,
    },
  },
  {
    name: "useYn",
    fieldName: "useYn",
    type: "data",
    width: "80",
    header: "사용여부",
  },
  {
    name: "a",
    fieldName: "a",
    type: "data",
    width: "80",
    header: "주요코드",
  },
  {
    name: "b",
    fieldName: "b",
    type: "data",
    width: "80",
    header: "코드셋",
  },
  {
    name: "createdDate",
    fieldName: "createdDate",
    type: "data",
    width: "220",
    header: "생성일",
  },
];

const rightColumns = [
  {
    name: "code",
    fieldName: "code",
    type: "data",
    width: "80",
    header: {
      text: "코드",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "name",
    fieldName: "name",
    type: "data",
    width: "150",
    styleName: "text-left",
    header: {
      text: "코드명",
      showTooltip: false,
    },
  },
  {
    name: "priority",
    fieldName: "priority",
    type: "data",
    width: "80",
    header: "보기순서",
  },
  {
    name: "useYn",
    fieldName: "useYn",
    type: "data",
    width: "80",
    header: "사용여부",
  },
  {
    name: "updatedDate",
    fieldName: "updatedDate",
    type: "data",
    width: "220",
    header: "등록일",
  },
  {
    name: "createdDate",
    fieldName: "createdDate",
    type: "data",
    width: "220",
    header: "변경일",
  },
];

function CMC001U({}: Props) {
  const [selected, setSelected] = useState<number | null>(null); // 선택된 코드
  const leftRealGridRef = useRef<RealGridHandle>(null);
  const rightRealGridRef = useRef<RealGridHandle>(null);
  const [subItems, setSubItems] = useState<ICodeItem[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["codeList"],
    queryFn: async () => {
      const response = await CodeService.getCode();
      if (response.status === ApiResponseStats.OK) {
        leftRealGridRef.current?.setRows(response.data);
        return response.data;
      }
      return [];
    },
  });

  const findAllByKind = async (kind: string) => {
    try {
      const response = await CodeService.getCodeByKind(kind);
      if (response.status === ApiResponseStats.OK) {
        setSubItems(response.data);
        rightRealGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (data && selected) {
      findAllByKind(data[selected].kind);
    }
  }, [selected]);

  return (
    <div className="relative flex flex-col h-full gap-2">
      {/* Header */}
      <div className="my-2">
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
          onExcelClick={() => {
            rightRealGridRef.current?.excelExport();
          }}
        />
      </div>

      {/* 대분류 */}
      <div className="grid flex-grow grid-cols-2 gap-3">
        <div className="relative flex flex-col h-full">
          <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900 ">
            <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block mb-[2px]" />
            <span>대분류코드</span>
          </div>
          <RealGridTable
            ref={leftRealGridRef}
            fields={leftFields}
            columns={leftColumns}
            onCellClicked={(gird, data) => {
              if (data.itemIndex) {
                setSelected(data.itemIndex);
              }
            }}
          />
          <div className="flex justify-end mt-2">
            <div className="flex gap-2">
              <Button text="새로고침" className=" btn-primary btn-sm" />
              <Button text="초기화" className="w-12 btn-primary btn-sm" />
              <Button className="w-12 btn-primary btn-sm">
                <Modal
                  title="등록"
                  label="등록"
                  themeClass="bg-primary-500"
                  uncontrol
                  footerContent={
                    <Button
                      text="확인"
                      className="btn-primary"
                      onClick={() => {
                        alert("등록되었습니다.");
                      }}
                    />
                  }
                >
                  <CodeTableFooter
                    onSubmit={(data) => {
                      console.log(data);
                    }}
                  />
                </Modal>
              </Button>
              <Button className="w-12 btn-primary btn-sm">
                <Modal
                  title="수정"
                  label="수정"
                  themeClass="bg-primary-500"
                  uncontrol
                  footerContent={
                    <Button
                      text="확인"
                      className="btn-primary"
                      onClick={() => {
                        alert("수정되었습니다.");
                      }}
                    />
                  }
                >
                  <CodeTableFooter
                    onSubmit={(data) => {
                      console.log(data);
                    }}
                  />
                </Modal>
              </Button>
              <Button text="삭제" className="w-12 btn-primary btn-sm" />
            </div>
          </div>
        </div>

        {/* 소분류 */}
        <div className="relative flex flex-col h-full">
          <div className="flex items-center mb-1 space-x-2 text-sm font-medium text-slate-900">
            <span className="h-[6px] w-[6px] bg-slate-900 rounded-full inline-block" />
            <span>소분류코드</span>
          </div>
          <RealGridTable
            ref={rightRealGridRef}
            fields={rightFields}
            columns={rightColumns}
            // onCellClicked={(grid, data) => {
            //   if (data.itemIndex) {
            //     onClick(items[data.itemIndex]);
            //   }
            // }}
          />
          <div className="flex justify-end mt-2">
            <div className="flex gap-2">
              <Button text="초기화" className="w-12 btn-primary btn-sm" />
              <Button className="w-12 btn-primary btn-sm">
                <Modal
                  title="등록"
                  label="등록"
                  themeClass="bg-primary-500"
                  uncontrol
                  footerContent={
                    <Button
                      text="확인"
                      className="btn-primary"
                      onClick={() => {
                        alert("등록되었습니다");
                      }}
                    />
                  }
                >
                  <CodeItemTableFooter onSubmit={(data) => console.log(data)} />
                </Modal>
              </Button>
              <Button className="w-12 btn-primary btn-sm">
                <Modal
                  title="수정"
                  label="수정"
                  themeClass="bg-primary-500"
                  uncontrol
                  footerContent={
                    <Button
                      text="확인"
                      className="btn-primary"
                      onClick={() => {
                        alert("수정되었습니다.");
                      }}
                    />
                  }
                >
                  <CodeItemTableFooter onSubmit={(data) => console.log(data)} />
                </Modal>
              </Button>
              <Button text="삭제" className="w-12 btn-primary btn-sm" />
              <Button text="보기순서변경" className="btn-primary btn-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMC001U;
