import React from 'react';
import { Spin } from 'antd';

function productSectionWrapper(WrappedComponent, variables){
    return function(props){
        const {loading,error,data} = useQuery(GET_BOOKS, {
            variables
        })

        if (loading) return <Spin spinning={loading} />
        if (error) return <div>Error</div>

        return (
            <WrappedComponent books={data.getBooks} {...props} />
        )
    }
}

export default productSectionWrapper;