import React from 'react';
import AuxComponent from '../../hoc/auxComponent'
import classes from './Layout.module.css'

const layout = (props)=>(
    <AuxComponent>
        <div className={classes.Content}>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </AuxComponent>
);

export default layout;