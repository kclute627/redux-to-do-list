import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addWord, keyGenerator } from '../store/taskActions';


class ToDoAdder extends Component {

    state = {
        word: '',
        
    }


    

   

    
    currentTaskHandler =(event)=>{
        let cur = event.target.value;

        this.setState({
          word: cur,
        })
    
      }
      
    


    render (){
       

       
       
        console.log('Local State', this.state.word)
        console.log('Local State', this.props)
        
       let key = () =>{
            return Math.random()*10000;
        } 

      

        return(
            <div className='toDoList'>
                <div>
                    <input 
                    className = 'inputField'
                    value = {this.state.word}
                    type='text'
                    onChange = {this.currentTaskHandler}></input>
                </div>
                <div>
                <button
                disabled={this.state.word.length <= 0 ? true : false}
                className ='btn'
                onClick={()=>{this.props.addWord(this.state.word, key()); this.setState({word: ''})}}>Add To List</button>
                </div>
                
                
                
            </div>
        )
    }
}


const mapStateToProps = (state)=> {

    return{
        word: state.taskList,
        
        
        

    }
}

const mapDispatchToProps = (dispatch)=>{

    return{
        addWord: (result, id)=>dispatch(addWord(result, id)),
        
        

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoAdder);