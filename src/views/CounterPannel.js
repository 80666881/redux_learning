import React, { Component } from 'react'
import store from '../Store.js';
import * as Actions from '../Actions.js';


class Counter extends Component {
    render() {
        const {caption, onIncrement, onDecrement, value} = this.props;
        return (
            <div className="counter-wrapper">
                <button className="minus" onClick={onDecrement}>
                    -
                </button>
                <span className="number">
                    {value}
                </span>
                <button className="plus" onClick={onIncrement}>
                    +
                </button>
                <span>{caption}</span>
            </div>
        )
    }
}



class CounterContainer extends Component{
    constructor(props) {
        super(props)
        this.addNum = this.addNum.bind(this)
        this.minusNum = this.minusNum.bind(this)
        this.onChange = this.onChange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)
        this.state = this.getOwnState()
    }
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }
    onChange(){
        this.setState(this.getOwnState())
    }

    render(){
        const value = this.state.value
        const { caption } = this.props;
        return (
            <Counter 
                value={value} 
                caption={caption}
                onIncrement={this.addNum}
                onDecrement={this.minusNum}
            ></Counter>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
    }
    addNum() {
        store.dispatch(Actions.increment(this.props.caption))
    }
    minusNum() {
        store.dispatch(Actions.decrement(this.props.caption))
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
}
export default CounterContainer
