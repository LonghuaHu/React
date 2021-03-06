import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { IsConstructor } from 'es-abstract';
import { Component } from 'react';

class App extends Component {

  constructor(prop) {
      super(prop);

      this.state = {
        dishes: DISHES
      };
  }

  render() {
    return (
      <div className="App">
        < Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;
