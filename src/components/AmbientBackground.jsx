import { useEffect, useRef } from "react";
import "./AmbientBackground.css";

/*
  O fundo "de água": 3 círculos gigantes, coloridos e muito desfocados
  (filter: blur(80px) no CSS) que ficam derivando devagar com @keyframes.
  É isso que os painéis de vidro (backdrop-filter) desfocam e refletem —
  sem esses blobs, o vidro não teria nada de interessante atrás dele.

  Bônus: os blobs também reagem de leve ao movimento do mouse (parallax),
  usando variáveis CSS --mx e --my atualizadas via JS.
*/
export default function AmbientBackground() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      wrap.style.setProperty("--mx", x.toFixed(3));
      wrap.style.setProperty("--my", y.toFixed(3));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="ambient" ref={wrapRef} aria-hidden="true">
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
      <div className="noise" />
    </div>
  );
}
