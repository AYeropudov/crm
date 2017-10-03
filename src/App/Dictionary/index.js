import React, {PureComponent} from 'react'
import SortableTree,{ changeNodeAtPath } from "react-sortable-tree";
import {getReferences} from "../../actions/apiActions";
import {connect} from "react-redux";
import { transliterate as tr, slugify } from 'transliteration';
class Dictionary extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            data:[],
            references:[],
            selected:false
        };

        this.onAddClick = this.onAddClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(getReferences());
    }
    componentWillReceiveProps(nextProps){
        this.setState((prevState) => {
            return Object.assign({},prevState, {data: nextProps.types, references: nextProps.references});
        });
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
                <div className="col-md-4" style={{height:16*42+"px"}}>
                <SortableTree
                    canDrag={false}
                    treeData={this.state.data}
                    onChange={data => this.setState((prevState) => {return Object.assign({}, prevState, data)})}
                    getNodeKey={getNodeKey}
                    generateNodeProps={({node, path}) => {
                        return {
                            style:node.style,
                            onClick:()=>{
                                let oldState = this.state.data;
                                oldState.map((itm) => itm.style = {});
                                oldState[0].children.map((itm) => itm.style = {});
                                this.setState((prevState) => {
                                    return Object.assign({}, prevState, {
                                        data: changeNodeAtPath(
                                            {
                                                treeData:oldState,
                                                path,
                                                getNodeKey,
                                                newNode:{...node, style:{color:"red"}}
                                            }),
                                        selected:node.key
                                    });
                                });
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
                           {this.state.references[this.state.selected] && this.state.references[this.state.selected].map(ref=>
                               <tr key={ref._id}>
                                   <td style={{width:"180px"}}>{ref._id}</td>
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
function mapStoreToProps(store) {

    let props = store.refs;
    let types = props.get('types').map(itm => itm.toObject()).toArray();
    let refs = props.get('references').map(itm => itm.map(s => s.toObject())).map(itm => itm.toArray()).toObject();
    let addition = []
    types.forEach(itm => addition.push({code:"refs", type:0, key: itm.key, _id: itm.key, value: itm.title}));
    refs['refs'] = addition;
    return {
        types:[{title: "Справочники", expanded:true, children: types, id:0, key:'refs'}],
        references: refs
    };

}
export default connect(mapStoreToProps)(Dictionary);