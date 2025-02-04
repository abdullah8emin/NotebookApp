import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>


            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <TouchableOpacity onPress={()=> navigation.navigate('BlogScreen', {item})}>
                                <Text style={styles.text}>{item.title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <FontAwesome style={styles.icon} name="trash-o" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    )
                }} />


            <View style={{ bottom: 10 }} >
                <TouchableOpacity onPress={addBlogPost} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>EKLE</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        position: 'fixed',
        backgroundColor: 'green',
        width: '40%',
        height: 30,
        left: '30%',
        top: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
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
        justifyContent:'space-between',
        alignItems: 'center',
    },
})