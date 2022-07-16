import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../assets';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black80,
        justifyContent: 'flex-end'
    },
    formContainer: {
        width: '100%',
        backgroundColor: Colors.white,
        padding: 16,
        paddingBottom: 32
    },
    cancelButtonContainer: {
        alignSelf: 'flex-end'
    },
    imagesList: {
        marginVertical: 8,
        marginHorizontal: 4
    },
    imageItem: {
        borderRadius: 50,
        width: Dimensions.get('window').width * 0.12,
        aspectRatio: 1,
        margin: 4
    },
    desc: {
        width: '100%',
        borderColor: Colors.black,
        borderWidth: 1,
        padding: 4,
        marginTop: 8
    },
    submitButtonContainer: {
        alignSelf: 'center',
        marginTop: 8
    }
});