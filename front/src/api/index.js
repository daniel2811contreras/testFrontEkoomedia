/* server */
import qs from 'qs';
import axios from 'axios';
/* class */
class Services {
  constructor() {

    let _header={
    };

    this.req = axios.create({
      baseURL: 'http://localhost:8013',
      headers: _header
    });
  }
    /* fetch login */
  listItem(){ return this.req.get('/mi-servicio/', qs.stringify()) };

  doValidate(data){
    return this.req.post('/form/validate/', qs.stringify(data)) 
  };
  
}

/* export */
export default Services;
