import React, { useState } from 'react';
import './search.css';
import { GET_BOOKS } from '../../../api/bookApi';
import { SORT_DIRECTION_LATEST } from '../../../constants';
import ProductItem from '../../products/ProductItem';
import { NavLink } from 'react-router-dom';
import { Empty, Spin } from 'antd';

let searchDelay = null;

function SearchBox(props) {

  const [isSearching, setIsSearching] = useState(false);

  const { getBooks, client } = props;

  const [searchKeyWord, setSearchKeyWord] = useState('');

  const [books, setBooks] = useState([]);

  const [spinning ,setSpinning] = useState(false);

  const renderSearchPreview = (books) => {
    return books.length ? books.map(item => (
      <NavLink to={`/book/${item.id}`} key={item.id}>
        <div style={{ margin: 6 }}>
          <div style={{ backgroundColor: "#fff" }}>
            <img style={{ height: 200 }} src={item.thumbnail} />
          </div>
          <p style={{ color: '#fff' }}>{item.title}</p>
        </div>
      </NavLink>
    )) : (<div className="w-100" style={{ position: 'absolute', display: 'flex', justifyContent: 'center' }}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có kết quả trùng khớp." style={{}} />
    </div>)
  }

  const searchBooks = async (e) => {
    const target = e.target;
    const { value } = target;
    if (value) {
      if (!isSearching) {
        setIsSearching(true);
      }
      clearTimeout(searchDelay);
      searchDelay = setTimeout(async () => {
        setSpinning(true);
        const res = await client.query({
          query: GET_BOOKS,
          variables: {
            where: {
              OR: [
                {
                  title_contains: value
                },
                {
                  authors_some: {
                    pseudonym_contains: value
                  }
                },
                {
                  publisher: {
                    name_contains: value
                  }
                }
              ]
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
        setBooks(res.data.getBooks.books)
        setSpinning(false);
      }, 500);
    } else {
      setIsSearching(false);
      setBooks([]);
    }
    setSearchKeyWord(value)
  }

  return (<div className="brown--color box-search-content search_active block-bg close__top">
    <form id="search_mini_form" className="minisearch" action="#">
      <div className={`field__search${isSearching ? " has-value" : ""}`}>
        <input type="text" onChange={searchBooks}
          placeholder="Nhập tên sách, tác giả hoặc nhà xuất bản" />
        <div className="action">
          <a href="#"><i className="zmdi zmdi-search" /></a>
        </div>
      </div>
    </form>
    <div className="search-result-preview">
      {searchKeyWord && <h5 className="search-keyword" style={{color: '#fff'}}>Kết quả tìm kiếm cho: {searchKeyWord}</h5>}
      <br />
      <Spin spinning={spinning}>
        <div className="items-grid">
          {isSearching && renderSearchPreview(books)}
        </div>
      </Spin>
    </div>
    <div className="close__wrap" onClick={props.onClose}>
      <span>Đóng</span>
    </div>
  </div>)
}
export default SearchBox;