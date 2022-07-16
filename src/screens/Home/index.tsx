import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';

const Home = ({ navigation }) => {
    const onLogout = async () => {
        await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(false))
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{alignSelf: 'flex-end', padding: 4, marginEnd: 8, marginTop: 8}}
                onPress={onLogout}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            </View>
        </View>
    );
};

export default Home;