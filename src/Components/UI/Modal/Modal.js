import React from 'react'
import classes from './Modal.module.css'
import AuxComponent from "../../../hoc/auxComponent";
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) =>(
    <AuxComponent>
        <Backdrop clicked={props.modalClosed}/>
            <div className={classes.Modal}
                 style={{transform:props.show ? 'translateY(0)': 'translateY(-100vh)', opacity:props.show?'1':'0'}}>
                {props.children}
            </div>
    </AuxComponent>
);

export default modal;