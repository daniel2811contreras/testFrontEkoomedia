import Service from '../api';
let service=new Service();
/* list company success */
export const setSelect = select => dispatch => dispatch(doSetSelect(select));

export const listItem = () => 
    dispatch => service.listItem().then( response => {
        const datos = response.data.data;
        return dispatch( doListItem(datos));
    });
 
export const doValidate = data => dispatch => {
     service.doValidate(data).then((response)=>{
        const datos = response.data;
        console.log(datos.data);
        dispatch( datos.reset ? doSetForm({name:'', email:'', phone:'', age:0}) : () => '');
        dispatch(doMessage({message:datos.mensaje, validate:datos.reset}));
      });
  
    }

 export const setMessage = ({message, validate}) => dispatch => dispatch(doMessage({message, validate}));


export const setForm = ({ name, email, phone, age }) => dispatch => 
    dispatch(doSetForm({ name, email, phone, age }));

const doSetSelect = select => ({ type:'SET_SELECT', select });

const doListItem = data => ({ type: 'SET_ITEMS', items: data });

const doSetForm = ({ name, email, phone, age }) => ({ type: 'SET_FOMR', name, email, phone, age });

const doMessage = ({message,validate}) => ({ type: 'SET_MESSAGE', message, validate });