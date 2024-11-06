import React from "react";

const FileUpload = ({ acceptType='.html', setHtml }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setHtml(result);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept={acceptType} onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
