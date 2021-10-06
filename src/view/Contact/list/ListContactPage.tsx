import React from "react";
import { Link } from "react-router-dom";
import { FcDoNotInhale, FcAssistant, FcSearch } from "react-icons/fc";
import ContactListTable from "./ContactListTable";
import ContactListToolbar from "./ContactListToolbar";
import ContactListFilter from "./ContactListFilter";

function ListContactPage(props) {
  return (
    <section className='section'>
      <div className='section-body'>
        <ContactListToolbar />

        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <ContactListFilter />
              <ContactListTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListContactPage;
