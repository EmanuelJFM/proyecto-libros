import React from 'react';
import '@/assets/scss/card.scss';

function Card({ id, title, author, imageUrl, description }) {
    return (
        // 2. AJUSTE: Se usan strings normales para className porque la importación NO es un Módulo CSS.
        <article className="card">
            <img
                src={imageUrl || 'https://via.placeholder.com/250x200.png?text=No+Image'}
                alt={`Portada de ${title}`}
                className="cardImage"
                loading="lazy"
            />
            <div className="cardContent">
                <h3 className="cardTitle">{title || 'Título no disponible'}</h3>
                <p className='cardNumber'>{id || 'Id no ecnontrado'}</p>
                <p className="cardAuthor">Por: {author || 'Autor desconocido'}</p>
                {description && (
                    <p className="cardDescription">
                        {description.length > 100 ? `${description.substring(0, 97)}...` : description}
                    </p>
                )}
            </div>
        </article>
    );
}

// La definición de PropTypes sigue siendo válida y recomendable
import PropTypes from 'prop-types';
Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
};

export default Card;