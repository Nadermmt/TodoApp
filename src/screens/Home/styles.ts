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
        color: Colors.black,
        margin: 8
    },
    searchInput: {
        margin: 8,
        padding: 4,
        borderWidth: 1,
        borderColor: Colors.black
    },
    numberOfItemsLeft: {
        margin: 8
    },
    addButton: {
        flex: 0.08,
        margin: 8,
        borderRadius: 500,
        backgroundColor: Colors.grey,
        alignSelf: 'flex-end'
    }
});