import React from "react";
import ExperienceListTable from "./ExperienceListTable";
import ExperienceListToolbar from "./ExperienceListToolbar";

function PortfolioListPage() {
  return (
    <section className='section'>
      <div className='section-header'>
        <h1>Experience</h1>
        <div className='section-header-breadcrumb'>
          <div className='breadcrumb-item active'>
            <a href='#'>Dashboard</a>
          </div>
          <div className='breadcrumb-item'>Settings</div>
        </div>
      </div>

      <div className='section-body'>
        <ExperienceListToolbar />
        <ExperienceListTable />
      </div>
    </section>
  );
}

export default PortfolioListPage;
