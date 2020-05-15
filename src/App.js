import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from './containers/Checkout';

class App extends React.Component {

  render() {
    return (
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Layout>
        </div>
  );
  }
}
export default App;
