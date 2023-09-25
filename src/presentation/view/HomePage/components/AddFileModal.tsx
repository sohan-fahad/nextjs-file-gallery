import { FileUploadApiService } from "@/service/fileUpload.service";
import { dataURLtoFile } from "@/utils";
import { Button } from "flowbite-react";
import React, { useState } from "react";

interface IProps {
  closeModal: () => void;
}

const AddFileModal = ({ closeModal }: IProps) => {
  const [files, setFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const selectFile = (e: any) => {
    setFiles((prev) => [...prev, e?.target?.value]);
  };

  const uploadFiles = async () => {
    try {
      setIsLoading(true);
      if (files.length) {
        files.forEach(async (element) => {
          await FileUploadApiService.uploadFile(dataURLtoFile(element));
        });
        setFiles([]);
        closeModal();
      } else {
        alert("Please select file");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-5">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer mb-5 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDF file only
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple={true}
            // accept="application/pdf"
            onChange={selectFile}
          />
        </label>
        <div className=" flex flex-col gap-4 ">
          {/* file Card */}
          {files.map((file, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className="flex justify-between items-center" key={index}>
              <div className="flex gap-2 items-center">
                <svg
                  className="w-6"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M12 10v4h4" />
                  <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                </svg>
                <p className="text-sm">
                  {new URL(file)?.pathname?.split("/").pop()}
                </p>
              </div>
              <button
                onClick={() =>
                  setFiles(() => files.filter((item) => item != file))
                }
              >
                <svg
                  className="w-6"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {files.length ? (
          <Button
            className="w-full mt-4"
            disabled={isLoading}
            onClick={uploadFiles}
          >
            {isLoading ? "Uploading" : "Upload"}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AddFileModal;
