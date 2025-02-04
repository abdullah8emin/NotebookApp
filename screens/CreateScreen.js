import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext';

export default function CreateScreen() {
  const { addBlogPost } = useContext(Context);
  return <BlogPostForm onSubmit={(title, content) => {addBlogPost(title, content) }} isEditable={false} />;
}

const styles = StyleSheet.create({})