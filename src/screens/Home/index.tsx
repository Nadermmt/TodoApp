import React, {useState} from 'react';
import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';
import {useDispatch, useSelector} from "react-redux";
import {
    addItem,
    changePriority,
    clearList,
    completeItem,
    deleteItem,
    duplicateItem,
    editItem
} from '../../redux/Slices';
import {TodoItemCard} from '../../components';
import {AddEditTodoItemModal} from '../../modals';
import {ImageButton, TextButton} from '../../components/buttons';
import {Colors, Images} from '../../assets';
import {SortItems} from "../../utils";

const Home = ({ navigation }) => {
    const todoList = useSelector(state => state.todo.list);
    const [state, setState] = useState({
        isFormVisible: false,
        itemToEdit: null,
        searchText: '',
        sortByIndex: 0
    });
    const dispatch = useDispatch();

    const renderSortItem = ({item, index}) => {
        return (
            <TextButton
                containerStyle={[styles.sortItemContainer, state.sortByIndex === index && {backgroundColor: Colors.grey, borderColor: Colors.grey}]}
                label={item.label}
                onPress={() => setState({...state, sortByIndex: index})}
            />
        )
    };

    const onLogout = async () => {
        await AsyncStorage.setItem('isUserLoggedIn', JSON.stringify(false))
        dispatch(clearList());
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

    const getDisplayList = () => {
        let list = todoList.filter(item => item.desc.includes(state.searchText))
        switch (state.sortByIndex) {
            case 0:
                list = list.sort((a, b) => Number(b.isImportant) - Number(a.isImportant));
                break;
            case 1:
                list = list.sort(function(a,b){
                    return new Date(b.createdDate) - new Date(a.createdDate);
                });
                break;
            case 2:
                list = list.sort(function(a,b){
                    return new Date(b.completedDate) - new Date(a.completedDate);
                });
                break;
        }
        return list;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.logoutButtonContainer}
                onPress={onLogout}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
            {todoList.length > 0 && <View>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={text => setState({...state, searchText: text})}
                    placeholder={'Filter list'}
                />
                <Text style={styles.sortTitle}>Sort By</Text>
                <FlatList
                    data={SortItems}
                    renderItem={renderSortItem}
                    horizontal
                />
                <Text style={styles.numberOfItemsLeft}>{todoList.filter(item => (item.isCompleted !== true && item.desc.includes(state.searchText))).length + " items left"}</Text>
            </View>}
            <FlatList data={getDisplayList()}
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