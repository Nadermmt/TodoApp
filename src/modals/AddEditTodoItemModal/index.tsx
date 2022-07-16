import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import {ImageChoices} from '../../utils';
import {ImageButton, TextButton} from '../../components/buttons';
import {Colors} from '../../assets';
import {styles} from './styles';

const AddEditTodoItemModal = ({ data, isVisible, onCancel, onSubmit }) => {
    const [state, setState] = useState({
        imageSelectedIndex: 0,
        data: data || {
            pic: ImageChoices[0].source
        }
    });

    useEffect(() => {
        if (isVisible) {
            if (data) {
                setState({
                    imageSelectedIndex: ImageChoices.findIndex(item => item.source === data.pic),
                    data: data
                })
            } else {
                setState({
                    imageSelectedIndex: 0,
                    data: {
                        pic: ImageChoices[0].source
                    }
                })
            }
        }
    }, [isVisible])

    const onSelectImage = (index) => {
        setState({
            ...state,
            imageSelectedIndex: index,
            data: {
                ...data,
                pic: ImageChoices[index].source
            }
        })
    }

    const imageItem = ({item, index}) => {
        return (
            <ImageButton
                containerStyle={[styles.imageItem, index === state.imageSelectedIndex && {borderWidth: 1, borderColor: Colors.black}]}
                source={item.source}
                onPress={() => onSelectImage(index)}
            />
        )
    }
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <TouchableOpacity
                            style={styles.cancelButtonContainer}
                            onPress={onCancel}>
                            <Text>cancel</Text>
                        </TouchableOpacity>
                        <FlatList
                            style={styles.imagesList}
                            horizontal
                            data={ImageChoices}
                            renderItem={imageItem}
                        />
                        <TextInput
                            style={styles.desc}
                            onChangeText={text => setState({...state, data: {...state.data, desc: text}})}
                            value={state.data.desc}
                        />
                        <TextButton
                            containerStyle={styles.submitButtonContainer}
                            onPress={() => onSubmit(state.data)}
                            label={data ? 'Edit' : 'Add'}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default AddEditTodoItemModal;