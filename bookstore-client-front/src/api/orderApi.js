import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
    mutation createOrder($data: OrderCreateInput!){
        createOrder(data: $data){
           id
        }
    }
`

export const GET_ORDERS = gql`
    query getOrders($where: OrderWhereInput, $orderBy: OrderOrderByInput, $first: Int,$skip: Int, $selection: String){
        getOrders(where: $where, orderBy: $orderBy, first: $first, skip: $skip, selection: $selection){
           orders{
               id
               items{
                   id
                   price
                   quantity
                   item{
                       id
                       title
                       thumbnail
                   }
               }
               grandTotal
               shippingAddress{
                   id
                   fullName
                   phone
                   ward{
                       id
                       name
                   }
                   district{
                       id
                       name
                   }
                   province{
                       id
                       name
                   }
                   address
               }
               paymentMethod{
                   id
                   name
               }
               shippingMethod{
                   id
                   name
               }
               orderStatus
               paymentStatus
               createdAt
           }
           totalCount
        }
    }
`

export const GET_ORDER_BY_ID = gql`
    query getOrderById($id: ID!){
        getOrderById(id: $id){
            id
            items{
                id
                price
                quantity
                item{
                    id
                    title
                    thumbnail
                }
            }
            grandTotal
            subTotal
            shippingAddress{
                id
                fullName
                phone
                ward{
                    id
                    name
                }
                district{
                    id
                    name
                }
                province{
                    id
                    name
                }
                address
            }
            paymentMethod{
                id
                name
            }
            shippingMethod{
                id
                name
            }
            orderStatus
            paymentStatus
            createdAt
        }
    }
`

export const UPDATE_ORDER_STATUS = gql`
    mutation updateOrderStatus($orderId: ID!, $orderStatus: OrderStatus!){
        updateOrderStatus(orderId: $orderId, orderStatus: $orderStatus){
            id
        }
    }
`