import React from 'react';
import Routes from './Routes';
import {Link } from 'react-router-dom';



class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            fullname: '',
            email: ''
        }

        this.formChange = this.formChange.bind(this);
    
    }

    formChange (e){
        const name =  e.target.name;
        const value =  e.target.value;
        this.setState ({
            [name]: value
        })
    };

   /* updateForm = () => {
        alert ('Su nombre es:' + this.state.fullname + ' ' + 'Le enviaremos un correo a: '+ this.state.email) ;
    }*/
    
    render(){
       
        return(
            <div className="container" >
            
                <form   className="form">
                    <div className="form-group">
                        <input 
                        type="text"
                        name="fullname"
                        className="form-control" 
                        value={this.state.fullname} 
                        onChange={this.formChange} 
                        placeholder="Ingrese Nombre" 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email"
                        name="email"
                        className="form-control"  
                        onChange={this.formChange}  
                        value={this.state.email} 
                        placeholder="Ingrese Email" 
                        />
                    </div>
                   
               
                      
                    <Link to = "confirmation"> Enviar </Link>
                         
                </form>      
            
                     
                     
             
               
       
              
            </div>

        )
    }
}

export  default Form;