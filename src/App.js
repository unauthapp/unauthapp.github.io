import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Footer, Header } from './components/containers';
import { PromptConfirm, ToastMessage } from './components/core';
import { COLORS, ROUTES } from './constants';
import { Home, Privacy } from './pages';

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
  @media only screen and (max-width: 900px) {
     margin: 20px;
  };
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