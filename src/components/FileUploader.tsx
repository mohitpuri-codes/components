import { useRef, type HTMLAttributes } from "react";

interface FileUploaderProps<T> {
  accept: string;
  maxSize: number;
  onUpload: () => void;
  FileWrapper: React.FC<HTMLAttributes<T>>;
}

function FileUploader<T>({
  accept,
  maxSize,
  onUpload,
  FileWrapper,
}: FileUploaderProps<T>) {
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

  function handleFileWrapperClick() {
    console.log("click");

    inputRef.current?.click();
  }
  return (
    <>
      <FileWrapper onClick={handleFileWrapperClick} />
      <input
        type="file"
        placeholder="Upload File"
        accept={accept}
        ref={inputRef}
        hidden
        onChange={handleFileChange}
      />
    </>
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
