import React, { useState, useEffect, useRef } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_BOOKS_FOR_BROWSING } from '../api/bookApi';
import { showToast } from '../utils/common';
import BookGrid from '../components/organisms/books/BookGrid';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Header from '../components/organisms/shared/Header';
import { Icon } from 'react-native-elements';
import 'intl';
import 'intl/locale-data/jsonp/vi-VN';
import Drawer from 'react-native-drawer-layout';
import Filters from '../components/organisms/shared/Filters';
import { useSelector, useDispatch } from 'react-redux';
import { changeSortDirection } from '../redux/actions/userSettingsActions';
import { withApollo } from '@apollo/react-hoc'
import { GET_CATEGORIES } from '../api/categoryApi';
import { GET_AUTHORS } from '../api/authorApi';
import { GET_PUBLISHERS } from '../api/publisherApi';
import SelectedFilter from '../components/atomics/SelectedFilter';
import { FILTER_TYPE_AUTHOR, FILTER_TYPE_CAT, FILTER_TYPE_PUBLISHER, COLOR_PRIMARY, FILTER_TYPE_PRICE, FILTER_TYPE_RATING } from '../constants';

const width = Dimensions.get('window').width

const filterItemsPrice = [{
    range: [50000],
    id: '1',
    operator: 'lt',
    name: `Dưới 50,000`
}, {
    range: [50000, 100000],
    id: '2',
    operator: 'between',
    name: `Từ 50,000 đến 100,000`
}, {
    range: [100000, 200000],
    id: '3',
    operator: 'between',
    name: `Từ 100,000 đến 200,000`
}, {
    range: [200000, 300000],
    id: '5',
    operator: 'between',
    name: `Từ 200,000 đến 300,000`
}, {
    range: [300000, 400000],
    id: '6',
    operator: 'between',
    name: `Từ 300,000 đến 400,000`
}, {
    range: [400000, 500000],
    id: '7',
    operator: 'between',
    name: `Từ 400,000 đến 500,000`
}, {
    range: [500000, 1000000],
    id: '8',
    operator: 'between',
    name: `Từ 500,000 đến 1,000,000`
}, {
    range: [1000000],
    id: '9',
    operator: 'gt',
    name: `Trên 1,000,000`
}];

const filterItemsRating = [{
    id: 5,
    name: "Từ 5 sao"
}, {
    id: 4,
    name: "Từ 4 sao"
}, {
    id: 3,
    name: "Từ 3 sao"
}
]

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    optionContainer: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        height: 44,
        backgroundColor: "#fff",
        borderColor: "#e1e5eb",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1.5,
    },
    orderByCtn: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start'
    },
    picker: {
        width: 100,
        padding: 0,
        margin: 0,
        transform: [
            {
                scaleX: 0.8
            }, {
                scaleY: 0.8
            }
        ]
    },
    pickerItem: {
        fontWeight: '900'
    },
    rightComponent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    drawer: {
        shadowColor: '#000000', margin: 0,
        backgroundColor: '#fff',
        shadowOpacity: 0.8, shadowRadius: 3, position: 'absolute', zIndex: 111
    },
    drawerCtn: {
        width: '100%'
    },
    contentContainer: {
        width: '100%'
    },
    selectedFiltersCtn: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: '#fff',
        borderColor: "#e1e5eb",
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        flexWrap: 'wrap'
    },
});

function BookScreen(props) {

    const { client } = props;

    const [bookData, setBookData] = useState({
        books: [],
        totalCount: 0
    });
    const [orderBy, setOrderBy] = useState('createdAt_DESC');
    const drawerRef = useRef();
    const hasMore = bookData.books.length < bookData.totalCount;

    const [getBooks, { loading: gettingBooks }] = useLazyQuery(GET_BOOKS_FOR_BROWSING, {
        onError() {
            showToast("Có lỗi xảy ra khi lấy dữ liệu");
        },
        onCompleted(data) {
            if (data.getBooksForBrowsing && data.getBooksForBrowsing.books) {
                showToast(Intl.NumberFormat().format(data.getBooksForBrowsing.totalCount) + " sản phẩm");
                setBookData({
                    books: data.getBooksForBrowsing.books,
                    totalCount: data.getBooksForBrowsing.totalCount
                });
            }
            drawerRef.current.closeDrawer();
        }
    });

    const [getMoreBooks, { loading: gettingMoreBooks }] = useLazyQuery(GET_BOOKS_FOR_BROWSING, {
        onError() {
            showToast("Có lỗi xảy ra khi lấy dữ liệu");
        },
        fetchPolicy: 'cache-and-network',
        onCompleted(data) {
            if (data.getBooksForBrowsing && data.getBooksForBrowsing.books) {
                setBookData(prev => ({
                    books: [...prev.books, ...data.getBooksForBrowsing.books],
                    totalCount: data.getBooksForBrowsing.totalCount
                }));
            }
        },

    });

    const fetchMore = () => {
        if (bookData.books.length < bookData.totalCount) {
            getMoreBooks({
                variables: {
                    orderBy: userSettings.sortDirection,
                    first: 9,
                    skip: bookData.books.length
                }
            });
        }
    }

    const [drawerOpen, setDrawerOpen] = useState(false);
    function openFilterDrawer() {
        console.log('open drawer')
        // setDrawerOpen(true);
        drawerRef.current.openDrawer();
    }

    function onChangeDrawer() {
        console.log('close drawer')
        // setDrawerOpen(isOpen);
        drawerRef.current.closeDrawer();

    }

    const { filters, userSettings } = useSelector(state => ({
        filters: state.filters,
        userSettings: state.userSettings
    }));

    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        let authBookWhere = {};
        let catBookWhere = {};
        let pubBookWhere = {};

        if (filters.price) {
            if (filters.price.operator === 'gt') {
                catBookWhere = {
                    authors_some: {
                        id: filters.author
                    },
                    publisher: {
                        id: filters.publisher
                    },
                    basePrice_gt: filters.price.range[0]
                };
                authBookWhere = {
                    categories_some: {
                        id: filters.category
                    },
                    publisher: {
                        id: filters.publisher
                    },
                    basePrice_gt: filters.price.range[0]
                };
                pubBookWhere = {
                    authors_some: {
                        id: filters.author
                    },
                    publisher: {
                        id: filters.publisher
                    },
                    basePrice_gt: filters.price.range[0]
                };
            } else if (filters.price.operator === 'lt') {
                catBookWhere = {
                    authors_some: {
                        id: filters.author
                    },
                    publisher: {
                        id: filters.publisher
                    },
                    basePrice_lt: filters.price.range[0]
                };
                authBookWhere = {
                    categories_some: {
                        id: filters.category
                    },
                    publisher: {
                        id: filters.publisher
                    },
                    basePrice_lt: filters.price.range[0]
                };
                pubBookWhere = {
                    authors_some: {
                        id: filters.author
                    },
                    publisher: {
                        id: filters.publisher
                    },
                    basePrice_lt: filters.price.range[0]
                };
            } else if (filters.price.operator === 'between') {
                catBookWhere = {
                    AND: [{
                        authors_some: {
                            id: filters.author
                        },
                        publisher: {
                            id: filters.publisher
                        },
                        basePrice_gt: filters.price.range[0]
                    }, {
                        authors_some: {
                            id: filters.author
                        },
                        publisher: {
                            id: filters.publisher
                        },
                        basePrice_lt: filters.price.range[1]
                    }]
                };
                authBookWhere = {
                    AND: [{
                        categories_some: {
                            id: filters.category
                        },
                        publisher: {
                            id: filters.publisher
                        },
                        basePrice_gt: filters.price.range[0]
                    }, {
                        categories_some: {
                            id: filters.category
                        },
                        publisher: {
                            id: filters.publisher
                        },
                        basePrice_lt: filters.price.range[1]
                    }]
                };
                pubBookWhere = {
                    AND: [{
                        authors_some: {
                            id: filters.author
                        },
                        publisher: {
                            id: filters.publisher
                        },
                        basePrice_gt: filters.price.range[0]
                    }, {
                        authors_some: {
                            id: filters.author
                        },
                        publisher: {
                            id: filters.publisher
                        },
                        basePrice_lt: filters.price.range[1]
                    }]
                };
            }
        } else {
            catBookWhere = {
                authors_some: {
                    id: filters.author
                },
                publisher: {
                    id: filters.publisher
                }
            };
            pubBookWhere = {
                authors_some: {
                    id: filters.author
                },
                categories_some: {
                    id: filters.category
                },
            };
            authBookWhere = {
                categories_some: {
                    id: filters.category
                },
                publisher: {
                    id: filters.publisher
                }
            }
        }
        (async function getFilters() {
            try {
                const resCat = await client.query({
                    query: GET_CATEGORIES,
                    variables: {
                        bookWhere: catBookWhere,
                        where: {
                            books_some: {
                                // authors_some: {
                                //     id: filters.author
                                // },
                                // publisher: {
                                //     id: filters.publisher
                                // }
                            }
                        },
                        orderBy: "name_ASC"
                    },
                });
                const resAuth = await client.query({
                    query: GET_AUTHORS,
                    variables: {
                        bookWhere: authBookWhere,
                        where: {
                            books_some: {
                                // categories_some: {
                                //     id: filters.category
                                // },
                                // publisher: {
                                //     id: filters.publisher
                                // }
                            }
                        },
                        orderBy: "pseudonym_ASC"
                    }
                });
                const resPub = await client.query({
                    query: GET_PUBLISHERS,
                    variables: {
                        bookWhere: pubBookWhere,
                        where: {
                            books_some: {
                                // authors_some: {
                                //     id: filters.author
                                // },
                                // categories_some: {
                                //     id: filters.category
                                // },
                            }
                        },
                        orderBy: "name_ASC"
                    }
                });
                setAuthors(resAuth.data.getAuthors);
                setCategories(resCat.data.getCategories);
                setPublishers(resPub.data.getPublishers);
            } catch (err) {
                showToast("Có lỗi xảy ra khi lấy dữ liệu");
            }
        })()

    }, [filters.category, filters.rating,filters.author, filters.publisher, filters.price ? filters.price.id : undefined])

    useEffect(() => {
        let where = {};
        if (filters.price) {
            if (filters.price.operator === 'gt') {
                where = {
                    categories_some: {
                        id: filters.category
                    },
                    authors_some: {
                        id: filters.author
                    },
                    basePrice_gt: filters.price.range[0],
                    avgRating_gte: filters.rating,
                    publisher: {
                        id: filters.publisher
                    }
                }
            } else if (filters.price.operator === 'lt') {
                where = {
                    categories_some: {
                        id: filters.category
                    },
                    authors_some: {
                        id: filters.author
                    },
                    avgRating_gte: filters.rating,
                    basePrice_lt: filters.price.range[0],
                    publisher: {
                        id: filters.publisher
                    }
                }
            } else if (filters.price.operator === 'between') {
                where = {
                    AND: [{
                        categories_some: {
                            id: filters.category
                        },
                        authors_some: {
                            id: filters.author
                        },
                        basePrice_gt: filters.price.range[0],
                        avgRating_gte: filters.rating,
                        publisher: {
                            id: filters.publisher
                        }
                    }, {
                        categories_some: {
                            id: filters.category
                        },
                        authors_some: {
                            id: filters.author
                        },
                        avgRating_gte: filters.rating,
                        basePrice_lt: filters.price.range[1],
                        publisher: {
                            id: filters.publisher
                        }
                    }]
                }
            }
        } else {
            where = {
                categories_some: {
                    id: filters.category
                },
                authors_some: {
                    id: filters.author
                },
                basePrice: filters.price,
                avgRating_gte: filters.rating,
                publisher: {
                    id: filters.publisher
                }
            }
        }
        getBooks({
            variables: {
                where,
                orderBy: userSettings.sortDirection,
                skip: 0,
                first: 9
            }
        });

    }, [
        userSettings.sortDirection,
        filters.price ? filters.price.id : undefined, filters.publisher,
        filters.category,
        filters.rating,
        filters.author])//effect này chỉ chạy khi một trong những giá trị trong array thay đổi với lần render trước đó

    const selectedAuthor = authors?.find(a => a.id === filters.author);
    const selectedCat = categories?.find(c => c.id === filters.category);
    const selectedPublisher = publishers?.find(p => p.id === filters.publisher);
    const selectedPrice = filterItemsPrice?.find(p => p.id === filters.price?.id);
    const selectedRating = filterItemsRating?.find(r => r.id === filters.rating);

    const isFiltered = filters.author || filters.category || filters.publisher || filters.price||filters.rating;
    return (
        <Drawer renderNavigationView={() =>
            <Filters categories={categories}
                authors={authors}
                publishers={publishers}
                loading={gettingBooks}
                ratings={filterItemsRating}
                prices={filterItemsPrice}
                closeDrawer={onChangeDrawer} />}
            ref={drawerRef}
            drawerWidth={width * 0.9}
            drawerBackgroundColor="#fff"
            contentContainerStyle={styles.contentContainer}
            style={styles.drawerCtn}
            onChange={onChangeDrawer}
            drawerPosition="right"
            fullHeight={true}
            drawerStyle={styles.drawer}
            type='overlay' >
            <View style={styles.container}>
                <Header />
                <View style={styles.optionContainer}>
                    <View style={styles.orderByCtn}>
                        <Text style={{ width: 55, fontSize: 13, padding: 0 }}>Sắp xếp: </Text>
                        <Picker selectedValue={userSettings.sortDirection} onValueChange={(val) => {
                            dispatch(changeSortDirection(val));
                        }}
                            style={styles.picker} itemStyle={styles.pickerItem}>
                            <Picker.Item value="createdAt_DESC" label="Mới nhất"></Picker.Item>
                            <Picker.Item value="avgRating_DESC" label="Đánh giá cao"></Picker.Item>
                            <Picker.Item value="avgRating_ASC" label="Đánh giá thấp"></Picker.Item>
                            <Picker.Item value="title_ASC" label="Tên A-Z"></Picker.Item>
                            <Picker.Item value="title_DESC" label="Tên Z-A"></Picker.Item>
                            <Picker.Item value="basePrice_ASC" label="Giá tăng dần"></Picker.Item>
                            <Picker.Item value="basePrice_DESC" label="Giá giảm dần"></Picker.Item>
                        </Picker>
                    </View>
                    <TouchableOpacity onPress={openFilterDrawer} style={styles.rightComponent}>
                        <Icon type="material-community" name={isFiltered ? 'filter' : "filter-outline"}
                            color={isFiltered ? COLOR_PRIMARY : "#aaa"} size={24}
                            style={{ marginRight: 4 }} />
                        <Text style={{ fontSize: 13 }}>Lọc</Text>
                    </TouchableOpacity>
                </View>
                {isFiltered && <View style={styles.selectedFiltersCtn}>
                    {selectedAuthor && <SelectedFilter text={selectedAuthor.pseudonym}
                        value={selectedAuthor.id} type={FILTER_TYPE_AUTHOR} />}
                    {selectedCat && <SelectedFilter text={selectedCat.name}
                        value={selectedCat.id} type={FILTER_TYPE_CAT} />}
                    {selectedPublisher && <SelectedFilter text={selectedPublisher.name}
                        value={selectedPublisher.id} type={FILTER_TYPE_PUBLISHER} />}
                    {selectedPrice && <SelectedFilter text={selectedPrice.name}
                        value={selectedPrice} type={FILTER_TYPE_PRICE} />}
                    {selectedRating && <SelectedFilter text={selectedRating.name}
                        value={selectedRating.id} type={FILTER_TYPE_RATING} />}
                </View>}
                {gettingBooks ? <ActivityIndicator style={{ marginTop: '45%' }} /> : <BookGrid books={bookData.books} loading={gettingBooks || gettingMoreBooks} fetchMore={fetchMore} />}
            </View>
        </Drawer>
    )

}

export default withApollo(BookScreen);