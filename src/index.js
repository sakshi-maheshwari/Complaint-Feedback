 import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/header";
import { AcademicsForm } from "./components/Academics_Form";
import { InfrastructureForm } from "./components/Infrastructure_Forms";
import { SanitationForm } from "./components/Sanitation_Forms";
import { MiscellenousForm } from "./components/Miscellenous_Forms";
import {Feedback} from "./components/Feedback";
import {MyComplaints} from "./components/MyComplaints";
import {ActiveComplaints} from "./components/ActiveComplaints";

class App extends React.Component{
    render(){
        return(
                <div>
                    <BrowserRouter>
                        <Route />
                            <Switch>
                                <Route exact path="/Complaint-Feedback/" component={Header,ActiveComplaints}/>
                                <Route path="/Complaint-Feedback/academics" component={AcademicsForm} />
                                <Route path="/Complaint-Feedback/infrastructure" component={InfrastructureForm} />
                                <Route path="/Complaint-Feedback/miscellenous" component={MiscellenousForm} />
                                <Route path="/Complaint-Feedback/sanitation" component={SanitationForm} />
                                <Route path="/Complaint-Feedback/mycomplaints" component={MyComplaints}/>
                                <Route path="/Complaint-Feedback/feedback" component={Feedback} />
                            </Switch>
                     </BrowserRouter>
                    <Header />
                    {/* <MiscellenousForm />
                    <InfrastructureForm /> */}
                </div>
                
        )
    }
}

render(<App/> , window.document.getElementById("app"));

