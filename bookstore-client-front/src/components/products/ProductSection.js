import React from 'react';

function ProductSection(props){

    return( <section className="wn__product__area brown--color pt--80  pb--30">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section__title text-center">
            <h2 className="title__be--2">New <span className="color--theme">Products</span></h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
          </div>
        </div>
      </div>
    {props.children}
    </div>
    </section>)

}

export default ProductSection;