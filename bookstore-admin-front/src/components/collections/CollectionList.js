import React, { Children } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES_PAGING_NO_RELATION } from '../../api/categoryApi';
import { message, Table } from 'antd';
import moment from 'moment';
import { DATE_TIME_VN_24H } from '../../constants';
import { NavLink } from 'react-router-dom';
import { GET_COLLECTIONS } from '../../api/collectionApi';

function CollectionList(props) {

    const { selectedRowKeys, setSelectedRowKeys, currentPage, setCurrentPage, rowsPerPage, setRowsPerPage
        , orderBy, setOrderBy, searchValues, setSearchValues, renderSort, getColumnSearchProps,
        filterDropdownCustom } = props;

    const { loading, data = { getCollections: { collections: [] } } } = useQuery(GET_COLLECTIONS, {
        onError() {
            message.error("Có lỗi xảy ra khi lấy dữ liệu");
        },
        variables: {
            name: searchValues.collectionName ? searchValues.collectionName : undefined,
            orderBy,
            skip: (currentPage - 1) * rowsPerPage,
            first: rowsPerPage
        }
    })

    const columns = [{
        title: 'Ảnh',
        dataIndex: 'thumbnail',
        key: 'thumbnail',
    }, {
        title: 'Tên',
        dataIndex: 'collectionName',
        key: 'collectionName',
        colSpan: 2,
        render: (name) => {
            return {
                children: name,
                props: {
                    colSpan: 2
                }
            }
        },
        ...getColumnSearchProps('collectionName'),
        ...renderSort('collectionName'),
    }, {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        colSpan: 2,
        render: (des) => {
            return {
                children: des,
                props: {
                    colSpan: 2
                }
            }
        },
        ellipsis: true
    }, {
        title: 'Ngày tạo',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt) => {
            return {
                children: moment(createdAt).format(DATE_TIME_VN_24H)
            }
        },
        ...renderSort('createdAt'),
    }, {
        title: 'Cập nhật lần cuối',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        ...renderSort('updatedAt'),
        render: (updatedAt) => {
            return {
                children: moment(updatedAt).format(DATE_TIME_VN_24H)
            }
        }
    }]

    const createDataSource = (collections) => {
        if (!collections) return [];
        return collections.map((item, index) => {
            return {
                ...item,
                key: item.id,
                collectionName: <NavLink to={`/catalog/collection/edit/${item.id}`}>{item.collectionName}</NavLink>,
                thumbnail: <img width="50" src={item.thumbnail} />
            }
        })
    }

    return (
        <Table columns={columns} loading={loading}
            rowSelection={selectedRowKeys}
            scroll={{ x: 1200 }}
            bordered={true}
            pagination={{
                pageSize: rowsPerPage,
                pageSizeOptions: ['10', '20', '50', '100'],
                showTotal: (total) =>
                    `Hiển thị ${(currentPage - 1) * rowsPerPage + 1} - ${currentPage * rowsPerPage <= data.getCollections.totalCount ? currentPage * rowsPerPage : data.getCollections.totalCount} trên ${data.getCollections.totalCount} kết quả`,
                showSizeChanger: true,
                onShowSizeChange: (current, size) => setRowsPerPage(size),
                total: data.getCollections.totalCount,
                onChange: (page) => { setCurrentPage(page) }
            }}
            dataSource={createDataSource(data.getCollections.collections)} />
    )
}

export default CollectionList;