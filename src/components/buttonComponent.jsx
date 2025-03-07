import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} className="m-2">
      {label}
    </Button>
  );
};

export default ButtonComponent;