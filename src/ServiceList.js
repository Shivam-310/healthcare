import React from 'react';

const ServiceList = ({ services, deleteService, editService }) => {
  return (
    <div>
      <h2>Service List</h2>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <strong>{service.name}</strong> - {service.description} (${service.price})
              <button onClick={() => editService(service)}>Edit</button>
              <button onClick={() => deleteService(service.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
