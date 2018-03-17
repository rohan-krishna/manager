// Import Libs for making components
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {

    const { textStyle, viewStyles } = styles;

    return (
        <View style={viewStyles}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#fff'
    },
    viewStyles: {
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        // paddingTop: 15,
        shadowColor: '#000',
        elevation: 3,
        position: 'relative'
    }
}

// Make the component available to other parts of the app
export { Header };
