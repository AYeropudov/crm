import React, {Component, PropTypes} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PageContent from "./PageContent";
import {HashRouter, Route} from 'react-router-dom'
import DashBoard from "../../App/Dashboard";


class Section extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="content">
                <Header handleCollapseSide={this.props.handleCollapseSide}/>
                <HashRouter basename="/" hashType="noslash">
                    <rt>
                        <Route exact={ true }  path="/" component={PageContent}/>
                        <Route path="/dashboard" component={DashBoard}/>
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