/**
 * 모집인(LP)관리 페이지
 * 시스템 > 중개사관리 > 모집인(LP)관리
 * CMC014U
 */
import React from "react";
import Table from "./components/Table";
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";

function CMC014U() {
  return (
    <div>
      <div className="flex flex-col gap-2 overflow-x-auto">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        {/* Table */}
        <div>
          <Table />
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

export default CMC014U;
