import * as actions from './actions';

let initialState = {
    taskList: [],
    completedItems: [],
}


const reducer = (state = initialState, action)=>{

    switch(action.type){
        case actions.ADD_WORD:
        let newArr = [...state.taskList, 
            {value: action.value,
             id: action.id}]
             
        return{
            ...state,
            taskList: newArr,
        } 
        case actions.REMOVE_WORD:
        
       let newTaskList = [...state.taskList.filter(el=> el.id !== action.id)]
       let newCompletedList = [...state.completedItems,{
           value: action.value,
           id: action.id
       }]
       
        return{
            ...state,
            taskList: newTaskList,
            completedItems: newCompletedList
           
        }
        default:
        return state
    }

    
   
}



export default reducer