

import React, { createContext, useContext, useReducer, useCallback } from 'react';

//init state
const initialState = {
  articles: [],
  featuredArticle: null,
  loading: false,
  error: null,
  currentCategory: null,
  page: 1,
  hasMore: true
};


const ActionTypes = {
  SET_ARTICLES: 'SET_ARTICLES',
  APPEND_ARTICLES: 'APPEND_ARTICLES',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_CATEGORY: 'SET_CATEGORY',
  RESET_PAGE: 'RESET_PAGE',
  INCREMENT_PAGE: 'INCREMENT_PAGE',
  SET_HAS_MORE: 'SET_HAS_MORE'
};


function newsReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        featuredArticle: action.payload[0] || null
      };
    case ActionTypes.APPEND_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, ...action.payload]
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ActionTypes.SET_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
        page: 1,
        articles: []
      };
    case ActionTypes.RESET_PAGE:
      return {
        ...state,
        page: 1
      };
    case ActionTypes.INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case ActionTypes.SET_HAS_MORE:
      return {
        ...state,
        hasMore: action.payload
      };
    default:
      return state;
  }
}

//Context
const NewsContext = createContext(null);

//provider component
export function NewsProvider({ children }) {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  const actions = {
    setLoading: useCallback((loading) => {
      dispatch({ type: ActionTypes.SET_LOADING, payload: loading });
    }, []),

    setError: useCallback((error) => {
      dispatch({ type: ActionTypes.SET_ERROR, payload: error });
    }, []),

    setArticles: useCallback((articles) => {
      dispatch({ type: ActionTypes.SET_ARTICLES, payload: articles });
    }, []),

    appendArticles: useCallback((articles) => {
      dispatch({ type: ActionTypes.APPEND_ARTICLES, payload: articles });
    }, []),

    setCategory: useCallback((category) => {
      dispatch({ type: ActionTypes.SET_CATEGORY, payload: category });
    }, []),

    incrementPage: useCallback(() => {
      dispatch({ type: ActionTypes.INCREMENT_PAGE });
    }, []),

    setHasMore: useCallback((hasMore) => {
      dispatch({ type: ActionTypes.SET_HAS_MORE, payload: hasMore });
    }, [])
  };

  return (
    <NewsContext.Provider value={{ state, actions }}>
      {children}
    </NewsContext.Provider>
  );
}


export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};