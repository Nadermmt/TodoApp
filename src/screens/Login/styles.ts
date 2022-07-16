import {StyleSheet} from 'react-native';
import {Colors} from "../../assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    passcodeInput: {
        width: '50%',
        borderWidth: 1,
        borderColor: Colors.grey,
        padding: 4,
        color: Colors.black
    },
    loginButtonContainer: {
        padding: 4,
        marginTop: 8
    },
    loginButtonText: {
        color: Colors.black
    }
});