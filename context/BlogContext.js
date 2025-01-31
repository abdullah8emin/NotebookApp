import React, { useReducer } from "react";
import createDataContext from "./createDataContext";


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Angular' }];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
}

//? Birden fazla child da data paylaşımını sağlar.

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);