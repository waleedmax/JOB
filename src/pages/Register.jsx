import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBoxAnimated from './ImageBoxAnimated';

const Wrapper = styled.div`
`;

//const { Component } = React
// const { render } = ReactDOM
// const { Motion, spring } = ReactMotion

class Register extends Component {
  componentWillMount() {
    this.setState({
      startFirstBoxAnimation: true,
      
    });
  }

  render() {
    const {
      startFirstBoxAnimation,
      startSecondBoxAnimation,
    } = this.state;

    return (
      <Wrapper>
        <ImageBoxAnimated
          image={'https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg'}
          width={1750}
          height={400}
          noOfRows={20}
          speed={50}
          startAnimation={startFirstBoxAnimation}
          onClick={() => this.setState({ startFirstBoxAnimation: !startFirstBoxAnimation })}
        />
         
      </Wrapper>
    );
  }
}




export default Register




