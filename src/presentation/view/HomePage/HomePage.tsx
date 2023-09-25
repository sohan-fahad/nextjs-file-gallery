import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import MyIcon from "@/presentation/common/icons/MyIcon";
import ModalContainer from "@/presentation/components/modals/ModalContainer";
import AddFileModal from "./components/AddFileModal";
import PdfFileCard from "./components/PdfFileCard";
import { FileUploadApiService } from "@/service/fileUpload.service";

const HomePage = () => {
  const [files, setFiles] = useState<string[]>([]);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAddModal) {
      geFiles();
    }
  }, [files.length, isAddModal]);

  const geFiles = async () => {
    try {
      setIsLoading(true);
      const res = await FileUploadApiService.getFiles();
      setFiles(res?.data);
      setIsLoading(false);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="w-full flex justify-end">
          <Button onClick={() => setIsAddModal(true)} className="bg-blue-600">
            <MyIcon name="plus" />
            Add File
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-8 gap-4 mt-5">
        {isLoading
          ? "data fetching"
          : files?.length
          ? files.map((file, index) => <PdfFileCard file={file} key={index} />)
          : "No file uploaded"}
      </div>

      <ModalContainer
        isShow={isAddModal}
        closeModal={() => setIsAddModal(false)}
      >
        <AddFileModal closeModal={() => setIsAddModal(false)} />
      </ModalContainer>
    </>
  );
};

export default HomePage;
