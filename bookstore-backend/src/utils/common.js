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
    let discountAmount = 0;
    let discountRate = 0;
    for (let discount of discounts) {

      if (moment(discount.from).isBefore(moment()) && moment(discount.to).isAfter(moment())) {
        if (discount.usePercentage) {
            discountedPrice = (discountedPrice - (discountedPrice * discount.discountRate));
        } else {
            if (discountedPrice>=discount.discountAmount) {
                discountedPrice = (discountedPrice - discount.discountAmount)
            }else{
                discountedPrice = 0;
            }
        }
      }
    }
    discountAmount = basePrice - discountedPrice;
    discountRate = discountAmount/basePrice;
    return [discountedPrice, discountRate, discountAmount];
}
export {getOrderStatusText,calculateDiscount};