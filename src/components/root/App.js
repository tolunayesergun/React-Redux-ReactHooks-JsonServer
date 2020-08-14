import React from 'react';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import CartDetail from './../cart/CartDetail';
import Navi from '../navi/Navi';
import { Switch, Route } from 'react-router-dom';
import '../FontawsomeIcons';
import CreateOrUpdateProduct from '../products/CreateOrUpdateProduct';
import NotFound from './NotFound';


function App() {
  return (
    <div >
      <Container fluid>
        <Navi />
      </Container>
      <Container clas sName='mt-5'>
        <Switch>
          <Route exact path="/"  component={Dashboard}/>
          <Route exact path="/saveproduct/:productId"  component={CreateOrUpdateProduct}/>
          <Route exact path="/saveproduct"  component={CreateOrUpdateProduct}/>
          <Route exact path="/cart"  component={CartDetail} />
          <Route component={NotFound} />
        </Switch>
      </Container>



    </div>
  );
}

export default App;
