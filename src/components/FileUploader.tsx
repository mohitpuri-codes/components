import { useRef } from "react";

interface FileUploaderProps {
  accept: string;
  maxSize: number;
  onUpload: () => void;
}

function FileUploader({ accept, maxSize, onUpload }: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const acceptableArray = accept.split(",");

  function handleFileChange() {
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current?.files[0].size > maxSize
    ) {
      alert("File is too big");
      inputRef.current.value = "";
    }
    if (inputRef.current && inputRef.current.files) {
      const filename = inputRef.current.files[0].name.split(".");

      if (!acceptableArray.includes(filename[filename.length - 1])) {
        alert("Invalid format");
        inputRef.current.value = "";
      }
    } else {
      onUpload();
    }
  }
  return (
    <input
      type="file"
      placeholder="Upload File"
      accept={accept}
      ref={inputRef}
      onChange={handleFileChange}
    />
  );
}

export default FileUploader;
{
  /* <FileUploader 
  accept=".jpg,.png" 
  maxSize={5 * 1024 * 1024} 
  onUpload={(files) => console.log(files)} 
/> */
}
