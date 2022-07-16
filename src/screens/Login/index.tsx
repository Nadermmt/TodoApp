import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';

const Login = ({ navigation }) => {
    const [passCode, setPassCode] = useState('');

    const onLogin = async () => {
        if (passCode === '1234') {
            await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(true))
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.passcodeInput}
                onChangeText={text => setPassCode(text)}
                keyboardType={'number-pad'}
            />
            <TouchableOpacity
                style={styles.loginButtonContainer}
                onPress={onLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;