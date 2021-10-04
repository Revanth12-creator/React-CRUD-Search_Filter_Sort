import React, { Component, Fragment } from 'react';
import RegisterComp from './Components/RegisterComp.jsx';
import HeaderComponent from './Components/HeaderComponet';
import HomeComponent from './Components/HomeComp.jsx';
// import ProfileDetsils from "./Components/ProfileDetails.jsx";
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom"; 
import Pagination from './Components/pagination/Pagination.jsx';
import Practies from './Components/Practies.js';
class App extends Component{
    constructor(props){
      super(props);
        this.state={

        }
    }
    render(){
        return(
            <Fragment>
                <Router>
                <HeaderComponent/>
                    <Switch>
                        <Route  exact path='/' component={HomeComponent}/>
                        <Route path='/addprofile' component={RegisterComp}/> 
                        <Route path='/pagination' component={Pagination}/> 
                        <Route path='/practies' component={Practies}/> 

                    </Switch>
                </Router>
            </Fragment>
        )
    }
}
export default App;