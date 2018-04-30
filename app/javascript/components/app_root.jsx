
import React from 'react';
import {
  BrowserRouter,
  StaticRouter,
  Route,
  Link
} from 'react-router-dom';

import Items from './items';
import PurchaseOrders from './purchase_orders';
import PurchaseOrder from './purchase_order';
import { AppRoutes } from 'support/appRoutes';

class Router extends React.Component {
  renderRouter = () => {
    if(typeof window !== 'undefined') {
      return(
        <BrowserRouter>
          {this.props.children}
        </BrowserRouter>
      );
    } else {
      return(
        <StaticRouter location={this.props.path} context={{}}>
          {this.props.children}
        </StaticRouter>
      );
    }
  }

  render() {
    return(this.renderRouter());
  }  
}

class AppRoot extends React.Component {

  render() {
    const MenuLink = ({ label, to, activeOnlyWhenExact}) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match}) => (
        <li className={'nav-item' + (match ? ' active' : '')}>
          <Link className="nav-link" to={to}>{label}</Link>
        </li>
      )}/>
    );

    return (
      <Router path={this.props.path}>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Route path={AppRoutes.root} exact children={() => (
              <Link className="navbar-brand" to={AppRoutes.root}>Home</Link>
            )}/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <MenuLink to={AppRoutes.purchaseOrders} label='Purchase Orders'/>
                <MenuLink to={AppRoutes.items} label='Items'/>
              </ul>
            </div>
          </nav>
          <Route exact path="/" component={PurchaseOrders}/>
          <Route exact path="/welcome" component={PurchaseOrders}/>
          <Route exact path="/purchase_orders" component={PurchaseOrders}/>
          <Route exact path="/purchase_orders/:id" component={PurchaseOrder}/>
          <Route exact path="/items" component={Items}/>
        </div>
      </Router>
    );
  }
}

export default AppRoot;
