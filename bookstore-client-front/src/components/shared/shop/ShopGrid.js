import React, { useEffect, useState } from 'react';
import ProductItem from '../../products/ProductItem';
import ListProductItem from '../../products/ListProductItem';
import Pagination from '../pagination/Pagination';
import { VIEW_MODE_GRID, VIEW_MODE_LIST, SORT_DIRECTION_LATEST, SORT_DIRECTION_NAME_AZ, SORT_DIRECTION_NAME_ZA, SORT_DIRECTION_PRICE_ASC, SORT_DIRECTION_PRICE_DESC, FILTER_TYPE_CAT, FILTER_TYPE_AUTHOR, FILTER_TYPE_PUBLISHER } from '../../../constants';
import CommonFilter from '../filters/CommonFilter';
import { GET_CATEGORIES } from '../../../api/categoryApi';
import { GET_AUTHORS } from '../../../api/authorApi';
import { GET_PUBLISHERS } from '../../../api/publisherApi';

const sortDirections = [
  {
    value: SORT_DIRECTION_LATEST,
    label: "Mới nhất",
  }, {
    value: SORT_DIRECTION_NAME_AZ,
    label: "Tên A-Z",
  },{
    value: SORT_DIRECTION_NAME_ZA,
    label: "Tên Z-A"
  },{
    value: SORT_DIRECTION_PRICE_ASC,
    label: "Giá tăng dần"
  },{
    value: SORT_DIRECTION_PRICE_DESC,
    label: "Giá giảm dần"
  }
]

function ShopGrid(props) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [viewMode,setViewMode] = useState('grid');

  // console.log(viewMode)

  // const goToPage = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // }
  const { books, userSettings, changeShopPage,changeSortDirection,changeViewMode,filters,client } = props;

  const [categories,setCategories] = useState([]);
  const [authors,setAuthors] = useState([]);
  const [publishers,setPublishers] = useState([]);

  useEffect(()=>{
    (async function getFilters(){
      const resCat = await client.query({
        query: GET_CATEGORIES,
        variables: {
          bookWhere: {
            authors_some: {
              id: filters.author
            },
            categories_some: {
              id: filters.category
            },
            publisher: {
              id: filters.publisher
            }
          },
          where: {
            books_some: {
              authors_some: {
                id: filters.author
              },
              publisher: {
                id: filters.publisher
              }
            }
          },
          orderBy: "name_ASC"
        }
      });
      const resAuth = await client.query({
        query: GET_AUTHORS,
        variables: {
          bookWhere: {
            authors_some: {
              id: filters.author
            },
            categories_some: {
              id: filters.category
            },
            publisher: {
              id: filters.publisher
            }
          },
          where: {
            books_some: {
              categories_some: {
                id: filters.category
              },
              publisher: {
                id: filters.publisher
              }
            }
          },
          orderBy: "pseudonym_ASC"
        }
      });
      const resPub = await client.query({
        query: GET_PUBLISHERS,
        variables: {
          bookWhere: {
            authors_some: {
              id: filters.author
            },
            categories_some: {
              id: filters.category
            },
            publisher: {
              id: filters.publisher
            }
          },
          where: {
            books_some: {
              authors_some: {
                id: filters.author
              },
              categories_some: {
                id: filters.category
              },
            }
          },
          orderBy: "name_ASC"
        }
      });
      setAuthors(resAuth.data.getAuthors);
      setCategories(resCat.data.getCategories);
      setPublishers(resPub.data.getPublishers);
    } )()

  },[filters.category, filters.author, filters.publisher])

  useEffect(() => {
    props.getBooks({
      where: {
        categories_some: {
          id: filters.category
        },
        authors_some: {
          id: filters.author
        },
        price: filters.price,
        publisher: filters.publisher
      },
      orderBy: userSettings.sortDirection,
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
        }`,
      skip: (userSettings.shopPage - 1) * 9,
      first: 9
    });
  }, [userSettings.shopPage,
    userSettings.sortDirection,
    filters.price,filters.publisher,
    filters.category,
  filters.author])//effect này chỉ chạy khi một trong những giá trị trong array thay đổi với lần render trước đó

  

  const renderProducts = () => {
    const listWrapper = document.querySelector(".shop__list__wrapper");
    if (listWrapper) {
      listWrapper.scrollIntoView();
    }
    return books.books.map((book, index) => {
      return (
        <div key={index}><ProductItem width={300} thumbHeight={360} book={book} /></div>
      )
    });
  }

  const renderProductsList = ()=>{
    const listWrapper = document.querySelector(".shop__list__wrapper");
    if (listWrapper) {
      listWrapper.scrollIntoView();
    }
    return books.books.map((book, index) => {
      return (
        <div key={index}><ListProductItem width={300} thumbHeight={360} book={book} /></div>
      )
    });
  }

  return (

    <div className="page-shop-sidebar left--sidebar bg--white section-padding--lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 order-2 order-lg-1 md-mt-40 sm-mt-40">
            <div className="shop__sidebar">
              <CommonFilter filterType={FILTER_TYPE_CAT} filterName="Thể loại" filterItems={categories} />
              <CommonFilter filterType={FILTER_TYPE_AUTHOR} filterName="Tác giả" filterItems={authors} />
              <CommonFilter filterType={FILTER_TYPE_PUBLISHER} filterName="Nhà xuất bản" filterItems={publishers} />
              
              <aside className="wedget__categories sidebar--banner">
                <img src="images/others/banner_left.jpg" alt="banner images" />
                <div className="text">
                  <h2>new products</h2>
                  <h6>save up to <br /> <strong>40%</strong>off</h6>
                </div>
              </aside>
            </div>
          </div>
          <div className="col-lg-9 col-12 order-1 order-lg-2">
            <div className="row">
              <div className="col-lg-12">
                <div className="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
                  <div className="shop__list nav justify-content-center" role="tablist">
                    <a className={`nav-item nav-link${userSettings.viewMode===VIEW_MODE_GRID?" active":""}`} 
                    onClick={()=>changeViewMode(VIEW_MODE_GRID)} data-toggle="tab" href="#nav-grid" role="tab"><i className="fa fa-th" /></a>
                    <a className={`nav-item nav-link${userSettings.viewMode===VIEW_MODE_LIST?" active":""}`} 
                    data-toggle="tab" onClick={()=>changeViewMode(VIEW_MODE_LIST)} href="#nav-list" role="tab"><i className="fa fa-list" /></a>
                  </div>
                  <p>Hiển thị {(userSettings.shopPage - 1) * 9 + 1>books.totalCount?books.totalCount:(userSettings.shopPage - 1) * 9 + 1} – {(userSettings.shopPage - 1) * 9 + 9 >
                    books.totalCount ? books.totalCount : (userSettings.shopPage-1) * 9 + 9} trên {books.totalCount} kết quả</p>
                  <div className="orderby__wrapper">
                    <span>Sắp xếp theo: </span>
                    <select className="shot__byselect" value={userSettings.sortDirection} onChange={(e)=>{changeSortDirection(e.target.value)}}>
                      {sortDirections.map(item=>{
                        return (<option key={item.value} value={item.value}>{item.label}</option>)
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab__container">
              <div className={`shop-grid tab-pane fade${userSettings.viewMode===VIEW_MODE_GRID?" show active":""}`} id="nav-grid" role="tabpanel">
                <div className="row">
                  {userSettings.viewMode===VIEW_MODE_GRID && renderProducts()}
                </div>
                
              </div>
              <div className={`shop-grid tab-pane fade${userSettings.viewMode===VIEW_MODE_LIST?" show active":""}`}  id="nav-list" role="tabpanel">
                <div className="list__view__wrapper">
                    {userSettings.viewMode===VIEW_MODE_LIST && renderProductsList()}
                </div>
              </div>
            </div>
            <br />
            <br />
            <Pagination page={userSettings.shopPage} goToPage={changeShopPage}
                  totalCount={books.totalCount} itemsPerPage={9} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopGrid;
