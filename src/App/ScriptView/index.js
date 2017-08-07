import React, {Component} from 'react';
import axios from 'axios';
import SortableTree, {getFlatDataFromTree} from 'react-sortable-tree';
class ScriptView extends Component{
    constructor(props){
        super(props);

        this.state={
            title: 'placeholder title',
            script:{} ,
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' }]}]
        };
        axios({
            url: process.env.REACT_APP_API_HOST + 'script/5982f9f509531143d0c79aba',
            method : 'GET',
            responseType:'json'
        })
            .then((response)=>this.setScript(response.data));

    }

    markNodeAsRoot(id){
        axios.post(process.env.REACT_APP_API_HOST + 'markroot', {qid:id}).then((response)=>alert("Отмечен как корневой"));
    }

    renderList() {
        const getNodeKey = ({ treeIndex }) => treeIndex;
        return (
            <SortableTree

            treeData={this.state.treeData}
            generateNodeProps={({ node, path }) => ({
              style:{
                  wordBreak: "break-all"
              },
              buttons:[
                  <button onClick={() => this.markNodeAsRoot(node.id)}>Отметить как корневой</button>
              ]
            })}
            onChange={treeData => this.setState({ treeData })}/>
        );
    }

    setScript(data) {
        this.setState({title: data.title, treeData:data.content});

    }
    getFlat(tree){
        return getFlatDataFromTree(this.state.treeData, tree);
    }
    render(){
        let list = this.renderList();
        return(
            <some>
                <div className="page-title">
                    <h3 className="title">{this.state.title}</h3>
                </div>
                <div className="row">
                    <div style={{ height: "100px", minHeight: "900px" }}>
                        {list}
                    </div>
                </div>
            </some>
        );
    }
}

export default ScriptView;