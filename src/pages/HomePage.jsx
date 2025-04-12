import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import '@/assets/scss/home.scss';
const DUMMY_BOOKS = [
  { id: 'b1', title: 'React - Guía Completa', author: 'Profesor React', imageUrl: 'https://via.placeholder.com/250x200.png?text=React+Book', description: 'Aprende React desde cero hasta avanzado con ejemplos prácticos y claros.' },
  { id: 'b2', title: 'Vite Rápido', author: 'Evan You (Casi)', imageUrl: 'https://via.placeholder.com/250x200.png?text=Vite+Book', description: 'Descubre el poder de Vite para un desarrollo frontend ultra rápido y moderno.' },
  { id: 'b3', title: 'SCSS para Diseñadores', author: 'Ana CSS', imageUrl: 'https://via.placeholder.com/250x200.png?text=SCSS+Style', description: 'Domina los superpoderes de CSS con SCSS y lleva tus diseños al siguiente nivel.' },
  { id: 'b4', title: 'React Avanzado', author: 'Profesor React', imageUrl: 'https://via.placeholder.com/250x200.png?text=React+Advanced', description: 'Explora patrones, hooks personalizados, manejo de estado complejo y optimización en React.' },
  { id: 'b5', title: 'JavaScript Esencial', author: 'Brendan Eich (Inspirado)', imageUrl: 'https://via.placeholder.com/250x200.png?text=JS+Basics', description: 'Fundamentos clave del lenguaje que impulsa la web moderna.' },
];
function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allBooks, setAllBooks] = useState([]); // Inicia vacío
  const [filteredBooks, setFilteredBooks] = useState([]); // Inicia vacío
  const [loading, setLoading] = useState(true); // Para mostrar mensaje de carga
  const [error, setError] = useState(null);     // Para mostrar errores
  useEffect(() => {
    const fetchBooksFromApi = async () => {
      setLoading(true); // Indicar que estamos cargando
      setError(null);   // Limpiar errores previos

      try {
        const response = await fetch(`https://localhost:7266/api/books`); // Cambia la URL según tu API
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // *** Debugging: Muestra los datos recibidos en la consola ***
        console.log('Datos recibidos de la API:', data);
        setAllBooks(data);
        setFilteredBooks(data); // Mostrar todos los libros inicialmente

      } catch (err) {
        console.error("Error al obtener los libros:", err);
        setError(`No se pudieron cargar los libros. Verifica la conexión y la consola. (${err.message})`);
        setAllBooks([]); // Dejar vacío en caso de error
        setFilteredBooks([]);
      } finally {
        setLoading(false); // Dejar de mostrar el mensaje de carga
      }
    };

    // Llamar a la función para que se ejecute
    fetchBooksFromApi();

  }, []);

  // 4. Efecto para filtrar cuando cambia searchTerm o allBooks
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim(); // Quita espacios y convierte a minúscula
    if (lowerCaseSearchTerm === '') {
      setFilteredBooks(allBooks); // Muestra todos si no hay búsqueda
    } else {
      const filtered = allBooks.filter(book =>
        // Busca similitud en título O autor (case-insensitive)
        (book.title && book.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (book.author && book.author.toLowerCase().includes(lowerCaseSearchTerm))
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, allBooks]); // Re-ejecuta si cambia la búsqueda o la lista base

  // 5. Manejador para actualizar el estado del input
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div className='home-page'><p>Cargando libros...</p></div>;
  }

  if (error) {
    // Muestra el error de forma clara
    return <div className='home-page'><p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p></div>;
  }
  return (
    <div className='home-page'>
      <div className="home-search">
        <h1 className='home-title'>
          Bienvenido
        </h1>
        <span className='home-subtitle'>
          ¿Que deseas buscar hoy?
        </span>
        <div className="home-input">
          <input
            type="text"
            placeholder='Buscar libro por título o autor...'
            className='input'
            value={searchTerm}
            onChange={handleInputChange} // Llama al manejador al cambiar
          />
          <i class='bx bx-search-alt'></i>
        </div>
      </div>
      <section className="results-container" aria-live="polite">
        {/* Puedes mostrar un título condicional */}
        {searchTerm && (
          <h2 className="results-title">
            {filteredBooks.length > 0
              ? `Resultados para "${searchTerm}"`
              : `No hay resultados para "${searchTerm}"`}
          </h2>
        )}

        {/* Contenedor de la cuadrícula de tarjetas */}
        <div className="cards-grid">
          {filteredBooks.length > 0 ? (
            // Mapea los libros filtrados al componente Card
            filteredBooks.map((book) => (
              <Card
                key={book.id} // ¡Key única y estable es crucial!
                id={book.id}
                title={book.title}
                author={book.author}
                imageUrl={book.imageUrl}
                description={book.description}
              />
            ))
          ) : (
            // Mensaje alternativo si no hay libros (y no es la carga inicial)
            allBooks.length > 0 && !searchTerm && <p>Explora nuestra colección.</p> // Podrías mostrar algo si no hay búsqueda
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;