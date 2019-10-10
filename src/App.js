import React, { Component } from 'react';
import styled from 'styled-components';

import { Home } from './pages';
import { ToastMessage, PromptConfirm } from './components/core';
import { Header, Footer } from './components/containers'
import { GAInit, GAPageView } from './lib/ga';

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

  componentDidMount() {
    GAInit();
    GAPageView(ROUTES.HOME);
  }

  render() {

    return (
      <div className='App'>
        <PromptConfirm />
        <ToastMessage />
        <StyledBox>
          <Header />
          <Home />
          <Footer />
        </StyledBox>
      </div>
    );
  }
}

export default App;