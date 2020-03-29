import moment from 'moment';

function getOrderStatusText(status){
    switch(status){
        case "Ordered": 
            return "Đặt hàng thành công"
        case "Processing": 
            return "Đang xử lý"
        case "Completed": 
            return "Giao hàng thành công"
        case "Canceled": 
            return "Đã hủy"
        default: return "Đặt hàng thành công"
    }
}

function calculateDiscount(basePrice, discounts){
    let discountedPrice = basePrice;
    let discountRate = 0;
    for (let discount of discounts) {
      if (moment(discount.from).isBefore(moment()) && moment(discount.to).isAfter(moment())) {
        discountedPrice = (discountedPrice - (discountedPrice * discount.discountRate));
        discountRate = discount.discountRate;
      }
    }
    return [discountedPrice, discountRate];
}

function convertErrString(errString){
    return errString.replace("GraphQL error: ",'').replace("Network error: ",'');
}

export {getOrderStatusText,calculateDiscount,convertErrString};