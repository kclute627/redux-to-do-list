import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeWord } from '../store/taskActions'


class List extends Component {
    

    render(){

       
        
        console.log('store', this.props)
        return(
            <div className='list'>
                <ul>
                    {
                        this.props.words.map(cur => {
                            return(
                                <li key={cur.id}
                                onClick = {()=>this.props.remove(cur.value, cur.id)}>
                                {cur.value}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        words: state.taskList,
        

    }
}

const mapDispatchToProps = (dispatch)=>{

    return{
        remove: (result, id)=>dispatch(removeWord(result, id)),
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); 