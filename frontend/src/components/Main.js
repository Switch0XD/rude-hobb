import React from 'react';
import styled, { css } from 'styled-components';
import Land from '../assets/images/land1.jpg';

const Landing = styled.div`
  height: 90vh;
  background: url(${Land}) no-repeat center center/cover;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  h1 {
    font-size: 6rem;
  }
  .cnt {
    margin-left: 40px;
  }
  @media all and (max-width: 1000px) {
    h1 {
      font-size: 4rem;
    }
    .cnt {
      margin-left: 30px;
    }
  }
`;
const Button = styled.button`
  background: transparent;
  width: 100px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  margin: 0.5em 1em 1em 0em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.primary};
      color: white;
    `}

  @media all and (max-width: 1000px) {
    width: 80px;
    height: 40px;
    font-size: 1.3rem;
  }
`;

const Main = () => (
  <Landing>
    <div className="cnt">
      <h1>Are you pretty dumb at budgeting ?</h1>
      <h1>Just Sign Up</h1>
      <Button>Sign Up</Button>
      <Button primary>Sign in</Button>
    </div>
  </Landing>
);

export default Main;
