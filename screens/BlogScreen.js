import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BlogScreen({ route }) {
    const { item } = route.params;
    return (
        <View>
            <Text>{item.id}-{item.title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})