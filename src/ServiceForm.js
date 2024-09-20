import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, updateService, editableService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (editableService) {
      setName(editableService.name);
      setDescription(editableService.description);
      setPrice(editableService.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [editableService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && description && price) {
      const newService = {
        id: editableService ? editableService.id : Date.now(),
        name,
        description,
        price
      };

      if (editableService) {
        updateService(newService);
      } else {
        addService(newService);
      }

      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <div>
      <h2>{editableService ? 'Edit Service' : 'Add New Service'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">
          {editableService ? 'Update Service' : 'Add Service'}
        </button>
      </form>
    </div>
  );
};

export default ServiceForm;
