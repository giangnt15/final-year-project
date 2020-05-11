import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import FilterItem from '../../atomics/FilterItem';
import { FILTER_TYPE_CAT, FILTER_TYPE_AUTHOR, FILTER_TYPE_PUBLISHER, FILTER_TYPE_RATING } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    filterName: {
        fontSize: 16,
        fontWeight: '700'
    },
    filterItemCtn: {
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

function CommonFilter(props) {
    const { name, filterItems, type } = props;
    // const isFilterActive = (id) => {
    //     switch (filterType) {
    //         case FILTER_TYPE_CAT:
    //             if (id === filters.category) return true;
    //         case FILTER_TYPE_AUTHOR:
    //             if (id === filters.author) return true;
    //         case FILTER_TYPE_PUBLISHER:
    //             if (id === filters.publisher) return true;
    //         case FILTER_TYPE_RATING:
    //             if (id === filters.rating) return true;
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.filterName}>{name}</Text>
            <View style={styles.filterItemCtn}>
                {filterItems.map(item => {
                    return (
                        <FilterItem key={item.id} isSelected={true} type={type} value={item.id}
                            name={item.name ?? item.pseudonym}></FilterItem>
                    )
                })}
            </View>
        </View>
    )
}

export default CommonFilter;