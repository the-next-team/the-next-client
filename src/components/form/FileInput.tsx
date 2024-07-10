import { ChangeEvent } from "react";

type Props = {
  name: string;
  label?: string | undefined;
  placeholder?: string | undefined;
  className?: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean | undefined;
  preview?: boolean | undefined;
  badge?: boolean | undefined;
  id?: string | undefined;
  selectedFile?: any | undefined;
  selectedFiles?: any | undefined;
};

function FileInput({
  name,
  label = "Browse",
  onChange,
  placeholder = "Choose a file or drop it here...",
  multiple,
  preview,
  className = "custom-class",
  id,
  selectedFile,
  badge,
  selectedFiles,
}: Props) {
  return (
    <div>
      <div className="filegroup">
        <label>
          <input
            type="file"
            onChange={onChange}
            className="hidden w-full bg-red-400"
            name={name}
            id={id}
            multiple={multiple}
            placeholder={placeholder}
          />
          <div
            className={`w-full h-[40px] file-control flex items-center ${className}`}
          >
            {!multiple && (
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedFile && (
                  <span
                    className={
                      badge ? " badge-title" : "text-slate-900 dark:text-white"
                    }
                  >
                    {selectedFile.name}
                  </span>
                )}
                {!selectedFile && (
                  <span className="text-slate-400">{placeholder}</span>
                )}
              </span>
            )}

            {multiple && (
              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedFiles.length > 0 && (
                  <span
                    className={
                      badge ? " badge-title" : "text-slate-900 dark:text-white"
                    }
                  >
                    {selectedFiles.length > 0
                      ? selectedFiles.length + " files selected"
                      : ""}
                  </span>
                )}
                {selectedFiles.length === 0 && (
                  <span className="text-slate-400">{placeholder}</span>
                )}
              </span>
            )}
            <span className="inline-flex items-center flex-none h-full px-4 text-base font-normal border-l rounded-tr rounded-br cursor-pointer file-name border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
              {label}
            </span>
          </div>
          {!multiple && preview && selectedFile && (
            <div className="w-[200px] h-[200px] mx-auto mt-6  ">
              <img
                src={selectedFile ? URL.createObjectURL(selectedFile) : ""}
                className="block object-contain w-full h-full p-2 border rounded border-slate-200"
                alt={selectedFile?.name}
              />
            </div>
          )}
          {multiple && preview && selectedFiles.length > 0 && (
            <div className="flex flex-wrap space-x-5 rtl:space-x-reverse">
              {selectedFiles.map((file: any, index: number) => (
                <div
                  className="w-1/2 p-2 mt-6 border rounded xl:w-1/5 md:w-1/3 border-slate-200"
                  key={index}
                >
                  <img
                    src={file ? URL.createObjectURL(file) : ""}
                    className="object-cover w-full h-full rounded"
                    alt={file?.name}
                  />
                </div>
              ))}
            </div>
          )}
        </label>
      </div>
    </div>
  );
}

export default FileInput;
