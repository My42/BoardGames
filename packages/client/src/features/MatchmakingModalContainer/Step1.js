import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Step1 = () => (
  <MainDiv>
    <Spin size="large" />
  </MainDiv>
);

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5em;
`;

export default Step1;
