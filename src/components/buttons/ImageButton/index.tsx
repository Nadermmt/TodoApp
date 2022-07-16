import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ImageButton = ({ source, containerStyle, imageStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, containerStyle]}
            onPress={onPress}
        >
            {source && <Image
                style={[styles.imageStyle, imageStyle]}
                source={source}
            />}
        </TouchableOpacity>
    );
};

export default ImageButton;