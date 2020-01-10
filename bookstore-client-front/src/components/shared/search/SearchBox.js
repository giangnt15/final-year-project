import React from 'react';
import './search.css';

function SearchBox(props){
    return (<div className="brown--color box-search-content search_active block-bg close__top">
    <form id="search_mini_form" className="minisearch" action="#">
      <div className="field__search">
        <input type="text" placeholder="Search entire store here..." />
        <div className="action">
          <a href="#"><i className="zmdi zmdi-search" /></a>
        </div>
      </div>
    </form>
    <div className="close__wrap" onClick={props.onClose}>
      <span>close</span>
    </div>
  </div>)
}
export default SearchBox;