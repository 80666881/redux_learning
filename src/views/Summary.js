import React,{Component} from 'react'
// import store from '../Store'
import { connect } from 'react-redux';

class Summary extends Component{
    render(){
        return(
            <div className="summary">
                <hr/>
                <span>{this.props.sum} </span>
            </div>
        )
    }
}

function mapStateToProps(state){
    let sum = 0
    for(let key in state){
       sum+=state[key]
    }
    return {sum}
}

export default connect(mapStateToProps)(Summary)