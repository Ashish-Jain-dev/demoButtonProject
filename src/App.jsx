import React, { useEffect, useState } from 'react';
import GridComponent from 'C:/demoProject/projectDemo/src/components/gridComponent.jsx';
import ButtonComponent from 'C:/demoProject/projectDemo/src/components/buttonComponent.jsx';
// import FormComponent from '';
import FormComponent from 'C:/demoProject/projectDemo/src/components/formComponent.jsx';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleFormSubmit = (formData) => {
    console.log('Form Submitted:', formData);
    // You can add logic to update state or send to an API
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

export default App;