import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { COLOR_PRIMARY } from '../../constants';
import { useNavigation } from '@react-navigation/native';

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
        paddingHorizontal: 12
    },
    headerTitle: {
        marginLeft: 24,
        fontSize: 20,
        color: '#fff',
        fontWeight: '700'
    }
})


function HeaderBackAction(props) {
    const { title } = props;
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableHighlight style={{borderRadius: 100, padding: 8}} 
            underlayColor="rgba(255,255,255,0.2)" onPress={()=>navigation.goBack()}>
                <Icon type="antdesign" name="arrowleft" color="#fff" />
            </TouchableHighlight>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )

}

export default HeaderBackAction;