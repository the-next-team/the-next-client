/**
 * 객체권한그룹 페이지
 * 시스템 > 메뉴관리 > 객체권한그룹
 * CMU003U
 */
import React from "react";
import Table from "./components/Table";
import HeaderForm from "./components/HeaderForm";
import FooterForm from "./components/FooterForm";

function CMU003U() {
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

export default CMU003U;
