import React from 'react';
import AuxComponent from '../../hoc/auxComponent'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props)=>(
    <AuxComponent>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </AuxComponent>
);

export default layout;