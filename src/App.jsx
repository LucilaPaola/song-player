import { useEffect, useState } from "react";
import AddSongForm from "./components/AddSongForm";
import SongList from "./components/SongList";
import "./App.css";

export default function App() {
  const [songs, setSongs] = useState(() => {
    const saved = localStorage.getItem("songs");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("songs", JSON.stringify(songs));
  }, [songs]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const addSong = (newSong) => {
    setSongs(prev => [...prev, newSong]);
  };

  const incrementPlay = (url) => {
    setSongs(prev =>
      prev.map(song =>
        song.url === url ? { ...song, plays: song.plays + 1 } : song
      )
    );
  };

  const deleteSong = (url) => {
    setSongs(prev => prev.filter(song => song.url !== url));
  };

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>🎶 Reproductor de Canciones</h1>
      <AddSongForm songs={songs} onAdd={addSong} />
      <button onClick={() => setDarkMode(!darkMode)}>
        Modo {darkMode ? "Claro" : "Oscuro"}
      </button>
      <SongList songs={songs} onPlay={incrementPlay} onDelete={deleteSong} />
    </main>
  );
}
