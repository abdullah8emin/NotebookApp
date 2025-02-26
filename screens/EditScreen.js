import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/NotebookContext'
import NotebookPostForm from '../components/NotebookPostForm';

export default function EditScreen({ route }) {
    const { state, editNotebookPost } = useContext(Context);
    const id = route.params.id
    const item = state.find((item) => item.id === route.params.id);

    return (
        <NotebookPostForm onSubmit={(title, content) => { editNotebookPost(id, title, content) }} initialValues={{ title: item.title, content: item.content }} 
        isEditable={true}/>
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