import React from 'react';
import { StyleSheet } from 'react-native';
import {SearchBar as RNSearchBar} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
const styles = StyleSheet.create({
    searchBarCtn: {
        height: 54,
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputCtnStyle: {
        height: 36,
        backgroundColor: "#fff"
    },
    inputSearchStyle: {
        height: 28,
        backgroundColor: "#fff",
        marginLeft: 5,
        fontSize: 13
    },
})

function SearchBar(props) {
    const navigation = useNavigation();
    const {searchBarRef} = props;
    return (
        <RNSearchBar placeholder="Tìm sách qua tên sách, tác giả, NXB..."
            containerStyle={styles.searchBarCtn}
            inputStyle={styles.inputSearchStyle}
            ref={searchBarRef}
            onFocus={()=>navigation.navigate("Tìm kiếm",{
                focusInput: true
            })}
            searchIcon={{ size: 22 }}
            inputContainerStyle={styles.inputCtnStyle} />
    )
}

export default SearchBar;