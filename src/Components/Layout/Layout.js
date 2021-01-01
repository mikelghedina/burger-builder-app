import React from 'react';
import AuxComponent from '../../hoc/auxComponent'

const layout = (props)=>(
    <AuxComponent>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </AuxComponent>
);

export default layout;