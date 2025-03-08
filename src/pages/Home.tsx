import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const {isAuthenticated} = useAuth()
  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 dark:bg-purple-800 text-white text-center py-16 px-4 sm:px-6 rounded">
        <h1 className="text-4xl sm:text-5xl font-extrabold">Tu Puerta al conocimiento</h1>
        <p className="mt-4 text-base sm:text-lg">
        Encuentra todo tipo de cursos impartidos por profesores
        </p>
      </header>

      {/* Beneficios de la plataforma */}
      <section className="max-w-6xl mx-auto py-4 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          ¿Por qué unirte al programa?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Descubre las ventajas de registrarte en nuestra plataforma.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Beneficio 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🔍 Encuentra Oportunidades</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Accede a cursos exclusivos para usuarios registrados y filtra para encontrar el que te guste.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">📩 Recibe Notificaciones</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Sé el primero en enterarte de nuevos cursos.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">⭐ valora Los Cursos</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
              ponle una valoracion a los cursos para que mas personas accedan a aprender.
            </p>
          </div>
        </div>

{!isAuthenticated &&
        <Link
        to="/register"
        className="mt-10 inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
        ¡Regístrate Ahora!
        </Link>
} 
      </section>
    </div>
  );
}

export default Home;