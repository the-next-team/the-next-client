/**
 * 중개사조직관리 페이지
 * 시스템 > 중개사관리 > 중개사조직관리
 * CMC022U
 */
import React from "react";
import Table from "./components/Table";
import HeaderForm from "./components/HeaderForm";

function CMC022U() {
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
        <div></div>
      </div>
    </div>
  );
}

export default CMC022U;
