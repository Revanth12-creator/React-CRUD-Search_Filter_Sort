import React, { Component, Fragment } from 'react';
import   ProfileDetsils from './ProfileDetails.jsx'
import ProfileDetsilsFun from './ProfileDetailsFun.jsx';
class RegisterComp extends Component{
    constructor(props){
      super(props);
        this.state={
            fname:"",
            lname:"",
            Details:[],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handlesubmit=this.handlesubmit.bind(this);
    }
    handleChange(e){
        this.setState(
            { 
                [e.target.name]:e.target.value
            }
        )
    }
    handlesubmit(e){
        e.preventDefault();
        let firstData=this.state;
        let data=this.state.Details;
        data.push(firstData)
        this.setState({
            Details:data
        })
            console.log("registered Detsils",this.state.Details);
    }
    render(){
        console.log(this.state.search)
        return(
            <Fragment>
                <div className='card col-md-3 mx-auto my-5'>
                    <h1 className="text-center ">Add Details</h1>
                    <form action="" onSubmit={this.handlesubmit}>
                        <div className="form-group">
                            <label htmlFor="">FirstName</label>
                                <input type="text" name="fname" className="form-control" 
                                value={this.state.fname} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">LastName</label>
                            <input type="text" name="lname" className="form-control"
                             value={this.state.lname} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                           <button  className="btn btn-success form-control">Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                               {/* <ProfileDetsils details={this.state.Details}/> */}
                               <ProfileDetsilsFun details={this.state.Details}/>
                </div>
            </Fragment>
        )
    }
}
export default RegisterComp;