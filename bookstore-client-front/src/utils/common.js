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

export {getOrderStatusText};