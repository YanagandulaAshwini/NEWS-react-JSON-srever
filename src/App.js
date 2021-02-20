<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DashBoard from './components/Dashboard';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row'


function App () {
    return (<div className='main-content'>
      <Header/>
      <DashBoard/>
     <Footer/>
    </div>   
    );

  }
  

=======
import React from 'react';
import Dashboad from './Components/dashboad/Dashboad';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
     // call your components
    </div>
   
  }
}
>>>>>>> 81dd4860e7fe8e0482f157d9f605e8bcb1b9a129
export default App;
