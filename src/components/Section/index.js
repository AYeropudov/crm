import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Header from "../Header";
import Footer from "../Footer";
import PageContent from "./PageContent";
import {HashRouter, Route} from 'react-router-dom'
import DashBoard from "../../App/Dashboard";
import GraphComponent from "../../App/GraphComponent";
import Scripts from "../../App/Scripts";
import ScriptView from "../../App/ScriptView";
import Attempt from "../../App/Attempt";


class Section extends Component{

    render(){
        const myScriptView = (props) => {
            return <ScriptView id={props.match.params.id}/>
        }
        const myScriptStart = (props) => {
            return <Attempt id={props.match.params.id}/>
        }
        return(
            <section className="content">
                <Header handleCollapseSide={this.props.handleCollapseSide}/>
                <HashRouter basename="/" hashType="noslash">
                    <div className="wraper container-fluid">
                        <Route exact={ true }  path="/" component={PageContent}/>
                        <Route exact={ true } path="/dashboard" component={DashBoard}/>
                        <Route exact={ true } path="/question" component={GraphComponent}/>
                        <Route exact={ true } path="/scripts" component={Scripts}/>
                        <Route path="/script/:id" component={myScriptView}/>
                        <Route path="/startattempt/:id" component={myScriptStart}/>
                    </div>
                </HashRouter>
                <Footer/>
            </section>
        )
    }
}
Section.propTypes={
    handleCollapseSide: PropTypes.func.isRequired
}
export default Section;