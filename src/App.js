import React, { useState } from 'react';
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const App = () => {
  const [services, setServices] = useState([]);
  const [editableService, setEditableService] = useState(null);

  // Add a new service
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  // Update an existing service
  const updateService = (updatedService) => {
    setServices(services.map(service =>
      service.id === updatedService.id ? updatedService : service
    ));
    setEditableService(null);
  };

  // Delete a service
  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Handle edit button click
  const editService = (service) => {
    setEditableService(service);
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services</h1>
      
      <ServiceForm 
        addService={addService}
        updateService={updateService}
        editableService={editableService}
      />
      
      <ServiceList 
        services={services} 
        deleteService={deleteService}
        editService={editService}
      />
    </div>
  );
};

export default App;
