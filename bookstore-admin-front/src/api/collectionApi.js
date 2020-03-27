import gql from 'graphql-tag';

export const GET_COLLECTIONS = gql`
    query getCollections($name: String, $orderBy: CollectionOrderByInput, $first: Int, $skip: Int){
        getCollections(name: $name,orderBy: $orderBy, first: $first, skip: $skip){
            collections{
                id
                collectionName
                description
                thumbnail
                createdAt
                updatedAt
            }
            totalCount
        }
    }
`

export const GET_COLLECTION = gql`
    query getCollection($id: ID!){
        getCollection(id: $id){
            id
            collectionName
            thumbnail
            description
        }
    }
`