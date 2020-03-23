import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Collapse, Select, message, Table, Button, Input, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

function ListCommon(Component, defaultOrderBy, listName) {

    return function ListCommonWrapper(props) {

        const [selectedRowKeys, setSelectedRowKeys] = useState([]);

        const [currentPage, setCurrentPage] = useState(1);

        const [rowsPerPage, setRowsPerPage] = useState(10);

        const [orderBy, setOrderBy] = useState(defaultOrderBy);

        const [searchValues, setSearchValues] = useState({

        })

        const searchInput = useRef();

        let searchTimeout = null;

        const handleSearch = (e) => {
            const { name, value } = e.target;
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => setSearchValues(prev => ({
                ...prev,
                [name]: value
            })), 300)
        };

        const handleReset = clearFilters => {
            clearFilters();
            this.setState({ searchText: '' });
        };

        const getColumnSearchProps = dataIndex => ({
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={searchInput}
                        placeholder={`Search ${dataIndex}`}
                        name={dataIndex}
                        onChange={e => handleSearch(e)}
                        // onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                </Button>
                </div>
            ),
            filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value, record) =>
                record[dataIndex]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: visible => {
                if (visible) {
                    setTimeout(() => searchInput.current.select());
                }
            },
            // render: text =>
            //     this.state.searchedColumn === dataIndex ? (
            //         <Highlighter
            //             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            //             searchWords={[this.state.searchText]}
            //             autoEscape
            //             textToHighlight={text.toString()}
            //         />
            //     ) : (
            //             text
            //         ),
        });

        const filterDropdownCustom = (dataIndex, placeholder, onInputChange, showInput = true) => {
            return ({ setSelectedKeys, selectedKeys, filters }) => {
                return (
                    <div style={{ padding: 8 }}>
                        {showInput && <Input placeholder={placeholder} onChange={(e) => {
                            e.persist();
                            clearTimeout(searchTimeout);
                            searchTimeout = setTimeout(() => onInputChange(e), 300)
                        }} />}
                        <div className="m-t-8">
                            {filters.map(item => (<div key={item.value} ><Checkbox
                                checked={selectedKeys.some(key => key === item.value)}
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    if (checked) {
                                        setSelectedKeys([...selectedKeys, item.value]);
                                    } else {
                                        setSelectedKeys(selectedKeys.filter(key => key !== item.value));
                                    }
                                }}
                            >{item.text}</Checkbox></div>))}
                        </div>
                        <hr />
                        <Button onClick={() => setSearchValues(prev => ({
                            ...prev,
                            [dataIndex]: selectedKeys
                        }))} size="small" style={{ width: 90 }}>
                            Lọc
                    </Button>
                    &nbsp;
                        <Button type="danger" onClick={() => {
                            setSearchValues(prev => ({
                                ...prev,
                                [dataIndex]: []
                            }));
                            setSelectedKeys([]);
                        }} size="small" style={{ width: 90 }}>
                            Xóa bộ lọc
                    </Button>
                    </div>
                )
            }
        }
        const renderSort = (dataIndex) => {
            return {
                sorter: true,
                sortOrder: orderBy.indexOf(dataIndex) >= 0 ? orderBy === `${dataIndex}_DESC` ? 'descend' : 'ascend' : false,
                onHeaderCell: () => {
                    return {
                        onClick() {
                            if (orderBy.indexOf(dataIndex) < 0) {
                                setOrderBy(`${dataIndex}_DESC`);
                            } else {
                                if (orderBy.indexOf("DESC") >= 0) {
                                    setOrderBy(`${dataIndex}_ASC`);
                                } else {
                                    setOrderBy(`${dataIndex}_DESC`);
                                }
                            }
                        }
                    }
                }
            }
        }


        return (
            <div className="content-wrapper">
                <div className="content-header m-b-20">
                    <h3>{listName}</h3>
                </div>
                <div className="content-body">
                    <Component {...props} filterDropdownCustom={filterDropdownCustom}
                        getColumnSearchProps={getColumnSearchProps}
                        orderBy={orderBy}
                        handleSearch={handleSearch} handleReset={handleReset}
                        searchValues={searchValues} setSearchValues={setSearchValues}
                        rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage}
                        selectedRowKeys={selectedRowKeys} setSelectedRowKeys={setSelectedRowKeys}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        renderSort={renderSort}
                    />
                </div>
            </div >
        )
    }
}

export default ListCommon;