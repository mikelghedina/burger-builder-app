import React, {Component} from 'react';
import AuxComponent from '../../hoc/auxComponent'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler =()=>{
        this.setState((prevState)=>{
           return {showSideDrawer: !prevState.showSideDrawer};
        });
    };
    render() {
        return (
            <div>
                <AuxComponent>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </AuxComponent>
            </div>
        );
    }
}
export default Layout;