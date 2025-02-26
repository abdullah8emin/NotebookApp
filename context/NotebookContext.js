import React from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";


const NotebookContext = React.createContext();

const notebookReducer = (state, action) => {
    switch (action.type) {
        case 'get_notebookposts':
            return action.payload;
        case 'add_notebookpost':
            return [...state,
            {
                id: Math.floor(Math.random() * 10000),
                title: action.payload.title,
                content: action.payload.content,
            }];
        case 'delete_notebookpost':
            return state.filter((item) => item.id !== action.payload);
        case 'edit_notebookpost':
            return state.map((item) => {
                return item.id === action.payload.id ? action.payload : item
            });
        default:
            return state;
    }
}

const addNotebookPost = (dispatch) => {
    return async (title, content) => {
        await jsonServer.post('/notebookPosts', { title, content });
    }
}

const deleteNotebookPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/notebookPosts/${id}`);
        dispatch({ type: 'delete_notebookpost', payload: id })
    }
}

const editNotebookPost = (dispatch) => {
    return async (id, title, content) => {
        await jsonServer.put(`/notebookPosts/${id}`, { title, content });
        dispatch({ type: 'edit_notebookpost', payload: { id, title, content } });
    }
}

const getNotebookPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/notebookPosts');
        dispatch({ type: 'get_notebookposts', payload: response.data });
    }
}

//? Birden fazla child da data paylaşımını sağlar.

export const { Context, Provider } = createDataContext(notebookReducer, { addNotebookPost, deleteNotebookPost, editNotebookPost, getNotebookPosts }, []);