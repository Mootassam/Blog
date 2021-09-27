import React from "react";
import { Link } from "react-router-dom";
const Error500Page = () => {
  return (
    <section className='section'>
      <div className='container mt-5'>
        <div className='page-error'>
          <div className='page-inner'>
            <h1>500</h1>
            <div className='page-description'>Error With The Serveur.</div>
            <div className='page-search'>
              <div className='mt-3'>
                <Link to='/'>
                  <a className='text'>Back to Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='simple-footer mt-5'>Copyright &copy; CodiePie 2020</div> */}
      </div>
    </section>
  );
};
export default Error500Page;
