import ModalButton from "@/components/ModalButton";
import BackButton from "./BackButton";
import JobsButton from "./JobsButton";

const ApplyPage = async ({ params }: { params: Promise<{ hash: string }> }) => {
  const { hash } = await params;
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-1">
      {hash}
      <div>
        <BackButton />
        <JobsButton />
        <ModalButton />
      </div>
    </div>
  );
};
export default ApplyPage;
