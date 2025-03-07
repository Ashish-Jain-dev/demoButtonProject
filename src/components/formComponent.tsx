import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface FormData {
  name: string;
  email: string;
}

interface FormComponentProps {
  onSubmit: (data: FormData) => void; // Accepts a function to handle form data
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>(''); // Specify state type
  const [email, setEmail] = useState<string>(''); // Specify state type

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    onSubmit({ name, email }); // Call onSubmit with the input data
    setName(''); // Clear the name input
    setEmail(''); // Clear the email input
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-2">
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on input change
        required
        className="mb-2"
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update state on input change
        required
        className="mb-2"
      />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default FormComponent;