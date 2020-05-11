import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import BookItem from '../../molecules/books/BookItem';
import { View, ActivityIndicator } from 'react-native';
import Empty from '../../atomics/Empty';

function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 450;
}

function BookGrid(props) {
    const { books, fetchMore, loading } = props;
    function _renderFooter() {
        if (!loading) return null;

        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                <ActivityIndicator animating size="small" />
            </View>
        );
    }

    function renderBook({ item, index }) {
        return <BookItem book={item} index={index} />
    }
    return (
        <>{books.length === 0 ? <View
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
            <Empty /></View>
            : <FlatList data={books}
                refreshing={loading}
                style={{ backgroundColor: '#fff' }}
                horizontal={false} numColumns={2}
                renderItem={renderBook}
                ListFooterComponent={_renderFooter}
                onScroll={(e) => {
                    if (isCloseToBottom(e.nativeEvent) && !loading) {
                        fetchMore();
                    }
                }}>
            </FlatList>}</>
    )
}

export default BookGrid;