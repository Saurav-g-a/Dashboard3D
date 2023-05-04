import React from "react";

// components

import CardTable from "components/Cards/CardTable";
import CardUser from "components/Cards/CardUser";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardTable />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardUser />
        </div>
      </div>
    </>
  );
}
