import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function BlogPostForm({ onSubmit, initialValues, isEditable }) {
    const navigation = useNavigation();
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setContent] = useState(initialValues ? initialValues.content : '')
    return (

        <View style={{ flex: 1 }}>
            <TextInput style={styles.textInputTitle} placeholder='Başlığı Giriniz:'
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput style={styles.textInputNote} placeholder='İçeriği giriniz:' multiline
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {onSubmit(title, content); navigation.pop();}}>
            {isEditable ? <Text style={styles.buttonText}>Güncelle</Text> : <Text style={styles.buttonText}>Kaydet</Text>}
            </TouchableOpacity>
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
    textInputTitle: {
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        textAlignVertical: 'top',
        marginHorizontal: 5,
        height: 50,
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: 'italic',
        borderWidth: 1,
    },
    textInputNote: {
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        flex: 1,
        textAlignVertical: 'top',
        marginHorizontal: 5,
        fontStyle: 'italic',
        borderWidth: 1,
    },
    buttonStyle: {
        position: 'fixed',
        backgroundColor: 'green',
        width: '40%',
        height: 30,
        left: '30%',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
})