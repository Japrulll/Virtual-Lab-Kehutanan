import { useState, useRef, useEffect } from "react";

export default function Simulation() {
  const [distance, setDistance] = useState("");
  const [angle, setAngle] = useState("");
  const [height, setHeight] = useState(null);
  const canvasRef = useRef(null);

  const calculate = () => {
    const d = parseFloat(distance);
    const a = parseFloat(angle);
    if (isNaN(d) || isNaN(a)) return;
    const h = Math.tan((a * Math.PI) / 180) * d;
    setHeight(h.toFixed(2));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // tanah
    ctx.fillStyle = "#654321";
    ctx.fillRect(0, 280, 400, 20);

    // pohon
    if (height) {
      const treeHeight = Math.min(height * 5, 250);
      ctx.fillStyle = "#8B4513";
      ctx.fillRect(190, 300 - treeHeight, 40, treeHeight);
      ctx.fillStyle = "#228B22";
      ctx.beginPath();
      ctx.arc(210, 300 - treeHeight, 30, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [height]);

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border-2 border-green-600 rounded mb-4"
      />
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Jarak (m)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="border p-2 rounded w-32"
        />
        <input
          type="number"
          placeholder="Sudut (°)"
          value={angle}
          onChange={(e) => setAngle(e.target.value)}
          className="border p-2 rounded w-32"
        />
        <button
          onClick={calculate}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Hitung
        </button>
      </div>
      {height && (
        <p className="text-lg text-green-800 font-semibold">
          Tinggi pohon: {height} meter
        </p>
      )}
    </div>
  );
}
