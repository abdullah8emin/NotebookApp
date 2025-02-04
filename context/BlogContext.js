import React from "react";
import createDataContext from "./createDataContext";


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 10000), title: 'Angular' }];
        case 'delete_blogpost':
            return state.filter((item)=> item.id !== action.payload)
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
}

//? Birden fazla child da data paylaşımını sağlar.

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);