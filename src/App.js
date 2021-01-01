import './App.css';
import React, {Component} from "react/cjs/react.production.min";
import Layout from './Components/Layout/Layout'
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";


class App extends Component{
  render(){
    return (
        <div>
          <Layout>
            <BurgerBuilder/>
          </Layout>
        </div>
    );
  }

}

export default App;
