import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>My To-Do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
    }
});