import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Privacy } from './pages';
import { ToastMessage, PromptConfirm } from './components/core';
import { Header, Footer } from './components/containers'

import { ROUTES, COLORS } from './constants';

import './App.css';



const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 100px);
  margin: 40px 40px;
  color: ${COLORS.PALETTE.PRIMARY_DARK};
  background-color: ${COLORS.PALETTE.WHITE};
  text-align: center;
  font-size: 45px;
  border: none;
  border-radius: 10px;
  overflow:hidden;
  box-shadow: 0 1px 30px ${COLORS.PALETTE.SHADOW};
  overflow-x: scroll;
  overflow-y: scroll;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <PromptConfirm />
          <ToastMessage />
          <StyledBox>
            <Header />
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.PRIVACY} component={Privacy} />
            </Switch>
            <Footer />
          </StyledBox>
        </div>
      </Router>
    );
  }
}

export default App;