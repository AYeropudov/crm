import React, {Component} from 'react'
import SortableTree,{ changeNodeAtPath } from "react-sortable-tree";
class Dictionary extends Component{

    constructor(props){
        super(props);
        let preconfDict = [
            {title: "Категории Контрагентов", children: [], id:1, key:'customer_type'},
            {title: "Подкатегории контрагентов", children: [], id:2, key:'customer_subtype'},
            {title: "Форматы контрагентов", children: [], id:3, key:'customer_type'},
            {title: "Товарное направление", children: [], id:4, key:'customer_type'},
            {title: "Конечный покупатель", children: [], id:5, key:'customer_type'},
            {title: "Регион/Округ", children: [], id:6, key:'customer_type'},
            {title: "Город", children: [], id:7, key:'customer_type'},
            {title: "Вид оплаты", children: [], id:8, key:'customer_type'},
            {title: "Форма оплаты", children: [], id:9, key:'customer_type'},
            {title: "Осчет дней отсрочки платежа", children: [], id:10, key:'customer_type'},
            {title: "Формы договоров", children: [], id:11, key:'customer_type'},
            {title: "Частота заявок", children: [], id:12, key:'customer_type'},
            {title: "Вид документооборота", children: [], id:13, key:'customer_type'},
            {title: "Доставка", children: [], id:14, key:'customer_type'},
            {title: "Возврат товара", children: [], id:15, key:'customer_type'},
            {title: "Перечень документов для заключения договора", children: [], id:16, key:'customer_type'},
        ];
        this.state = {
            data: [{title: "Справочники", expanded:true, children: preconfDict, id:0, key:'customer_type'}],
            reference: [{_id:1,value:"12345", key:1},{_id:2,value:"987654", key:2}]
        };

        this.onAddClick = this.onAddClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onAddClick(type){
        console.log(type);
    }
    onEditClick(index){
        console.log(index);
    }

    onRemoveClick(index){
        console.log(index);
    }

    render(){

        const getNodeKey = ({ node: { id } }) => id;
        return(
            <div className="row" style={{display:"table", width:'100%'}}>
                <div className="col-md-4" style={{height:this.state.data[0].children.length*42+"px"}}>
                <SortableTree
                    canDrag={false}
                    treeData={this.state.data}
                    onChange={data => this.setState({ data })}
                    getNodeKey={getNodeKey}
                    generateNodeProps={({node, path}) => {
                        return {
                            style:node.style,
                            onClick:()=>{
                                let oldState = this.state.data;
                                oldState.map((itm) => itm.style = {});
                                oldState[0].children.map((itm) => itm.style = {});
                                this.setState(oldState => ({
                                    data: changeNodeAtPath({
                                        treeData:oldState.data,
                                        path,
                                        getNodeKey,
                                        newNode:{...node, style:{color:"red"}}
                                    }),
                                    selected:node.key
                                }))
                            }
                        }
                    }}
                />
                </div>
                <div className="col-md-8">
                    {this.state.selected && <button className="btn btn-success m-b-5"
                    onClick={()=>{
                        this.onAddClick(this.state.selected);
                    }}> <i className="fa fa-plus"></i> <span>Добавить в справочник</span> </button>}
                    {this.state.selected &&
                    <table className={"table table-bordered"}>
                           <thead>
                           <tr>
                               <th>#</th>
                               <th>Значение</th>
                               <th>...</th>
                           </tr>
                           </thead>
                           <tbody>
                           {this.state.reference.map(ref=>
                               <tr key={ref.key}>
                                   <td>{ref._id}</td>
                                   <td>{ref.value}</td>
                                   <td style={{width:"80px"}}>
                                       <div className="pull-right">
                                           <button
                                               onClick={()=>this.onEditClick(ref.key)}
                                               style={{margin:"2px"}}
                                               className="btn btn-xs btn-icon btn-success m-b-5"><i className="fa fa-edit"></i> </button>
                                           <button
                                               onClick={()=>this.onRemoveClick(ref.key)}
                                               style={{margin:"2px"}}
                                               className="btn btn-xs btn-icon btn-danger m-b-5"><i className="fa fa-remove"></i> </button>
                                       </div>
                                   </td>
                               </tr>
                           )}

                           </tbody>
                       </table>
                        }
                </div>
            </div>
        );

    }
}
export default Dictionary;