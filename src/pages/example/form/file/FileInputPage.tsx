import { ChangeEvent, useState } from "react";
import Card from "../../../../components/card/Card";
import FileInput from "../../../../components/form/FileInput";
import DropZone from "./components/DropZone";

function FileInputPage() {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedFile2, setSelectedFile2] = useState<any>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [selectedFiles2, setSelectedFiles2] = useState<any>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };
  const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile2(file);
    }
  };
  const handleFileChangeMultiple = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      const filesArray = Array.from(files).map((file) => file);
      setSelectedFiles(filesArray);
    }
  };
  const handleFileChangeMultiple2 = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      const filesArray = Array.from(files).map((file) => file);
      setSelectedFiles2(filesArray);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Card title="File Input Basic">
        <FileInput
          name="basic"
          selectedFile={selectedFile}
          onChange={handleFileChange}
        />
      </Card>
      <Card title="Multiple Files">
        <FileInput
          name="basic"
          multiple
          selectedFiles={selectedFiles}
          onChange={handleFileChangeMultiple}
        />
      </Card>
      <Card title="File Input Basic With Preview">
        <FileInput
          name="basic"
          selectedFile={selectedFile2}
          onChange={handleFileChange2}
          preview
        />
      </Card>
      <Card title="Multiple Files With Preview">
        <FileInput
          name="basic"
          selectedFiles={selectedFiles2}
          onChange={handleFileChangeMultiple2}
          multiple
          preview
        />
      </Card>
      <div className="col-span-1 xl:col-span-2">
        <Card title="File upload">
          <DropZone />
        </Card>
      </div>
      <Card title="Control sizing">
        <div className="space-y-3">
          <FileInput placeholder="Large" className="h-[48px]" name="large" />
          <FileInput placeholder="Default" name="default" />
          <FileInput placeholder="Small" className="h-[32px]" name="small" />
        </div>
      </Card>
      <Card title="File Name Formatting">
        <FileInput
          name="basic"
          badge
          selectedFile={selectedFile}
          onChange={handleFileChange}
        />
      </Card>
    </div>
  );
}

export default FileInputPage;
