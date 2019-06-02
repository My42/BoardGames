import React from 'react';
import { Button as Btn } from 'antd';
import colors from '../../const/colors';

const style = {
  backgroundColor: colors.third,
  borderColor: colors.secondary,
  color: colors.fourth,
};

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => (
  <Btn block style={style} {...props}>{children}</Btn>
);

export default Button;
