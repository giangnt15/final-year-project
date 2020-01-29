import React, { useEffect, Fragment } from 'react';
import ProductItem from './ProductItem';

class ProductSection extends React.Component{

  componentDidMount(){
    this.props.getBooks({orderBy: "title_DESC"})
  }

  render(){
  const { isFullWidth, books, slickSettings } = this.props;
 
  const renderProducts = () => {
    return books.books.map((book,index) => {
      return (
        <div key={index}><ProductItem width={250} thumbHeight={280} book={book}  /></div>
    )})
  }

  return (<section className="wn__product__area brown--color pt--80  pb--30">
    <div className="container" style={{ maxWidth: isFullWidth ? '100%' : undefined }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="section__title text-center">
            <h2 className="title__be--2">New <span className="color--theme">Products</span></h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center'}}>
        {renderProducts()}
      </div>
    </div>
  </section>)
  }
}

export default ProductSection;