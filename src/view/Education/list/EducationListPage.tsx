import React from "react";
import EducationListTable from "./EducationListTable";
import EducationListToolbar from "./EducationListToolbar";

function PortfolioListPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Education</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>education</div>
        </div>
      </div>

      <div className='section-body'>
        <EducationListToolbar />
        <EducationListTable />
      </div>
    </section>
  );
}

export default PortfolioListPage;
