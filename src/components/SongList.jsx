import { useState } from "react";
import SongItem from "./SongItem";

export default function SongList({ songs, onPlay, onDelete }) {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const filtered = songs
    .filter(song => song.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sorted ? b.plays - a.plays : 0);

  return (
    <section>
      <input
        type="text"
        placeholder="Buscar canción"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSorted(!sorted)}>
        {sorted ? "Orden original" : "Ordenar por reproducciones"}
      </button>

      <ul>
        {filtered.map(song => (
          <SongItem
            key={song.url}
            song={song}
            onPlay={onPlay}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
