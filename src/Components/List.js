import React, { Component } from 'react';
import { connect } from 'react-redux';


class List extends Component {

    keyGenerator = () =>{
        return Math.random()*10000;
    }

    render(){

        return(
            <div>
                <ul>
                    {
                        this.props.words.map(cur => {
                            return(
                                <li key={this.keyGenerator()}>
                                {cur}
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


export default connect(mapStateToProps)(List); 