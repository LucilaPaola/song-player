import { useEffect, useState } from "react";

export default function ModalPlayer({ url, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); 
  };

  const embedUrl = url.replace("watch?v=", "embed/");

  return (
    <div className={`modal-overlay ${visible ? "visible" : ""}`}>
      <div className="modal-content">
        <button
          onClick={handleClose}
          className="modal-close"
          aria-label="Cerrar"
        >
          ❌
        </button>
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}