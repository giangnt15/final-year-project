import React, { useEffect, useState } from 'react';
import ProductItem from '../../products/ProductItem';
import ListProductItem from '../../products/ListProductItem';
import Pagination from '../pagination/Pagination';
import { VIEW_MODE_GRID, VIEW_MODE_LIST, SORT_DIRECTION_LATEST, SORT_DIRECTION_NAME_AZ, SORT_DIRECTION_NAME_ZA, SORT_DIRECTION_PRICE_ASC, SORT_DIRECTION_PRICE_DESC } from '../../../constants';

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
  const { books, userSettings, changeShopPage,changeSortDirection,changeViewMode } = props;
  console.log(books)

  useEffect(() => {
    props.getBooks({
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
  }, [userSettings.shopPage,userSettings.sortDirection])//effect này chỉ chạy khi một trong những giá trị trong array thay đổi với lần render trước đó

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
              <aside className="wedget__categories poroduct--cat">
                <h3 className="wedget__title">Product Categories</h3>
                <ul>
                  <li><a href="#">Biography <span>(3)</span></a></li>
                  <li><a href="#">Business <span>(4)</span></a></li>
                  <li><a href="#">Cookbooks <span>(6)</span></a></li>
                  <li><a href="#">Health &amp; Fitness <span>(7)</span></a></li>
                  <li><a href="#">History <span>(8)</span></a></li>
                  <li><a href="#">Mystery <span>(9)</span></a></li>
                  <li><a href="#">Inspiration <span>(13)</span></a></li>
                  <li><a href="#">Romance <span>(20)</span></a></li>
                  <li><a href="#">Fiction/Fantasy <span>(22)</span></a></li>
                  <li><a href="#">Self-Improvement <span>(13)</span></a></li>
                  <li><a href="#">Humor Books <span>(17)</span></a></li>
                  <li><a href="#">Harry Potter <span>(20)</span></a></li>
                  <li><a href="#">Land of Stories <span>(34)</span></a></li>
                  <li><a href="#">Kids' Music <span>(60)</span></a></li>
                  <li><a href="#">Toys &amp; Games <span>(3)</span></a></li>
                  <li><a href="#">hoodies <span>(3)</span></a></li>
                </ul>
              </aside>
              <aside className="wedget__categories pro--range">
                <h3 className="wedget__title">Filter by price</h3>
                <div className="content-shopby">
                  <div className="price_filter s-filter clear">
                    <form action="#" method="GET">
                      <div id="slider-range" />
                      <div className="slider__range--output">
                        <div className="price__output--wrap">
                          <div className="price--output">
                            <span>Price :</span><input type="text" id="amount" readOnly />
                          </div>
                          <div className="price--filter">
                            <a href="#">Filter</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
              <aside className="wedget__categories poroduct--tag">
                <h3 className="wedget__title">Product Tags</h3>
                <ul>
                  <li><a href="#">Biography</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Cookbooks</a></li>
                  <li><a href="#">Health &amp; Fitness</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Mystery</a></li>
                  <li><a href="#">Inspiration</a></li>
                  <li><a href="#">Religion</a></li>
                  <li><a href="#">Fiction</a></li>
                  <li><a href="#">Fantasy</a></li>
                  <li><a href="#">Music</a></li>
                  <li><a href="#">Toys</a></li>
                  <li><a href="#">Hoodies</a></li>
                </ul>
              </aside>
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
                  <p>Hiển thị {(userSettings.shopPage - 1) * 9 + 1} – {(userSettings.shopPage - 1) * 9 + 9 >
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
