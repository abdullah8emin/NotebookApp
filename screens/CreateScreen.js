import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import NotebookPostForm from '../components/NotebookPostForm'
import { Context } from '../context/NotebookContext';

export default function CreateScreen() {
  const { addNotebookPost } = useContext(Context);
  return <NotebookPostForm onSubmit={(title, content) => {addNotebookPost(title, content) }} isEditable={false} />;
}

const styles = StyleSheet.create({})