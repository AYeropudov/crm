import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import Header from "../Header";
import Footer from "../Footer";
import PageContent from "./PageContent";
import {HashRouter, Route} from 'react-router-dom'
import DashBoard from "../../App/Dashboard";
import Scripts from "../../App/Scripts";
import ScriptView from "../../App/ScriptView";
import Attempt from "../../App/Attempt";
import Dictionary from "../../App/Dictionary";


class Section extends PureComponent{

    render(){
        return(
            <section className="content">
                <Header/>
                <HashRouter basename="/" hashType="noslash">
                    <div className="wraper container-fluid">
                        <Route exact={ true }  path="/" component={PageContent}/>
                        <Route exact={ true } path="/dashboard" component={DashBoard}/>
                        <Route exact={ true } path="/scripts" component={Scripts}/>
                        <Route path="/script/:id" component={(props) => <ScriptView id={props.match.params.id}/>}/>
                        <Route path="/startattempt/:id" component={(props) => <Attempt id={props.match.params.id}/>}/>
                        <Route exact={true} path="/dictionaries" component={Dictionary}/>
                    </div>
                </HashRouter>
                <Footer/>
            </section>
        )
    }
}
Section.propTypes={
};
export default Section;