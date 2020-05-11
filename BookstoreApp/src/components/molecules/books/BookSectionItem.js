import React, { useRef } from 'react';
import { Image, Icon } from 'react-native-elements';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import NumberFormat from 'react-number-format';
import { calculateDiscount } from '../../../utils/common';

const styles = StyleSheet.create({
    container: {
        width: 85,
        height: 160,
        paddingHorizontal: 4,
        display: 'flex',
        flexDirection: 'column',
    },
    imgCtn: {
        paddingVertical: 4,
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 12,
        height: 30
    }
})

function BookSectionItem(props) {

    const { book } = props;
    const { thumbnail, title, basePrice,discounts,reiviews } = book;
    const {discountedPrice} = discounts;
    return (
        <View style={styles.container}>
            <Image containerStyle={styles.imgCtn} style={{
                height: 100,
                resizeMode: 'contain'
            }} source={{ uri: thumbnail }} PlaceholderContent={<Icon type="antdesign" name="picture" />} />

            <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>{title}</Text>
            <Text><NumberFormat value={discountedPrice} suffix=" đ"  renderText={value => <Text>{value}</Text>}  displayType={'text'} thousandSeparator={true} /></Text>
        </View>
    )
}

export default BookSectionItem;