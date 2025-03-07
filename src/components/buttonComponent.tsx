import React from 'react';
import Button from '@mui/material/Button';

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick} className="m-2">
      {label}
    </Button>
  );
};

export default ButtonComponent;