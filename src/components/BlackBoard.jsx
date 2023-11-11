import React, { useEffect, useRef, useState } from "react";

const BlackBoard = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [current, setCurrent] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);

    const onResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        clearCanvas();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const clearCanvas = () => {
    if (context) {
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }
  };

  const startDrawing = (e) => {
    setDrawing(true);
    setCurrent({ x: e.clientX, y: e.clientY });
  };

  const draw = (e) => {
    if (!drawing || !context) return;

    context.beginPath();
    context.moveTo(current.x, current.y);
    context.lineTo(e.clientX, e.clientY);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.stroke();

    setCurrent({ x: e.clientX, y: e.clientY });
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  return (
    <div className="flex items-center justify-center  canvas-container shadow-[#a21caf]">
      <canvas
        className=" canvas-class md:w-[30rem]  md:h-[25rem] w-[6rem] h-[11rem] sm:m-3 rounded-lg "
        ref={canvasRef}
        style={{
          border: "1px solid #ccc",
          backgroundColor: "black",
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      ></canvas>
    </div>
  );
};

export default BlackBoard;
