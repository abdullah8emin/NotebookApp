import React from "react";
import createDataContext from "./createDataContext";


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,
            {
                id: Math.floor(Math.random() * 10000),
                title: action.payload.title,
                content: action.payload.content,
            }];
        case 'delete_blogpost':
            return state.filter((item) => item.id !== action.payload);
        case 'edit_blogpost':
            return state.map((item) => {
                return item.id === action.payload.id ? action.payload : item});
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content) => {
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    }
}

//? Birden fazla child da data paylaşımını sağlar.

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, []);