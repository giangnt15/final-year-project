import React, { useState } from 'react';
import './search.css';
import { GET_BOOKS } from '../../../api/bookApi';
import { SORT_DIRECTION_LATEST } from '../../../constants';

let searchDelay = null;

function SearchBox(props) {

  const [isSearching, setIsSearching] = useState(false);

  const { getBooks, client } = props;

  const searchBooks = async (e) => {
    const target = e.target;
    const { value } = target;
    if (value) {
      if (!isSearching){
        setIsSearching(true);
      }
      clearTimeout(searchDelay);
      searchDelay = setTimeout( async () => {
        const res = await client.query({
          query: GET_BOOKS,
          variables: {
            where: {
              title_contains: value
            },
            orderBy: SORT_DIRECTION_LATEST,
            skip: 0,
            first: 10,
            selection: `{
            id
            title
            basePrice
            description
            thumbnail
            images
            dimensions
            translator
            format
            isbn
            publishedDate
            availableCopies
            pages
            publisher{
              id
              name
            }
            authors{
              id
              pseudonym
            }
            categories{
              id
              name
            }
          }`
          }
        })
        console.log(res)
      }, 500);
    }else{
      setIsSearching(false);
    }
  }

  return (<div className="brown--color box-search-content search_active block-bg close__top">
    <form id="search_mini_form" className="minisearch" action="#">
      <div className={`field__search${isSearching?" has-value":""}`}>
        <input type="text" onChange={searchBooks}
          placeholder="Nhập tên sách, tác giả hoặc nhà xuất bản" />
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