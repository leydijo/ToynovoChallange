import React from 'react';
import Form from './Form';



class Confirmation extends React.Component{
    render(){
        
        return(
           
          
                <div className="container">
                   <div class="card text-white bg-info mb-3"  >
                    <div class="card-header">Gracias</div>
                    <div class="card-body">
                      
                        <p class="card-text">Gracias  {this.state}</p>
                        <p class="card-text">Te enviaremos un correo a : {this.fullname}</p>
                        
                    </div>
                    </div>

                   
                </div>
           
        )
    }
   
}

export  default Confirmation;