import { Component } from "react";

class Contact extends Component
{
 constructor()
 {
    super();
    this.state={
        name:'kapil chaurasiya',
        age:26,
        city:'gwalior'

    }

 }
 render(){
    return(
        <div>
             <marquee><h1> hello my name is{this.state.name} and i am {this.state.age} years old i live in{this.state.city}</h1></marquee>
          
        </div>
    )
 }
}
export default Contact;