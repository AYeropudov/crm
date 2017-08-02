import React, {Component} from 'react';

class DashBoard extends Component{
    render(){
        return(
            <div className="wraper container-fluid">
                <div className="page-title">
                    <h3 className="title">Welcome Dashboard!</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget-panel widget-style-2 bg-pink">
                            <i className="ion-eye"></i>
                            <h2 className="m-0 counter">50</h2>
                            <div>Daily Visits</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget-panel widget-style-2 bg-purple">
                            <i className="ion-paper-airplane"></i>
                            <h2 className="m-0 counter">12056</h2>
                            <div>Sales</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget-panel widget-style-2 bg-info">
                            <i className="ion-ios7-pricetag"></i>
                            <h2 className="m-0 counter">1268</h2>
                            <div>New Orders</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="widget-panel widget-style-2 bg-success">
                            <i className="ion-android-contacts"></i>
                            <h2 className="m-0 counter">145</h2>
                            <div>New Users</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;