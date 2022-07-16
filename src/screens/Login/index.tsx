import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';
import {TextButton} from "../../components/buttons";

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
                placeholder={'Passcode = 1234'}
            />
            <TextButton
                containerStyle={styles.loginButtonContainer}
                label={'Login'}
                onPress={onLogin}
            />
        </View>
    );
};

export default Login;