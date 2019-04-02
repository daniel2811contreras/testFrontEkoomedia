/* import */
import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import { doValidate, setForm, setMessage } from '../../actions';
import './Form.css';
/* Class */
class Form extends React.Component {
    render() {
        const { 
            select, 
            name, 
            email, 
            phone, 
            age,
            message, 
            validar, 
            setForm, 
            validate,
            setMessage } = this.props;
        return (
            <div 
            style={{
                visibility: select !== '' ? 'visible' : 'hidden'
            }}
            className="cont"
            >
                <h1>Hola, bienvenido, sabemos que quieres viajar en un {select} por 
                favor diligencia el siguiente formulario:</h1>
                <div className="form">
                    <input 
                        type='text' 
                        placeholder='Nombre' 
                        name='name' 
                        value={name} 
                        onChange={ (e) => setForm(
                            {[e.target.name]:`${e.target.value}`,
                            email,phone,age})}  
                    />
                    <input 
                        type='text' 
                        placeholder='E-mail' 
                        name='email' 
                        value={email} 
                        onChange={ (e) => setForm({[e.target.name]:`${e.target.value}`,
                        name,phone,age})} 
                    />
                    <input 
                        type='text' 
                        placeholder='Celular' 
                        name='phone' 
                        value={phone} 
                        onChange={ (e) => setForm({[e.target.name]:`${e.target.value}`,
                        name,email,age})} 
                    />
                    <input 
                        type='number' 
                        placeholder='Edad' 
                        name='age' 
                        value={age} 
                        onChange={ (e) => setForm({[e.target.name]:`${e.target.value}`,
                        name,email,phone})} 
                    />
                    <button onClick={() =>{ 
                        validar({name, email, phone, age}) 
                        setTimeout(()=> message.length > 0 ?
                        setMessage({message:[],validate:false}):('') ,4000)   
                        }}
                        >Enviar</button>   
                </div>
                <div className={`cont_alert ${message.length > 0 ? 'animate' : ''}`}>
                    {message.map((data,i)=>(
                        <div key={i} className={`box ${validate?'success':'alert'}`}>
                            <div>{data.mensaje}</div>
                        </div>
                    ))}
                </div> 
            </div>
        )
    }

}
var disToProps = (state, ownProps) => {
  return {
    select:state.main.service.select,
    name:state.main.service.name,
    email:state.main.service.email,
    phone:state.main.service.phone,
    age:state.main.service.age,
    message:state.main.service.message,
    validate:state.main.service.validate,
  };
}

var mapDisToProps = (state, ownProps) => {
  return {
    validar: (data) => doValidate(data),
    setForm: (element) => setForm(element),
    setMessage: (element) => setMessage(element)
   };
 }
export default connect(disToProps, mapDisToProps())(Form);
