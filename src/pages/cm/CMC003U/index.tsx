/**
 * 광고관리 페이지
 * 시스템 > 광고관리 > 광고관리
 * CMC003U
 */
import { ValueType } from "realgrid";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import { useEffect, useRef, useState } from "react";
import RealGridTable, {
  RealGridHandle,
} from "../../../components/table/RealGridTable";
import {
  AdvertisementService,
  IAdvertisement,
} from "../../../api/services/advertisementService";
import { ApiResponseStats } from "../../../api/models/common/apiResponseStats";

const fields = [
  {
    fieldName: "adNo",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "adNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "adSnm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "adaNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "adbNm",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "invtId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "useYn",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "chgId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "chgDtm",
    dataType: ValueType.TEXT,
  },
];

const columns = [
  {
    name: "adNo",
    fieldName: "adNo",
    type: "data",
    width: "220",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "접수(광고)채널번호",
      showTooltip: false,
    },
    renderer: {
      type: "text",
      showTooltip: true,
    },
  },
  {
    name: "adNm",
    fieldName: "adNm",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: {
      text: "접수채널명",
      showTooltip: false,
    },
  },
  {
    name: "adSnm",
    fieldName: "adSnm",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "채널명(약어)",
  },
  {
    name: "adaNm",
    fieldName: "adaNm",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "접수경로",
  },
  {
    name: "adbNm",
    fieldName: "adbNm",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "통계구분",
  },
  {
    name: "invtId",
    fieldName: "invtId",
    type: "data",
    width: "150",
    styles: {
      textAlignment: "center",
    },
    header: "권유자ID",
  },
  {
    name: "useYn",
    fieldName: "useYn",
    type: "data",
    width: "120",
    styles: {
      textAlignment: "center",
    },
    header: "사용여부",
  },
  {
    name: "chgId",
    fieldName: "chgId",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "등록자",
  },
  {
    name: "chgDtm",
    fieldName: "chgDtm",
    type: "data",
    width: "180",
    styles: {
      textAlignment: "center",
    },
    header: "등록일시",
  },
];

function CMC003U() {
  const realGridRef = useRef<RealGridHandle>(null);
  const [items, setItems] = useState<IAdvertisement[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      const response = await AdvertisementService.getAdvertisements();
      if (response.status === ApiResponseStats.OK) {
        setItems(response.data);
        realGridRef.current?.setRows(response.data);
      }
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-2 relative h-full">
      {/* Header */}
      <div>
        <HeaderForm
          onSubmit={(data) => {
            console.log(data);
          }}
          onExcelClick={() => {
            realGridRef.current?.excelExport();
          }}
        />
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

export default CMC003U;
