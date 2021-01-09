import React , {Component} from 'react'
import classes from './Modal.module.css'
import AuxComponent from "../../../hoc/AuxComponent/auxComponent";
import Backdrop from '../Backdrop/Backdrop'

class Modal  extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.show !==this.props.show){
            return true;
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Modal] WillUpdate')
    }

    render() {
        return(
            <AuxComponent>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{transform:this.props.show ? 'translateY(0)': 'translateY(-100vh)', opacity:this.props.show ? '1':'0'}}>
                    {this.props.children}
                </div>
            </AuxComponent>
        )
    }
}

export default Modal;