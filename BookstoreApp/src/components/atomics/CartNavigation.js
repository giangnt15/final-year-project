import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

function CartNavigation(props) {
    return (
        <TouchableOpacity style={{marginLeft: 4}} onPress={() => { }}>
            <Icon type="feather" name="shopping-cart" solid={false} size={19} color="#fff" />
        </TouchableOpacity>
    )
}

export default CartNavigation;