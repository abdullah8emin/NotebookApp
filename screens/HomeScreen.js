import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function HomeScreen() {
    const { state, addBlogPost } = useContext(Context);
    return (
        <View>

            <Button title='Ekle' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 20,
        width: 40,
        backgroundColor: 'black',
    },
})