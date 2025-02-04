import React from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
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
                return item.id === action.payload.id ? action.payload : item
            });
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content) => {
        await jsonServer.post('/blogPosts', { title, content });
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content) => {
        await jsonServer.put(`/blogPosts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        dispatch({ type: 'get_blogposts', payload: response.data });
    }
}

//? Birden fazla child da data paylaşımını sağlar.

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);