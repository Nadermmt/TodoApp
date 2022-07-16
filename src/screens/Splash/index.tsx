import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Images} from "../../assets";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.todoListImage} source={Images.todoList}/>
        </View>
    );
};

export default Splash;