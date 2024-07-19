/**
 * 팀(파트) 페이지
 * 시스템 > 사용자 > 팀(파트)
 * CMC002U
 */
import { useState } from "react";
import FooterForm from "./components/FooterForm";
import HeaderForm from "./components/HeaderForm";
import Table from "./components/Table";
import { ITeam } from "../../../api/services/teamService";

function CMC002U() {
  const [selected, setSelected] = useState<ITeam | null>(null);

  return (
    <div>
      <div className="flex flex-col gap-2 verflow-x-auto">
        {/* Header */}
        <div>
          <HeaderForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>

        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <Table
              onClick={(item) => {
                setSelected(item);
              }}
            />
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
    </div>
  );
}

export default CMC002U;
