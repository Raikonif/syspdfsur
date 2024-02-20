import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <p className="font-bold">{"Imagenes Drag And Drop"}</p>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>{'Drag "n" drop some files here, or click to select files'}</p>
      )}
    </div>
  );
}

export default MyDropzone;
