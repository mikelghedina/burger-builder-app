import React, {Component} from 'react'
import AuxComponent from '../../hoc/auxComponent'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component{

    render() {
        return (
            <AuxComponent>
                <Burger/>
                <div>Build Control</div>
            </AuxComponent>
        );
    }
}

export default BurgerBuilder;