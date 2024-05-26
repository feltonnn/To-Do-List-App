import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddToDo({ submitHandler }) {
 
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                placeholder = 'new todo...'
                style = {styles.input} 
                onChangeText={changeHandler}
            />
            <Button
                onPress = {() => submitHandler(text)} 
                title = 'Add todo'
                color='coral' />
        </View>
    ) 
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
