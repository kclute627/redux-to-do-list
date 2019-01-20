import * as actions from './actions';





export const addWord = (word, id) => {
    
    return{
        type: actions.ADD_WORD,
        value: word,
        id,
    }
}

export const removeWord = (word, id)=>{

    return{
        type: actions.REMOVE_WORD,
        value: word,
        id,
    }
}


