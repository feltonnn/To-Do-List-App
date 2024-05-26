import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddToDo from './components/addtodo'

export default function App() {

  const [toDos, setToDos] = useState([
    {text: 'Learn React', key: 1},
    {text: 'Read book', key: 2},
    {text: 'Buy dinner', key: 3},
  ])

  const pressHandler = (key) => {
    setToDos((prevToDos) => {
      return prevToDos.filter(todo => todo.key != key)
    });
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setToDos((prevToDos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevToDos
        ];
      })
    } else {
      Alert.alert('Oops!', 'To-dos must be over 3 characters long.', [
        {text: 'Understood', onPress: () => console.log('Alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
      console.log('Keyboard dismissed');
    }}>
       <View style = {styles.container}>
        {/* import header from header.js */}
        <Header />
        
        <View style = {styles.content}>
          <AddToDo submitHandler = { submitHandler } />

          <View style = {styles.list}>
            <FlatList
              data = {toDos}
              renderItem={({item}) => (
                <TodoItem item = {item} pressHandler = {pressHandler}/>
              )}
            />
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
