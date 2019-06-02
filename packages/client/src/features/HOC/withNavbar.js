import React from 'react';
import { Layout } from 'antd';
import colors from '../../const/colors';
import Navbar from '../../ux/molecules/Navbar';

const { Header, Content } = Layout;

const headerStyle = {
  backgroundColor: colors.secondary,
  zIndex: 1,
  boxShadow: '0 1px 2px black',
  marginBottom: 15,
};

const contentStyle = { backgroundColor: colors.primary };

const withNavBar = Component => props => (
  <Layout style={{ backgroundColor: colors.primary }}>
    <Header style={headerStyle}>
      <Navbar {...props} />
    </Header>
    <Content style={contentStyle}>
      <Component {...props} />
    </Content>
  </Layout>
);

export default withNavBar;
