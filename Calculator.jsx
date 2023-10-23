import React, { Component } from 'react'
import './Calculatorstyle.css'

class Calculator extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        res:''
        
      }
    }

    displayOutput=()=>{
        if(this.state.res!=null){
            this.setState({
                res:eval(this.state.res)
            })
        }
    }
  render() {
    return (
      <div className='Calculator' >
        <div>
           <input type='text' value={this.state.res} className='inpt'/>
            <table className='tbl'cellPadding={'3'}>
                <tr className='num'>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'7'})}}>7</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'8'})}}>8</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'9'})}}>9</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'/'})}}>/</button></td>
                </tr>
                <tr className='num'>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'4'})}}>4</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'5'})}}>5</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'6'})}}>6</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'*'})}}>*</button></td>
                </tr>
                <tr className='num'>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'1'})}}>1</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'2'})}}>2</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'3'})}}>3</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'-'})}}>-</button></td>
                </tr>
                <tr className='num'>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'0'})}}>0</button></td>
                    <td><button onClick={()=>{this.setState({res:''})}}>ac</button></td>
                    <td><button onClick={()=>{this.setState({res:this.state.res+'+'})}}>+</button></td>
                    <td><button onClick={this.displayOutput}>=</button></td>
                </tr>
            </table>
            </div>
        </div>
    )
  }
}
export default Calculator
