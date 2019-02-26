import React, { Component } from 'react'
import store from '../Store.js';
import * as Actions from '../Actions.js';
import { connect } from 'react-redux'


class Counter extends Component {
    render() {
        const { caption, onIncrement, onDecrement, value } = this.props;
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


function mapStateToProps(state, ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
