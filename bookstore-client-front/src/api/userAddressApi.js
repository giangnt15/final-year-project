import gql from 'graphql-tag';

export const GET_PROVINCES = gql`
    query getProvinces{
        getProvinces{
            id
            name
            type
        }
    }
`

export const GET_DISTRICTS = gql`
    query getDistricts($provinceId: ID!){
        getDistricts(provinceId: $provinceId){
            id
            name
            type
        }
    }
`
export const GET_WARDS = gql`
    query getWards($districtId: ID!){
        getWards(districtId: $districtId){
            id
            name
            type
        }
    }
`