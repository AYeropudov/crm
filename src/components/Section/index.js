import React, {Component, PropTypes} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PageContent from "./PageContent";
import {HashRouter, Route} from 'react-router-dom'
import DashBoard from "../../App/Dashboard";
import GraphComponent from "../../App/GraphComponent";
import Scripts from "../../App/Scripts";
import ScriptView from "../../App/ScriptView";
import StartScript from "../../App/StartScript/index";


class Section extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const myScriptView = (props) => {
            return <ScriptView id={props.match.params.id}/>
        }
        const myScriptStart = (props) => {
            return <StartScript id={props.match.params.id}/>
        }
        return(
            <section className="content">
                <Header handleCollapseSide={this.props.handleCollapseSide}/>
                <HashRouter basename="/" hashType="noslash">
                    <rt>
                        <Route exact={ true }  path="/" component={PageContent}/>
                        <Route exact={ true } path="/dashboard" component={DashBoard}/>
                        <Route exact={ true } path="/question" component={GraphComponent}/>
                        <Route exact={ true } path="/scripts" component={Scripts}/>
                        <Route path="/script/:id" component={myScriptView}/>
                        <Route path="/start/:id" component={myScriptStart}/>
                    </rt>
                </HashRouter>
                <Footer/>
            </section>
        )
    }
}
Section.propTypes={
    handleCollapseSide: React.PropTypes.func
}
export default Section;