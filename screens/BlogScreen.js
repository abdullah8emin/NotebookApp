import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';

export default function BlogScreen({ route }) {
    const { state } = useContext(Context);
    const item = state.find((item)=> item.id === route.params.id);
    return (
        <View style={{ flex: 1 }}>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.textContent}>{item.content}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'green',
    },
    textContent: {
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        flex: 1,
        textAlignVertical: 'top',
        marginHorizontal: 5,
        fontStyle: 'italic',
        fontSize:16
    },
})