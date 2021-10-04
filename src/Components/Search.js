
import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:"",
           
          }
          this.onSubmit=this.onSubmit.bind(this);
    }
   
    onSubmit(event){
        event.preventDefault();
    this.props.sendFun(this.state.search);
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" name="search" value={this.state.search} onChange={e=> this.setState({
                    search:e.target.value
                })}/>
                <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Search;