// import React, { Fragment,useState } from 'react';
// const Practies=()=>{
//     const [first,setFirst]=useState(0);
//     const [second,setSecond]=useState(0);
//     const [add, setAdd]=useState();
    
//     const handleSubmit = (evt) => {
//         evt.preventDefault();
       
//     }
//     var calculateTotal=(a,b)=> {
//        var sum=a+b;
//        return sum;
//       }
//     return(
//         <Fragment>
//             <h1>dddd</h1>

//             <form onSubmit={handleSubmit}>
//             <input type="number" name="first" value={first} onChange={e => {setFirst(e.target.value)}}/>
//             <input type="number" name="second" value={second} onChange={e => {setSecond(e.target.value)}}/>
//             <button onClick={calculateTotal(first,second)}> ADD</button>
//             <button>Sub</button>
//             </form>
//             <h1>{first}</h1>
//             <h1>{second}</h1>
//             <h1>{add}</h1>

//         </Fragment>
//     )
// }
// export default Practies;
import React, { Component } from 'react';
class Practies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:"",
            items:[]
          }
          this.handleChamnge=this.handleChamnge.bind(this);
          this.onSubmit=this.onSubmit.bind(this);
    }
    handleChamnge(event){
        this.setState({
             [event.target.name]:event.target.value,
            //  items:this.state.item
        })
        // console.log(this.state.items)
    }
    onSubmit(event){
        event.preventDefault();
        let fitstItem=this.state.item;
        let listItems=this.state.items;
        listItems.push(fitstItem);
        this.setState({
            items:listItems
        })
      
    }
    render() { 
    //  let {items}=this.state;
    //  let data= this.state.items.map( data => {
    //     console.log(data)
    // })
    // let {items}=this.state;
        return ( 
            <div>
                <h1>OnCilickEvent</h1>
                <input type="text" name="item" value={this.item} onChange={this.handleChamnge}/>
                <button onClick={this.onSubmit}>Submit</button>
                <div className="card col-4 mx-auto my-4">{this.state.items.map(data => <h1>{data}</h1>)}</div>
              
                {/* <h1>{this.state.items}</h1> */}
            </div>
         );
    }
}
 
export default Practies;