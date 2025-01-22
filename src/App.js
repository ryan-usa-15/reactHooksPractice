import logo from './logo.svg';
import './App.css';

import Products from './Products';

import Rating from './Rating';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Button } from 'react-bootstrap';

import JumbotronComponent from './JumbotronComponent';
import GitHub from './GitHub';
import UserForm from './UserForm';

function formatName(user){
  return user.firstName + ' '
}


function App() {

  const isValid = true;

  return (
    <div>
      <GitHub></GitHub>


      
    </div>
  );
}

export default App;





