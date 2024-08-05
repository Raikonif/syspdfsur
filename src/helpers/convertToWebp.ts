async function convertToWebp(file: File): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to convert image to WebP"));
              return;
            }
            // resolve(URL.createObjectURL(blob));
            const webpFile = new File(
              [blob],
              `${file.name.split(".").slice(0, -1).join(".")}.webp`,
              { type: "image/webp" },
            );
            resolve(webpFile);
          },
          "image/webp",
          1.0,
        ); // Puedes ajustar la calidad aquí (0 a 1)
      };
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

export default convertToWebp;
