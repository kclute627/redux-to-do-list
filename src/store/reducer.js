import * as actions from './actions';

let initialState = {
    taskList: [],
}


const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actions.ADD_WORD:
        let newArr = [...state.taskList, action.value]
        return{
            ...state,
            taskList: newArr,
        } 
        default:
        return state
    }

    
   
}



export default reducer