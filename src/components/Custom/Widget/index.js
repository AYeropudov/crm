import React,{Component} from 'react';

class Widget extends Component{
    render(){
        return(
            <div className="widget-panel widget-style-2 bg-pink">
                <i className="ion-eye"></i>
                <h2 className="m-0 counter">50</h2>
                <div>Daily Visits</div>
            </div>
        );
    }
}

export default Widget;