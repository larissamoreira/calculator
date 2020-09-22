import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        textAlign: 'center',
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#888',
    }
})

export default Button = props => (
    <TouchableHighlight onPress={props.onClick}>
        <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
)