import React, { Component, Fragment } from 'react';
import Search from './Search';

class ProfileDetsils extends Component{
    constructor(props){
      super(props);
        this.state={
            userData:this.props.details,
            data:['b','c','d','a'],
            search:""
        }
        this.DeleteData=this.DeleteData.bind(this);
        this.sortDataASD=this.sortDataASD.bind(this);
        this.sortDataDESC=this.sortDataDESC.bind(this);
        this.filterData=this.filterData.bind(this);
        this.searchData=this.searchData.bind(this);

        
    }
    DeleteData(){
        let userData=this.state.userData;
        let convertArr=userData;
        convertArr.pop();
        this.setState({
            userData:convertArr
        })
    }
    sortDataASD(){
    let data=this.state.userData;
    let data1=data.sort((a, b) => (a.fname > b.fname) ? 1 : -1 )
       this.setState({
        userData:data1
    })
    }
    sortDataDESC(){
        let data=this.state.userData;
        let data1=data.sort((a, b) => (a.lname > b.lname) ? -1 : 1 )
           this.setState({
            userData:data1
        })
        }
    filterData(){
        let data=this.state.userData;
        let data1=data.filter((data)=> data.fname === 'a');
        this.setState({
            userData:data1
        })
    }

  
 
searchData(name){
    let data=this.state.userData;
    var filterData=data.filter(x=> x.fname == name);
    console.log("before setstate",filterData);
    this.setState({
        userData:filterData
    });
    console.log("after setState",this.state.userData);

}
    render(){

        return(
            <Fragment>
           <div className="profileData container">
               <h1 className="text-center">Profile Details</h1> 
                <div>
                    <Search sendFun={this.searchData}/>
                                         <table cellpadding="10"className="table table-bordered text-center">
                          <tr>
                              {/* <thead className="thead-dark"> */}
                                  <th>FirstName|<button onClick={this.sortDataASD}>ASD</button>|<button onClick={this.filterData}>FILTER</button></th>
                                  <th>LastName|<button onClick={this.sortDataDESC}>DESC</button> </th>
                                  <th>Action</th>
                              {/* </thead> */}
                          </tr>
                          <tbody>
                       {
                           
                           this.state.userData.map((user, index)=> (
                               <tr key={index}>
                                   
                                       <td>{user.fname}</td>
                                       <td>{user.lname}</td>
                                      <td> <button className="btn btn-danger" onClick={this.DeleteData}>Delete</button></td>
                                   
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
}
export default ProfileDetsils;