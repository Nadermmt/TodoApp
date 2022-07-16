import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Images} from '../../../assets';
import {TodoItem} from '../../../utils';
import {ImageButton} from '../../buttons';

const TodoItemCard: React.FC<{data: TodoItem, onEdit, onComplete, onPriorityChange, onDelete}> = ({ data, onEdit, onComplete, onPriorityChange, onDelete }) => {
    return (
        <View style={styles.container}>
            <ImageButton
                containerStyle={styles.onCompleteContainer}
                source={data.isCompleted ? Images.check : null}
                onPress={onComplete}
            />
            <View style={styles.picContainer}>
                <Image
                    style={styles.pic}
                    source={data.pic}
                />
            </View>
            <Text style={styles.desc}>{data.desc}</Text>
            <ImageButton
                source={data.isImportant ? Images.filledStar : Images.emptyStar}
                onPress={onPriorityChange}
            />
            <ImageButton
                source={Images.edit}
                onPress={onEdit}
            />
            <ImageButton
                source={Images.bin}
                onPress={onDelete}
            />
        </View>
    );
};

export default TodoItemCard;