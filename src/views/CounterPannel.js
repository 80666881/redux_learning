import React,{Component} from 'react'

class CounterPannel extends Component{
    constructor(props){
        console.log('constructor...'+props.caption)
        super(props)
        let caption = props.caption
        let currentVal = props.value
        this.addNum = this.addNum.bind(this)
        this.minusNum = this.minusNum.bind(this)
        this.state = {
            caption,
            currentVal
        }
    }
    componentWillMount(){
        console.log('componentWillMount...'+this.state.caption)
    }
    render(){
        console.log('render...'+this.state.caption)
        const currentVal = this.state.currentVal
        const {caption} = this.props;
        return(
            <div className="counter-wrapper">
                <button className="minus">
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
    componentDidMount(){
        console.log('componentDidMount...'+this.state.caption)
    }
    componentWillReceiveProps(nextProps){
        //更改state不会触发这个钩子，因为这个钩子是根据props来计算是否要更新state，
        //如果state再触发这个钩子，就造成死循环
        console.log('componentWillReceiveProps...'+this.state.caption)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate...'+this.state.caption)
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate...'+this.state.caption)
    }
    componentDidUpdate(){
        console.log('componentDidUpdate...'+this.state.caption)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount...'+this.state.caption)
    }

    addNum(){
        //true表示增加，false表示减少
        this.updateCount(true)
    }
    minusNum(){
        this.updateCount(false)
    }
    updateCount(isIncrement){
        const previousValue = this.state.currentVal
        const newVal = isIncrement?previousValue+1:previousValue-1
        this.setState({
            currentVal:newVal
        })
    }
}
// CounterPannel.propsType = {
//     caption:props.string.isrequired
// }

export default CounterPannel