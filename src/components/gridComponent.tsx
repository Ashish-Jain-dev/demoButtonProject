import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface User {
  id: number;
  name: string;
  email: string;
}

interface GridComponentProps {
  data: User[]; // Accepts an array of User objects
}

const GridComponent: React.FC<GridComponentProps> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Paper elevation={3} className="p-4">
            <h3>{item.name}</h3>
            <p>{item.email}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridComponent;