import React, { Component } from 'react'
import PropTypes from 'prop-types';
import store from '../Store.js';
import * as Actions from '../Actions.js';


class CounterPannel extends Component {
    constructor(props) {
        console.log('constructor...' + props.caption)
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
    render() {
        const currentVal = this.state.value
        const { caption } = this.props;
        return (
            <div className="counter-wrapper">
                <button className="minus" onClick={this.minusNum}>
                    -
                </button>
                <span className="number">
                    {currentVal}
                </span>
                <button className="plus" onClick={this.addNum}>
                    +
                </button>
                <span>{caption}</span>
            </div>
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

CounterPannel.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};


CounterPannel.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
};
export default CounterPannel