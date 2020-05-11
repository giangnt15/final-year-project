import React, { useRef, useEffect, useCallback } from 'react';
import Header from '../components/organisms/shared/Header';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function SearchScreen(props) {
    const { route, navigation } = props;
    const searchBarRef = useRef();
    const unsubscribe = navigation.addListener('focus', () => {
        // do something
    });

    useFocusEffect(useCallback(()=>{
        if (searchBarRef.current) {
            searchBarRef.current.focus();
        }
    }));

    return (
        <View >
            <Header style={{ paddingRight: 0 }} searchBarRef={searchBarRef} hideCart />
        </View>
    )

}

export default SearchScreen;