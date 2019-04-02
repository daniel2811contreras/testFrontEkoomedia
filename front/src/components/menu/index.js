/* import */
import React from 'react';
import {connect} from 'react-redux';
import { listItem, setSelect } from '../../actions';
import './Menu.css';
/* Class */
class Menu extends React.Component {
    componentDidMount(){
        this.props.list();
    }
    render() {
        const { items, select, active } = this.props;
        return (
            <nav className='menu'>
                <div className='cont_menu'>
                    <ul>
                    {items.map((data,i)=>
                        <li 
                          key={`${data.id}-${i}`} 
                          onClick={ () => select(data.name)}
                          className={active===data.name? 'active' : '' }
                        >{data.name}</li>
                    )}
                    </ul>
                </div>
            </nav>
        )
    }

}

var disToProps = (state, ownProps) => {
  return {
    items:state.main.service.items,
    active:state.main.service.select,
  };
}

var mapDisToProps = (state, ownProps) => {
  return {
    list: () => listItem(),
    select: item => setSelect(item)
   };
 }
export default connect(disToProps, mapDisToProps())(Menu);
