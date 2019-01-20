import React, { Component } from 'react'
import { connect } from 'react-redux';


class ComplededItems extends Component {

    render(){

        return(
            <div>
                <h2>Completed Items</h2>
                <ul>
                    {this.props.done.map(cur=>{
                        return(
                            <li key={cur.id}>
                                {cur.value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        done: state.completedItems


    }
}

export default connect(mapStateToProps)(ComplededItems)