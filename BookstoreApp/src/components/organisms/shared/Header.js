import React from 'react';
import { Header as RNHeader } from 'react-native-elements';
import { StyleSheet, Dimensions, View } from 'react-native';
import NavBar from '../../molecules/shared/NavBar';
import CartNavigation from '../../atomics/CartNavigation';
import SearchBar from '../../atomics/SearchBar';
import { COLOR_PRIMARY } from '../../../constants';

const { width, height } = Dimensions.get('window');

const IS_IPHONE_X = height === 812 || height === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 50;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
    header: {
        height: HEADER_HEIGHT,
        maxHeight: HEADER_HEIGHT,
        marginTop: 0,
        paddingTop: 0,
        display: "flex",
        flexDirection: 'row',
        backgroundColor: COLOR_PRIMARY,
        alignItems: 'center',
        paddingRight: 10
    },
    headerRight: {
        display: "flex",
        justifyContent: 'center'
    }
})

function Header(props) {
    const {hideCart,searchBarRef, style={}} = props;
    return (
        <View style={{...styles.header,...style}}>
            <SearchBar searchBarRef={searchBarRef} />
            {!hideCart&&<CartNavigation />}
        </View>
    )
}

export default Header;