import React from "react";
const Home = () =>{
   return (
    <>
  <div className="container-fluid header-shadow">
  <div class="d-flex mt-3 justify-content-between">
        <h3 className="bolder" style={{fontWeight:'600'}}>PS LOTTERY</h3>
        <i class="fas fa-trash-alt fs-3"></i>
    </div>
    <div class="d-flex mt-3 justify-content-between">
    <button className="px-3 py-2 btn btn-light" style={{borderRadius:'15px'}}><i class="fas fa-home fs-6"></i><b className="ms-2 text-captilized">Home</b></button>
    <button className="px-3 py-2 btn btn-light" style={{borderRadius:'15px'}}><i class="fas fa-user-alt fs-6"></i><b className="ms-2 text-captilized">Counter</b></button>
    <button className="px-3 py-2 btn btn-light" style={{borderRadius:'15px'}}><i class="fas fa-history fs-6"></i><b className="ms-2 text-captilized">History</b></button>
    
    </div>
    
   </div>
   <div className="container-fluid mx-0 px-0">
   <div className="d-flex header-shadow1">
   <div className="col-8">
        <input type="text" value="BOOK" style={{borderRadius:'15px'}} className="form-control w-95"/>
    </div>
    <div className="col-4">
    <button className="btn btn-primary w-95" style={{borderRadius:'15px'}}>Home</button>
    </div>
    </div>
    
    <div className="mt-3">
    <div className="d-flex header-shadow1 mt-1">
   <div className="col-8">
        <input type="text" value="BOOK" style={{borderRadius:'15px'}} className="form-control w-95"/>
    </div>
    <div className="col-4">
    <button className="btn btn-primary w-95" style={{borderRadius:'15px'}}>Home</button>
    </div>
    </div>
    </div>

   </div>
    </>
   );
};
export default Home;