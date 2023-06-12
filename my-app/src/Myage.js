import { Component } from 'react'
class Myage extends Component
{
    constructor()
    {
        super();
        this.state={
            age:22
        }
    }

     ageHandler=()=>{
       this.setState
        {
            age:this.state.age+1
        }
       
     }

    render()
    {
        return(
           <div>
               <h1>I am Student {this.state.age} Years old.</h1>
               <button onClick={this.ageHandler}>Next Year Age</button>
           </div>
        )
    }
}

export default Myage;
