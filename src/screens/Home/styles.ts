import {StyleSheet} from 'react-native';
import {Colors} from "../../assets";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoutButtonContainer: {
        alignSelf: 'flex-end',
        padding: 4,
        marginEnd: 8,
        marginTop: 8
    },
    logoutButtonText: {
        color: Colors.black
    }
});