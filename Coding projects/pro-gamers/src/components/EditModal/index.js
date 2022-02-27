import React, { useState, useEffect } from 'react';
import Modal from '../Modal';

const availableCategories = [
  { label: 'Financial', value: 'financial' },
  { label: 'Technology', value: 'technology' },
  { label: 'World', value: 'world' },
];

const EditModal = ({ title, isOpen, close, onSubmit, newsItem }) => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const { title, shortDescription, category } = newsItem;
    setTitle(title);
    setShortDescription(shortDescription);
    setCategory(category);
  }, [newsItem]);

  return (
    <Modal
      title={ title }
      isOpen={ isOpen }
      close={ close }
      onSubmit={ () => {
        const id = newsItem ? newsItem.id : 0;
        onSubmit({ id, title, shortDescription, category })
      } }>
      <form action="" className="form form-horizontal">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={ title }
            onChange={ e => this.onInputChange(e) }
            className="form-control"
            name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="shortDescription">Short description</label>
          <input
            type="text"
            value={ shortDescription }
            onChange={ e => this.onInputChange(e) }
            className="form-control"
            name="shortDescription" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="category" value={ category } className="form-control" onChange={ e => this.onInputChange(e) }>
            { availableCategories.map(ac => <option key={ ac.value } value={ ac.value }>{ ac.label }</option>) }
          </select>
        </div>
      </form>
    </Modal>
  )
}

export default EditModal;
