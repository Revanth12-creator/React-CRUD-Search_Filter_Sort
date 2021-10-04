import React, { Component, Fragment, useEffect, useState } from 'react';
import Search from './Search';

const  ProfileDetsilsFun =(props)=>{
  const [userData, setuserData]=useState([]);
  const [data, setData]=useState(['b','c','d','a']);
  const [search, setSearch]=useState("")
       
  useEffect(()=> {
    setuserData(props.details);
  },[])
   const DeleteData=()=>{
        let userData=userData;
        let convertArr=userData;
        convertArr.pop();
            setuserData(convertArr)
    }
   const sortDataASD=()=>{
    let data=userData;
    let data1=data.sort((a, b) => (a.fname > b.fname) ? 1 : -1 )
    setuserData(data1)
    }
   const sortDataDESC=()=>{
        let data=userData;
        let data1=data.sort((a, b) => (a.lname > b.lname) ? -1 : 1 )
    setuserData(data1)

        }
    const filterData=()=>{
        let data=userData;
        let data1=data.filter((data)=> data.fname === 'a');
    setuserData(data1)

    }

  
 
const searchData=(name)=>{
    let data=userData;
    var filterData=data.filter(x=> x.fname == name);
    console.log("before setstate",filterData);
    setuserData(filterData)
    console.log("after setState",userData);

}
        return(
            <Fragment>
           <div className="profileData container">
               <h1 className="text-center">Profile Details</h1> 
                <div>
                    <Search sendFun={searchData}/>
                                         <table cellpadding="10"className="table table-bordered text-center">
                          <tr>
                              {/* <thead className="thead-dark"> */}
                                  <th>FirstName|<button onClick={sortDataASD}>ASD</button>|<button onClick={filterData}>FILTER</button></th>
                                  <th>LastName|<button onClick={sortDataDESC}>DESC</button> </th>
                                  <th>Action</th>
                              {/* </thead> */}
                          </tr>
                          <tbody>
                       {
                           
                         userData.map((user, index)=> (
                               <tr key={index}>
                                   
                                       <td>{user.fname}</td>
                                       <td>{user.lname}</td>
                                      <td> <button className="btn btn-danger" onClick={DeleteData}>Delete</button></td>
                                   
                               </tr>
                           ))
                       }
                       </tbody>
                      </table>
                    </div>
           </div>
   
            </Fragment>
        )
    }

export default ProfileDetsilsFun;