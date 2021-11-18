import React from 'react'

import './spinner.css'

const Spinner = () => {
  return (
    // <div className="lds-css man">
    //   <div className="lds-double-ring">
    //       <><h1>SPInner</h1></>
    //     <></>
    //   </div>
    // </div>
      <div className="spinner">
      <button className="btn btn-primary" disabled>
          <span className="spinner-grow spinner-grow-sm"/>
          Loading..
      </button>
      </div>
  )
}

export default Spinner
