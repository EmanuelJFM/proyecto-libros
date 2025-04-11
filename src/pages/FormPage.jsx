import React from 'react';
import '@/assets/scss/form.scss';

function FormPage() {
  return (
    <div className='form-page'>
      <div className="form">
        <h1 className='form-title'>Añade un nuevo libro</h1>
        <div className="form-group">
          <label htmlFor="title" className='form-label'>Ingrese el título del libro</label>
          <div className="form-input">
            <input type="text" id="title" placeholder='Ej: La maldad de la bondad' className='input' />
            <i class='bx bx-book-alt'></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="author">Ingrese el autor del libro</label>
          <div className="form-input">
            <input type="text" id="author" placeholder='Ej: Romeo Santos' className='input' />
            <i class='bx bxs-user'></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Ingrese el número de la categoría del libro</label>
          <div className="form-input">
            <input type="text" id="category" placeholder='Ej: 1' className='input' />
            <i class='bx bx-category'></i>
          </div>
        </div>
        <button type="submit" className='form-btn'>Agregar libro</button>
      </div>
    </div>
  );
}

export default FormPage;