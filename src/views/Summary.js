import React,{Component} from 'react'
import store from '../Store'

class Summary extends Component{
    constructor(props){
        super(props)
        this.getOwnState = this.getOwnState.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state= this.getOwnState()
    }
    getOwnState(){
        let storeState = store.getState()
        let sum = 0
        for(let key in storeState){
           sum+=storeState[key]
        }
        return {sum}
    }
    onChange(){
        this.setState(this.getOwnState());
    }
    componentDidMount(){
        store.subscribe(this.onChange)
    }
    componentWillUnmount(){
        store.unsubscribe(this.onChange)
    }
    render(){
        return(
            <div className="summary">
                <hr/>
                <span>{this.state.sum} </span>
            </div>
        )
    }
}

export default Summary