import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {Button} from 'antd';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`

`;

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Button type="primary">Click Me</Button>
      </Content>
    </Container>
  );
};

export default Home;