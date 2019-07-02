import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../ux/atoms/Button';

const Step2 = ({ onClick }) => (
  <Button onClick={onClick} style={{ width: '25%' }}>I&apos;m Ready</Button>
);

Step2.propTypes = { onClick: PropTypes.func.isRequired };

export default Step2;
