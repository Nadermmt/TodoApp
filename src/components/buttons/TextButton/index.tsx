import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const TextButton = ({ label, containerStyle, labelStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={onPress}
        >
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TextButton;