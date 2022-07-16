import React, {useState} from 'react';
import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {addItem, changePriority, completeItem, deleteItem, duplicateItem, editItem} from '../../redux/Slices';
import {TodoItemCard} from "../../components";
import {AddEditTodoItemModal} from "../../modals";
import {ImageButton} from "../../components/buttons";
import {Images} from "../../assets";

const Home = ({ navigation }) => {
    const todoList = useSelector(state => state.todo.list);
    const [state, setState] = useState({
        isFormVisible: false,
        itemToEdit: null,
        searchText: ''
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
            <TextInput
                style={styles.searchInput}
                onChangeText={text => setState({...state, searchText: text})}
                placeholder={'Filter list'}
            />
            {todoList.length > 0 && <Text style={styles.numberOfItemsLeft}>{todoList.filter(item => (item.isCompleted !== true && item.desc.includes(state.searchText))).length + " items left"}</Text>}
            <FlatList data={todoList.filter(item => item.desc.includes(state.searchText))}
                      renderItem={({item, index}) =>
                          <TodoItemCard
                              data={item}
                              onComplete={() => dispatch(completeItem(index))}
                              onPriorityChange={() => dispatch(changePriority(index))}
                              onDelete={() => dispatch(deleteItem(index))}
                              onEdit={() => setState({...state, itemToEdit: item, isFormVisible: true})}
                              onDuplicate={() => dispatch(duplicateItem(item))}
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