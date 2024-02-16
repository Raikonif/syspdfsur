import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
    imageUploader: {
      upload: (file: File) => {
        return new Promise((resolve, reject) => {
          // Simulate a delay for the upload process
          setTimeout(() => {
            // For demo purposes, generate a URL for the uploaded image
            const url = "https://via.placeholder.com/150";
            resolve(url);
          }, 2000);
        });
      },
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} modules={modules} formats={formats} />
    </div>
  );
}

export default TextEditor;
