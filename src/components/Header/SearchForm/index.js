import React, {Component} from 'react';

class SearchForm extends Component{
    render(){
        return(
            <form role="search" className="navbar-left app-search pull-left hidden-xs">
                <input type="text" placeholder="Search..." className="form-control" />
            </form>
        )
    }
}
export default SearchForm;