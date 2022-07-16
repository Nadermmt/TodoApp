import {StyleSheet} from 'react-native';
import {Colors} from "../../../assets";

export const styles = StyleSheet.create({
    container: {
        width: '40%',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 8
    },
    label: {
        width: '100%',
        textAlign: 'center'
    }
});