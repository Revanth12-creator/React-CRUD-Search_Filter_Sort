import { all } from 'q';
import React, { Component } from 'react'
import "../pagination/Pagination.css";
 class Pagination extends Component {
//      state={
//         udata=[
//             {id:1,title:"ee"},
//             {id:2,title:"ee"},
//             {id:3,title:"ee"},
//             {id:4,title:"ee"},
//             {id:5,title:"ee"},
//             {id:6,title:"ee"},
//             {id:7,title:"ee"},
//             {id:8,title:"ee"},
//             {id:9,title:"ee"},
//             {id:10,title:"ee"},
//             {id:11,title:"e"},
//             {id:12,title:"e"},
//             {id:13,title:"e"},
//             {id:14,title:"e"},
//             {id:15,title:"e"},
//             {id:16,title:"e"},
//             {id:17,title:"e"},
//             {id:18,title:"e"},
//             {id:19,title:"e"},
//             {id:20,title:"e"}
//         ]
//      }
     
//     render() {
//         let Data= (a) =>
// {  
//     var output = "";
//     for(i=((a-1)*10);i<(a*10);i++)
//     {
//         output +=`<tr>
                 
//                  <td>${udata[i].id} </td>
//                  <td> ${udata[i].title}  </td> <br>
//                  </tr>`;
//     }
//     document.getElementById('user').innerHTML = output;
// }
//         return (
//             <div>
//                <ul>
//     <li value="1">1</li>
//     <li value="2" >2</li>
//     <li value="3">3</li>
//     <li value="4">4</li>
//     <li value="5">5</li>
//     <li value="6">6</li>
//     <li value="7">7</li>
//     <li value="8">8</li>
//     <li value="9">9</li>
//     <li value="10">10</li>
//                </ul>
//                <div>
//                    <data />
//                </div>
//             </div>
            
//         )
//     }
// }
constructor(props) {
    super(props);

    this.state = {
                udata:[
            {id:1,title:"ee"},
            {id:2,title:"ee"},
            {id:3,title:"ee"},
            {id:4,title:"ee"},
            {id:5,title:"ee"},
            {id:6,title:"ee"},
            {id:7,title:"ee"},
            {id:8,title:"ee"},
            {id:9,title:"ee"},
            {id:10,title:"ee"},
            {id:11,title:"e"},
            {id:12,title:"e"},
            {id:13,title:"e"},
            {id:14,title:"e"},
            {id:15,title:"e"},
            {id:16,title:"e"},
            {id:17,title:"e"},
            {id:18,title:"e"},
            {id:19,title:"e"},
            {id:20,title:"e"}
        ],
        allData:[],
        tenUser:[]
    };
    this.Data1=this.Data1.bind(this);
    // this.click=this.click.bind(this);
  }
  Data1(a){   
      console.log(a)
   var i=0;
    for(i=((a-1)*10);i<(a*10);i++)
    {
      let usersdata=[];
        
        usersdata=this.state.udata[i];
        //  console.log("----usersdata",usersdata);
         this.setState((state)=> ({
            allData:[...state.allData, usersdata]
        }))
        // let tenData=[];
        // setTimeout(()=> {
        //     tenData=this.state.allData;
        //     // console.log("----tenData",this.state.tenUser);
    
        //     this.setState({
        //         tenUser:tenData.unshift(tenData.slice(0,9))
        //     })
        // },2000)
       
    }
  }

  render() {
    //    console.log("----alldata",this.state.tenUser)
    return (
      <div>
          <div>
    <tr>
                 
                {this.state.allData.map((data)=> (
                    <div>
                <td>{data.id}</td>
                <td>{data.title}</td>
                </div>
                ))
                }
                 </tr>
        </div>
          <ul>
    <li value="1" onClick={(e)=> {this.Data1(e.target.value) }} >1</li>
    <li value="2" onClick={(e)=> {this.Data1(e.target.value) }}>2</li>
    <li value="3" onClick={(e)=> {this.Data1(e.target.value) }}>3</li>
    <li value="4" onClick={(e)=> {this.Data1(e.target.value) }}>4</li>
    <li value="5" onClick={(e)=> {this.Data1(e.target.value) }}>5</li>
    <li value="6" onClick={(e)=> {this.Data1(e.target.value) }}>6</li>
    <li value="7" onClick={(e)=> {this.Data1(e.target.value) }}>7</li>
    <li value="8" onClick={(e)=> {this.Data1(e.target.value) }}>8</li>
    <li value="9" onClick={(e)=> {this.Data1(e.target.value) }}>9</li>
    <li value="10" onClick={(e)=> {this.Data1(e.target.value) }}>10</li>
    </ul>
    
    </div>
    );
  }
}
export default Pagination;