import React from 'react';
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
                style={styles.logoutButtonContainer}
                onPress={onLogout}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;