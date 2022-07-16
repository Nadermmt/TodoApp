import {StyleSheet} from "react-native";
import {Colors} from "../../../assets";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 4
    },
    onCompleteContainer: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.black,
        padding: 4
    },
    picContainer: {
        flex: 0.2,
        aspectRatio: 1,
        marginStart: 4
    },
    pic: {
        flex: 1,
        aspectRatio: 1
    },
    desc: {
        flex: 1,
        marginHorizontal: 4
    }
})