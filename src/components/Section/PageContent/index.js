import React, {Component} from 'react';

class PageContent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wraper container-fluid">
                <div className="page-title">
                    <h3 className="title">Welcome !</h3>
                </div>
            </div>
        )
    }
}

export default PageContent;