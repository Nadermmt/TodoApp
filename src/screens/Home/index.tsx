import React, {useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, editItem} from '../../redux/Slices';
import {TodoItemCard} from "../../components";
import {AddEditTodoItemModal} from "../../modals";
import {ImageButton} from "../../components/buttons";
import {Images} from "../../assets";

const Home = ({ navigation }) => {
    const todoList = useSelector(state => state.todo.list);
    const [state, setState] = useState({
        isFormVisible: false,
        itemToEdit: null
    });
    const dispatch = useDispatch();

    const onLogout = async () => {
        await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(false))
        navigation.navigate('Login');
    };

    const onSubmitItem = (item) => {
        if (item.desc) {
            if (item.id) {
                dispatch(editItem(item))
            } else {
                dispatch(addItem(item))
            }
            setState({...state, itemToEdit: null, isFormVisible: false})
        } else {
            Alert.alert('Please add description')
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.logoutButtonContainer}
                onPress={onLogout}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
            <FlatList data={todoList} renderItem={({item, index}) =>
                <TodoItemCard
                    data={item}
                    onComplete={() => onSubmitItem({...item, isCompleted: !item.isCompleted})}
                    onPriorityChange={() => onSubmitItem({...item, isImportant: !item.isImportant})}
                    onDelete={() => dispatch(deleteItem(index))}
                    onEdit={() => setState({...state, itemToEdit: item, isFormVisible: true})}
                />
            }/>
            <ImageButton
                containerStyle={styles.addButton}
                source={Images.plus}
                onPress={() => setState({...state, isFormVisible: true})}
            />
            <AddEditTodoItemModal
                data={state.itemToEdit}
                isVisible={state.isFormVisible}
                onCancel={() => setState({...state, isFormVisible: false})}
                onSubmit={onSubmitItem}
            />
        </View>
    );
};

export default Home;