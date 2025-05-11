import { useState } from "react";
import ModalPlayer from "./ModalPlayer";

export default function SongItem({ song, onPlay, onDelete }) {
  const [open, setOpen] = useState(false);

  const handlePlay = () => {
    onPlay(song.url);
    setOpen(true);
  };

  return (
    <li style={{ marginBottom: "1em" }}>
      <strong>{song.name}</strong><br />
      Reproducciones: {song.plays}
      <br />
      <button onClick={handlePlay}>▶ Reproducir</button>
      <button onClick={() => onDelete(song.url)}>🗑 Eliminar</button>
      {open && (
        <ModalPlayer url={song.url} onClose={() => setOpen(false)} />
      )}
    </li>
  );
}
