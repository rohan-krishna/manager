import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label,onChangeText,value, placeholder, keyboardType, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                { label }
            </Text>
            
            <TextInput 
                style={inputStyle}
                onChangeText={onChangeText} 
                value={value}
                underlineColorAndroid='transparent'
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />

        </View>
    )
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        color: '#000',
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };