import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/homeStyle.css'

const Home = () =>{
  return(
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
    <div>
      This is the Home Page
    </div>
  </CSSTransitionGroup>
  )
}

export default Home;
