import React, { Component } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { addWord } from '../store/taskActions';


class ToDoAdder extends Component {

    state = {
        word: '',
        btn: true
    }


    btnHandler=()=>{
        if(this.state.word.length > 1){
            this.setState({btn: false})
        }

        
    }

   

    
    currentTaskHandler =(event)=>{
        let cur = event.target.value;

        this.setState({
          word: cur,
        })
    
      }

    render (){

       
        console.log('Local State', this.state.word)
        

        return(
            <div className='toDoList'>
                <input 
                className = 'inputField'
                value = {this.state.word}
                type='text'
                onChange = {this.currentTaskHandler}></input>
                
                <button
                
                className ='btn'
                onClick={()=>{this.props.addWord(this.state.word); this.setState({word: ''})}}>Add To List</button>
                
            </div>
        )
    }
}


const mapStateToProps = (state)=> {

    return{
        word: state.taskList
        

    }
}

const mapDispatchToProps = (dispatch)=>{

    return{
        addWord: (result)=>dispatch(addWord(result))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoAdder);