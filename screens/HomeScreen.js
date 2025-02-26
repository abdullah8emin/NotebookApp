import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/NotebookContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const { state, addNotebookPost, deleteNotebookPost, getNotebookPosts } = useContext(Context);
    const navigation = useNavigation();
    useEffect(()=>{
        getNotebookPosts();

        const listener = navigation.addListener('focus', ()=>{
            getNotebookPosts();
        });
        return ()=>{
            listener.remove();
        };
    }, []);
    return (
        <View style={{ flex: 1 }}>


            <FlatList
                data={state}
                keyExtractor={(notebookPost) => notebookPost.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Notebook', { id:item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.text}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteNotebookPost(item.id)}>
                                    <FontAwesome style={styles.icon} name="trash-o" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }} />


            {/* < View style={{ bottom: 10 }} >
                <TouchableOpacity onPress={addNotebookPost} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>EKLE</Text>
                </TouchableOpacity>
            </View > */}

        </View >
    )
}

const styles = StyleSheet.create({
    // buttonStyle: {
    //     position: 'fixed',
    //     backgroundColor: 'green',
    //     width: '40%',
    //     height: 30,
    //     left: '30%',
    //     top: 5,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontWeight: 'bold',
    //     fontSize: '20px',
    //     borderRadius: 10
    // },
    // buttonText: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontSize: 15
    // },
    icon: {
        flex: 1,
        right: 5,
        top: 5
    },
    text: {
        flex: 1,
        fontSize: 17,
        margin: 3
    },
    row: {
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        height: 35,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})