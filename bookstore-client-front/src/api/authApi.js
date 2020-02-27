import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($data: UserLoginInput!){
        login(data: $data){
            user{
                id
                username
                fullName
                avatar
                email
                phone
                gender
                birthdate
                password
                role
            }
            token
        }
    }

`

export const UPDATE_USER = gql`
    mutation updateUser($data: CustomUserUpdateInput!){
        updateUser(data: $data){
            id
            username
            fullName
            avatar
            email
            phone
            gender
            birthdate
            password
            role
        }
    }
`

export const SIGNUP = gql`
    mutation signUp($data: UserSignupInput!){
        signUp(data: $data){
            user{
                id
                username
                fullName
                email
                avatar
                phone
                gender
                birthdate
                password
                role
            }
            token
        }
    }
`