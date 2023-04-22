import { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'image.jpg';

    img.onload = function () {
      // Define the desired canvas and image size
      const canvasWidth = img.width / 2;
      const canvasHeight = img.height / 2;
      const imageWidth = canvasWidth;
      const imageHeight = canvasHeight;

      // Set the canvas dimensions to the desired size
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // Draw the image on the canvas at the desired size
      ctx.drawImage(img, 0, 0, imageWidth, imageHeight);

      // Define the transformation functions
      let totalRotation = 0;
      let flipHorizontal = false;
      let flipVertical = false;
      let mirrorHorizontal = false;
      let mirrorVertical = false;

      function rotateImage(degrees) {
        // add the desired rotation angle to the total rotation
        totalRotation = (totalRotation + degrees) % 360;

        // Save the current canvas state
        ctx.save();

        // Clear the canvas
        ctx.clearRect(
          -canvas.width / 2,
          -canvas.height / 2,
          canvas.width,
          canvas.height
        );

        // Translate the canvas origin to the center of the image
        ctx.translate(canvas.width / 2, canvas.height / 2);

        // Rotate the canvas by the total rotation angle
        ctx.rotate((totalRotation * Math.PI) / 180);

        // Draw the image on the canvas
        ctx.drawImage(img, -img.width / 2, -img.height / 2);

        // Restore the canvas state
        ctx.restore();
      }

      function flipImage() {
        flipHorizontal = !flipHorizontal;
        flipVertical = !flipVertical;

        // Save the current canvas state
        ctx.save();

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Scale the canvas horizontally or vertically
        ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);

        // Draw the image on the canvas
        ctx.drawImage(
          img,
          flipHorizontal ? -img.width : 0,
          flipVertical ? -img.height : 0
        );

        // Restore the canvas state
        ctx.restore();
      }

      function mirrorImage() {
        mirrorHorizontal = !mirrorHorizontal;
        mirrorVertical = !mirrorVertical;

        // Save the current canvas state
        ctx.save();

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Scale the canvas horizontally or vertically by -1
        ctx.scale(mirrorHorizontal ? -1 : 1, mirrorVertical ? -1 : 1);

        // Draw the image on the canvas
        ctx.drawImage(
          img,
          mirrorHorizontal ? -img.width : 0,
          mirrorVertical ? -img.height : 0
        );

        // Restore the canvas state
        ctx.restore();
      }

      // Add event listeners to the buttons
      document
        .getElementById('rotate-left')
        .addEventListener('click', function () {
          rotateImage(-90);
        });
      document
        .getElementById('rotate-right')
        .addEventListener('click', function () {
          rotateImage(90);
        });
      document
        .getElementById('flip-horizontal')
        .addEventListener('click', flipImage);
      document
        .getElementById('flip-vertical')
        .addEventListener('click', flipImage);
      document
        .getElementById('mirror-horizontal')
        .addEventListener('click', mirrorImage);
      document
        .getElementById('mirror-vertical')
        .addEventListener('click', mirrorImage);
    };
  }, []);

  function rotateLeft() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    rotateImage(-90);
  }

  function rotateRight() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    rotateImage(90);
  }

  function flipHorizontal() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    flipImage(true, false);
  }

  function flipVertical() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    flipImage(false, true);
  }

  function mirrorHorizontal() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    mirrorImage(true, false);
  }

  function mirrorVertical() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    mirrorImage(false, true);
  }

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <button id="rotate-left" onClick={rotateLeft}>
        Rotate Left
      </button>
      <button id="rotate-right" onClick={rotateRight}>
        Rotate Right
      </button>
      <button id="flip-horizontal" onClick={flipHorizontal}>
        Flip Horizontal
      </button>
      <button id="flip-vertical" onClick={flipVertical}>
        Flip Vertical
      </button>
      <button id="mirror-horizontal" onClick={mirrorHorizontal}>
        Mirror Horizontal
      </button>
      <button id="mirror-vertical" onClick={mirrorVertical}>
        Mirror Vertical
      </button>
    </div>
  );
}

export default Canvas;
