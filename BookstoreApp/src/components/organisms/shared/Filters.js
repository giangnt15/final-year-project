import React from 'react';
import CommonFilter from '../../molecules/shared/CommonFilter';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLOR_PRIMARY, FILTER_TYPE_CAT, FILTER_TYPE_AUTHOR, FILTER_TYPE_PUBLISHER,FILTER_TYPE_RATING } from '../../../constants';
import { Button } from 'react-native-elements';
import {useDispatch} from 'react-redux';
import { applyFilter, resetFilterTemp } from '../../../redux/actions/filtersActions';
import PriceFilter from '../../molecules/shared/PriceFilter';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: "flex"
    },
    header: {
        backgroundColor: COLOR_PRIMARY,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12
    },
    headerCenter: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '700'
    },
    headerBtnText: {
        color: "#fff"
    }
})

function Filters(props) {

    const { closeDrawer,categories=[], publishers=[], authors=[],prices=[],ratings=[], loading } = props;
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.header}>
                    <TouchableOpacity onPress={closeDrawer}>
                        <Text style={styles.headerBtnText}>Đóng</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerCenter}>Lọc sách</Text>
                    <TouchableOpacity onPress={()=>dispatch(resetFilterTemp())}>
                        <Text style={styles.headerBtnText}>Bỏ chọn</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <CommonFilter filterItems={categories} type={FILTER_TYPE_CAT} name="Thể loại" />
                    <PriceFilter filterItems={prices} name="Giá" />
                    <CommonFilter filterItems={ratings} type={FILTER_TYPE_RATING} name="Đánh giá" />
                    <CommonFilter filterItems={authors} type={FILTER_TYPE_AUTHOR} name="Tác giả" />
                    <CommonFilter filterItems={publishers} type={FILTER_TYPE_PUBLISHER} name="Nhà xuất bản" />
                </View>

            </ScrollView>
            <View style={{
                backgroundColor: "#fff",
                bottom: 0, padding: 12, paddingHorizontal: 16, width: '100%',
                height: 56, display: "flex", justifyContent: "center"
            }}>
                <Button onPress={()=>dispatch(applyFilter())} loading={loading} title="Áp dụng" >

                </Button>
            </View>

        </View>
    )
}

export default Filters;