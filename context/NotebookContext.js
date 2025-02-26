import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";

const STORAGE_KEY = "notebookPosts";

// Reducer function
const notebookReducer = (state, action) => {
    switch (action.type) {
        case "get_notebookposts":
            return action.payload;
        case "add_notebookpost":
            return [...state, action.payload];
        case "delete_notebookpost":
            return state.filter((item) => item.id !== action.payload);
        case "edit_notebookpost":
            return state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        default:
            return state;
    }
};

// Load posts from AsyncStorage
const getNotebookPosts = (dispatch) => {
    return async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            const posts = jsonValue ? JSON.parse(jsonValue) : [];
            dispatch({ type: "get_notebookposts", payload: posts });
        } catch (error) {
            console.error("Error loading posts:", error);
        }
    };
};

// Add a new post
const addNotebookPost = (dispatch) => {
    return async (title, content) => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            const posts = jsonValue ? JSON.parse(jsonValue) : [];

            const newPost = {
                id: Math.floor(Math.random() * 10000),
                title,
                content,
            };

            const updatedPosts = [...posts, newPost];
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));

            dispatch({ type: "add_notebookpost", payload: newPost });
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };
};

// Delete a post
const deleteNotebookPost = (dispatch) => {
    return async (id) => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            const posts = jsonValue ? JSON.parse(jsonValue) : [];

            const updatedPosts = posts.filter((item) => item.id !== id);
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));

            dispatch({ type: "delete_notebookpost", payload: id });
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
};

// Edit a post
const editNotebookPost = (dispatch) => {
    return async (id, title, content) => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            const posts = jsonValue ? JSON.parse(jsonValue) : [];

            const updatedPosts = posts.map((item) =>
                item.id === id ? { id, title, content } : item
            );

            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
            dispatch({ type: "edit_notebookpost", payload: { id, title, content } });
        } catch (error) {
            console.error("Error editing post:", error);
        }
    };
};

// Create Context and Provider
export const { Context, Provider } = createDataContext(
    notebookReducer,
    { addNotebookPost, deleteNotebookPost, editNotebookPost, getNotebookPosts },
    []
);
