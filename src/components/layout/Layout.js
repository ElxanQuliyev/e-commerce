import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
      const myColor=useSelector(state=>state.colorInfo)
      // const [modal, setModal] = useState(false)
      
      // useEffect(() => {
      //   setTimeout(function(){
      //     setModal(true)
      //   },5000 ) 
      // }, [])
      // const handleClose=()=>{
      //   setModal(false)
      // }
  //     const modalRef=useRef()
   // useEffect(() => {
  //         setTimeout(function () {
  //   modalRef.current.classList.add('active')
  //           console.log('Rena');
  //         },5000)
  //         function btnClose() {
  //           modalRef.current.classList.remove('active')
  //         }
   // }, []);

  return (
    <>
      <div style={{ background: myColor.color, minHeight: "100vh" }}>
        {children}
      </div>
      {/* <div ref={modalRef} className="myModal">
        <h3>Welcome </h3>
        <input type="text" placeholder="Name" />
        <button onClick={btnClose} className="modalClose">
          &times;
        </button>
      </div> */}
       {/* <div  className={`myModal ${modal?'active':''}`}>
        <h3>Welcome </h3>
        <input type="text" placeholder="Name" />
        <button className="modalClose" onClick={handleClose}>
          &times;
        </button>
      </div> */}
    </>
  );
};

export default Layout;
