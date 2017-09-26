import React, {Component} from 'react'
import {Tree} from 'primereact/components/tree/Tree';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {ContextMenu} from 'primereact/components/contextmenu/ContextMenu';
import {Button} from "primereact/components/button/Button";
import {Dialog} from "primereact/components/dialog/Dialog";
import {InputText} from "primereact/components/inputtext/InputText";

class Dictionary extends Component{

    constructor(props){
        super(props);
        let preconfDict = [
            {label: "Категории Контрагентов", data:"sections", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Подкатегории контрагентов", data:"subsections", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Форматы контрагентов", data:"formats", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Товарное направление", data:"goods_targeting", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Конечный покупатель", data:"buyer_target", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Регион/Округ", data: "region", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Город", data: "city", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Вид оплаты", data: "payment_section", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Форма оплаты", data: "payment_type", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Осчет дней отсрочки платежа", data: "payment_prolongation", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Формы договоров", data: "contract_type", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Частота заявок", data: "order_frequency", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Вид документооборота", data: "workflow", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Доставка", data: "delivery", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Возврат товара", data: "purchase_back", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Перечень документов для заключения договора", data: "paper_pack", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
        ];
        this.state = {
            data: [{label: "Справочники", data:"references", expanded:true, "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": preconfDict}],
            reference: []
        };
        this.addNew = this.addNew.bind(this);
        this.updateLastRef = this.updateLastRef.bind(this);
    }
    updateLastRef(newVal){
        let currentRef = this.state.reference;
        currentRef.slice(-1)[0].value = newVal;
        this.setState({
            ...Object.assign({}, this.state, {
                displayDialog: false,
                reference:currentRef
            })
        });
    }
    onSelectionChange(e) {
        this.setState({ selectedFile: e.selection });
    }
    addNew() {
        let currentRef = this.state.reference;
        currentRef.push({_id:'tmp'+currentRef.length, value:""});
        this.setState({
            ...Object.assign({}, this.state, {
                displayDialog: true,
                reference:currentRef
            })
        });
    }
    render(){
        let items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.state.selectedCar)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.state.selectedCar)}
        ];
        let footer = <div className="ui-helper-clearfix" style={{width:'100%'}}>
            <Button style={{float:'left'}} icon="fa-plus" label="Add" onClick={this.addNew}/>
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane ui-helper-clearfix">
            <Button icon="fa-close" label="Delete" onClick={this.delete}/>
            <Button label="Save" icon="fa-check" onClick={this.save}/>
        </div>;

        return(
            <div className="row">
                <div className="col-md-4">
                    <Tree  style={{width:"100%"}} value={this.state.data} selectionMode="single" selectionChange={this.onSelectionChange.bind(this)} />
                </div>
                <div className="col-md-8 pull-right">
                    <ContextMenu appendTo={"body"}  model={items} ref={el => this.cm = el}/>
                    <DataTable footer={footer} value={this.state.reference} contextMenu={this.cm} selectionMode="single" header="Содержимое справочника"
                               selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.data})}>
                        <Column field="_id" header="Идтификатор" />
                        <Column field="value" header="Значение" />
                    </DataTable>
                </div>

                <Dialog visible={this.state.displayDialog} header="Car Details" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}>
                    {this.state.displayDialog && <div className="ui-grid ui-grid-responsive ui-fluid">
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="val">Значение</label></div>
                            <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                <InputText id="val" onBlur={(e) => this.updateLastRef(e.target.value)} placeholder={"введите значение"} defaultValue={this.state.reference.slice(-1)[0].value}/>
                            </div>
                        </div>
                    </div>}
                </Dialog>
            </div>
        );

    }
}
export default Dictionary;