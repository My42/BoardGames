import React from 'react';
import { Button as Btn } from 'antd';
import Proptypes from 'prop-types';
import colors from '../../const/colors';

const defaultStyle = {
  backgroundColor: colors.third,
  borderColor: colors.secondary,
  color: colors.fourth,
};

// eslint-disable-next-line react/prop-types
const Button = ({ children, style, ...props }) => (
  <Btn block style={{ ...defaultStyle, ...style }} {...props}>{children}</Btn>
);

Button.propTypes = { style: Proptypes.shape({ }) };

Button.defaultProps = { style: { } };

export default Button;
