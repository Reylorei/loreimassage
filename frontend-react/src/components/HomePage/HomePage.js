import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import logo from '../../statics/LOGO.png';
import './HomePage.css'; // Asegúrate de que la ruta sea correcta



function HomePage() {
  let navigate = useNavigate(); // Usa useNavigate en lugar de useHistory

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/language-selection'); // Usa navigate en lugar de history.push
    }, 2000); // Cambia después de 2 segundos

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, [navigate]);

  return (
    <div className="home-page flex justify-center items-center h-screen">
      <img src={logo} alt="Logo" className="w-1/2 max-w-xs fadeIn" />      
    </div>
  );
}

export default HomePage;
