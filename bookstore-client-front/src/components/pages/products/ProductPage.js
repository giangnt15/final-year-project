import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../../../api/bookApi';
import { Link } from 'react-router-dom';

function ProductPage(props){
    const {loading,error,data} = useQuery(GET_BOOK,{
        variables: {
            id: props.match.params.id
        }
    });
    if (loading) return (
        <div>Loading...</div>
    )
    if (error) return `Error! ${error.message}`;
    console.log(data)
    return (<div style={{position: 'fixed', left: 50, top: 300,zIndex: 100000}}>
        This is product page
        <Link to={`/book/ck5khvcd900360818j00s3aoe`}>Mat Biec</Link>
    </div>)
}

export default ProductPage;