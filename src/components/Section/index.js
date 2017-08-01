import React, {Component, PropTypes} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import PageContent from "./PageContent";


class Section extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="content">
                <Header handleCollapseSide={this.props.handleCollapseSide}/>
                <PageContent/>
                <Footer/>
            </section>
        )
    }
}
Section.propTypes={
    handleCollapseSide: React.PropTypes.func
}
export default Section;