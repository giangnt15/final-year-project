import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation login($data: UserLoginInput!){
        login(data: $data){
            user{
                id
                username
                fullName
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

export const SIGNUP = gql`
    mutation signUp($data: UserSignupInput!){
        signUp(data: $data){
            user{
                id
                username
                fullName
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