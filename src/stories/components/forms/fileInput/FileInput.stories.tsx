import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "../../../../components/form/FileInput";
import DropZone from "../../../../pages/example/form/file/components/DropZone";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Components/Forms/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
    componentSubtitle: "파일 인풋",
    docs: {
      description: {
        component: "파일을 업로드 해야 할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "",
  },
};

// File Input Basic
export const Basic: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setSelectedFile(file);
      }
    };
    return (
      <FileInput
        name="basic"
        selectedFile={selectedFile}
        onChange={handleFileChange}
      />
    );
  },
};

// Multiple Files
export const Multiple: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selectedFile, setSelectedFile] = useState<Array<File> | null>(null);
    const handleFileChangeMultiple = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (e.target.files) {
        const files = e.target.files;
        const filesArray = Array.from(files).map((file) => file);
        setSelectedFile(filesArray);
      }
    };
    return (
      <FileInput
        name="basic"
        multiple
        selectedFile={selectedFile}
        onChange={handleFileChangeMultiple}
      />
    );
  },
};

// File Input Basic With Preview
export const WithPreview: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setSelectedFile(file);
      }
    };
    return (
      <FileInput
        name="basic"
        selectedFile={selectedFile}
        onChange={handleFileChange}
        preview
      />
    );
  },
};

// Multiple Files With Preview
export const MultipleWithPreview: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selectedFile, setSelectedFile] = useState<Array<File> | null>(null);
    const handleFileChangeMultiple = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (e.target.files) {
        const files = e.target.files;
        const filesArray = Array.from(files).map((file) => file);
        setSelectedFile(filesArray);
      }
    };
    return (
      <FileInput
        name="basic"
        selectedFiles={selectedFile}
        onChange={handleFileChangeMultiple}
        multiple
        preview
      />
    );
  },
};

// File upload
export const Upload: Story = () => <DropZone />;
Upload.args = {
  ...Upload.args,
};

// Control sizing
export const Sizing: Story = () => (
  <div className="space-y-3">
    <FileInput placeholder="Large" className="h-[48px]" name="large" />
    <FileInput placeholder="Default" name="default" />
    <FileInput placeholder="Small" className="h-[32px]" name="small" />
  </div>
);
Sizing.args = {
  ...Sizing.args,
};

// File Name Formatting
export const Formatting: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        setSelectedFile(file);
      }
    };
    return (
      <FileInput
        name="basic"
        badge
        selectedFile={selectedFile}
        onChange={handleFileChange}
      />
    );
  },
};
