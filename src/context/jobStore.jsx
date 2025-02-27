import React from 'react'
import PropTypes from 'prop-types'

const initialState = {
    jobId: '',
    content: ''
    };

export const ContextJobStore = React.createContext(initialState);

function initialize(initialState){
    return {
        jobId: initialState.jobId,
        content: initialState.content
        }
    }

function reducer(state, action){
    switch(action.type){
        case 'JOB':
            return {
            ...state,
            jobId: action.jobId,
            content: action.content
            };
        default:
            return state
        }
}

export function ContextJobStoreProvider(props){

        const [state,dispatch] = React.useReducer(reducer, initialState, initialize);
        const value = {state, dispatch};
        return(
            <ContextJobStore.Provider value={value}>
                {props.children}
                </ContextJobStore.Provider>
                )
                }

ContextJobStoreProvider.propTypes = {
    children: PropTypes.node
}