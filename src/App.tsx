import React, { useEffect, useState } from 'react';
import ButtonComponent from 'C:/demoProject/projectDemo/src/components/buttonComponent.jsx';

import FormComponent from 'C:/demoProject/projectDemo/src/components/formComponent.jsx';

import GridComponent from 'C:/demoProject/projectDemo/src/components/gridComponent.jsx';



interface User {
  id: number;
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]); // State to hold the fetched data

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data)); // Update state with fetched data
  }, []);

  const handleFormSubmit = (formData: { name: string; email: string }) => {
    console.log('Form Submitted:', formData); // Log submitted form data
    // Additional logic to handle form data can be added here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My MUI App with Tailwind</h1>
      <ButtonComponent label="Click Me" onClick={() => alert('Button Clicked!')} />
      <FormComponent onSubmit={handleFormSubmit} />
      <GridComponent data={data} />
    </div>
  );
};

export default Home; // Export the Home component