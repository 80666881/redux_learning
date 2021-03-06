import React,{Component} from 'react'
import '../style/ControlPannel.css'
import CounterPannel from './CounterPannel.js'
import Summary from './Summary.js'

class ControlPannel extends Component{
    render(){
        return(
            <div className='control-pannel'>
            {/* 注意这里的value不能用字符串，要用{number} */}
                <CounterPannel caption="First" value={10}></CounterPannel>
                <CounterPannel caption="Second" value={100}></CounterPannel>
                <Summary></Summary>
                <button onClick={()=>this.forceUpdate()}>force repaint</button>
            </div>
        )
    }
}

export default ControlPannel