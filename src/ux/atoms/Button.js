import React from 'react';
import { Button as Btn } from 'antd';
import colors from '../../const/colors';

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => (
  <Btn color={colors.fourth} {...props}>{children}</Btn>
);

export default Button;
