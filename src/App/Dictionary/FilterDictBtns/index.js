import React, {Component} from 'react';

class FilterBtn extends Component{

    render(){
        return(
            <label className="btn btn-primary active">
                <input defaultChecked={true} onChange={this.props.handleChange} type="checkbox" autoComplete="off" value={this.props.title} data={this.props.data}/> {this.props.title}
            </label>
        );
    }
}

class FilterBtns extends Component{
    constructor(props){
        super(props);
        this.changeFilter = this.changeFilter.bind(this)
    }
    changeFilter(event){
        if(event.currentTarget.checked) {
            this.props.filter({title:event.currentTarget.value, key:event.currentTarget.getAttribute('data')});
        }
        else {
            this.props.unFilter({title:event.currentTarget.value, key:event.currentTarget.getAttribute('data')});
        }
    }
    render(){
        return (
            <div className="col-lg-12">
                {this.props.btns.map((btn)=><FilterBtn handleChange={this.changeFilter} title={btn.title} key={btn.key} data={btn.key}/>)}
            </div>
        );
    }
}

export default FilterBtns;