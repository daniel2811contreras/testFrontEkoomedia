const initialState = {
    items: [],
    select:'',
    name:'',
    email:'',
    phone:'',
    age: 0,
    message:[],
    validate: false
  }
  
  const ServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
        return {
          ...state,
          items: action.items
        }
        case 'SET_SELECT':
        return {
          ...state,
          select: action.select
        }
        case 'SET_FOMR':
        return {
          ...state,
          name: action.name,
          email: action.email,
          phone: action.phone, 
          age: action.age
        }
        case 'SET_MESSAGE':
        return {
          ...state,
          message: action.message,
          validate: action.validate
        }
      default:
        return state
    }
  }
  
  export default ServiceReducer;
  