import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Images} from "../../assets";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            isUserLoggedIn();
        }, 1000)
    }, []);

    const isUserLoggedIn = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isUserLoggedIn')
        if (isLoggedIn && JSON.parse(isLoggedIn)) {
            navigation.navigate('Home');
        } else {
            navigation.navigate('Login');
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.todoListImage} source={Images.todoList}/>
        </View>
    );
};

export default Splash;