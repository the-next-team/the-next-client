import { useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadSvgImage from "../../../../../assets/images/svg/upload.svg";

const DropZone = () => {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return (
    <div>
      <div className="w-full text-center border-dashed border border-secondary-500 rounded-md py-[52px] flex flex-col justify-center items-center">
        {files.length === 0 && (
          <div {...getRootProps({ className: "dropzone" })}>
            <input className="hidden" {...getInputProps()} />
            <img src={uploadSvgImage} alt="" className="mx-auto mb-4" />
            {isDragAccept ? (
              <p className="text-sm text-slate-500 dark:text-slate-300 ">
                Drop the files here ...
              </p>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-300 f">
                Drop files here or click to upload.
              </p>
            )}
          </div>
        )}
        <div className="flex space-x-4">
          {files.map((file: any, i: number) => (
            <div key={i} className="flex-none mb-4">
              <div className="h-[300px] w-[300px] mx-auto mt-6 rounded-md">
                <img
                  src={file.preview}
                  className="block object-contain w-full h-full rounded-md "
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropZone;
