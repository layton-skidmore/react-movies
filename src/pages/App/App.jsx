import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { movies } from "../../data.js";
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage'; 
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'; 
import ActorListPage from '../ActorListPage/ActorListPage'; 

export default function App() {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user}/>
            <Routes>
              <Route path="/" element={<MoviesListPage movies={movies}/>} />
              <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
              <Route path="/actors" element={<ActorListPage movies={movies}/>} />
            </Routes>
          </>
          :
          <LoginPage updateUser={updateUser} /> 
      }
    </main>
  );
}