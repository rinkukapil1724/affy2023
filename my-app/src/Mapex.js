import { Component } from "react";
class Mapex extends Component
{
    constructor()
    {
        super();
        this.state={
           products: [
            {'pid':111,'pname':'sachin','pcost':10000},
            {'pid':222,'pname':'kapil','pcost':20000},
            {'pid':333,'pname':'sankit','pcost':30000},
            {'pid':444,'pname':'sunny','pcost':40000}],
            sub:'ReactJS'
        }
    }

    render()
    {
        return(
           <>
              <h1>{this.state.sub}</h1>

              {
                this.state.products.map(                    
                    (element,index)=>(
                    <p>
                       pid:{element.pid},
                       pname:{element.pname},
                       pfee:{element.pcost}
                    </p>
                    )
                )
              }

           </>

        )
    }
}

export default Mapex;