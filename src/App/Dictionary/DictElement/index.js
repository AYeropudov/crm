import React, {Component} from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import ReactDataGrid from "react-data-grid";
import update from 'immutability-helper';
class DictElement extends Component{

    constructor(props){
        super(props);
        this.state = {
            expand: true,
            rows:[
                {id:1, value:"TEST1"},
                {id:2, value:"TEST2"},
                {id:3, value:"TEST3"},
                {id:4, value:"TEST4"},
            ],
            columns : [
                    { key: 'id', name: 'Код', locked:true, width:50},
                    { key: 'value', name: 'Значение', editable: true}
                ],
            selectedIndexes:[]
        };
        this.expandPanel = this.expandPanel.bind(this);
        this.refreshDict = this.refreshDict.bind(this);
        this.rowGetter = this.rowGetter.bind(this);
        this.onRowsDeselected = this.onRowsDeselected.bind(this);
        this.onRowsSelected = this.onRowsSelected.bind(this);
        this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
    }

    expandPanel(event){
        this.setState({expand: !this.state.expand});
    }

    refreshDict(event){

    }
    rowGetter(i) {
        return this.state.rows[i];
    }

    onRowsSelected(rows) {
        this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    }

    onRowsDeselected(rows) {
        let rowIndexes = rows.map(r => r.rowIdx);
        this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
    }

    handleGridRowsUpdated({ fromRow, toRow, updated }) {
        let rows = this.state.rows.slice();

        for (let i = fromRow; i <= toRow; i++) {
            let rowToUpdate = rows[i];
            let updatedRow = update(rowToUpdate, {$merge: updated});
            rows[i] = updatedRow;
        }

        this.setState({ rows });
    }

    render(){
        let expandClass = (this.state.expand)? 'in':"";
        return(
            <div className="col-lg-12">
                <div className="portlet">
                    <div className="portlet-heading bg-info">
                        <h3 className="portlet-title">
                            {this.props.title}
                        </h3>
                        <div className="portlet-widgets">
                            <a onClick={this.refreshDict}  data-toggle="reload"><i className="ion-refresh"></i></a>
                            <span className="divider"></span>
                            <a onClick={this.expandPanel} data-toggle="collapse" data-parent="#accordion1"><i className="ion-minus-round"></i></a>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div id="bg-info" className={"panel-collapse collapse " + expandClass}>
                        <div className="portlet-body">
                            <div className="row">
                                <div className="col-md-1">
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Добавить новую запись</Tooltip>}>
                                        <button alt="Добавить новую запись" className="btn btn-icon btn-success m-b-5 tooltip-btn" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">
                                            <i className="fa fa-plus" alt="Добавить новую запись"></i>
                                        </button>
                                    </OverlayTrigger>
                                </div>
                                <div className="col-md-6">
                                    <ReactDataGrid
                                        columns={this.state.columns}
                                        rowGetter={this.rowGetter}
                                        rowsCount={this.state.rows.length}
                                        maxHeight={300}
                                        className="table table-striped table-bordered dataTable no-footer"
                                        enableCellSelect={true}
                                        onGridRowsUpdated={this.handleGridRowsUpdated}
                                        rowSelection={{
                                            showCheckbox: true,
                                            enableShiftSelect: true,
                                            onRowsSelected: this.onRowsSelected,
                                            onRowsDeselected: this.onRowsDeselected,
                                            selectBy: {
                                                indexes: this.state.selectedIndexes
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DictElement;