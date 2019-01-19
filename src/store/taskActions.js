import * as actions from './actions';





export const addWord = (word) => {
    
    return{
        type: actions.ADD_WORD,
        value: word,
    }
}


