import { useState } from "react";

export default function AddSongForm({ songs, onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url) return alert("Completa todos los campos");

    const exists = songs.some(song => song.url === url);
    if (exists) return alert("La canción ya fue agregada");

    onAdd({ name, url, plays: 0 });
    setName("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la canción"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de YouTube"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
