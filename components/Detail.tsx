"use client";

import { useRouter } from "next/navigation";

const Detail = ({ hash }: { hash: string }) => {
  const router = useRouter();

  const handleClose = () => {
    router.push(`?`);
  };

  const handleMove = () => {
    router.push(`/jobs/${hash || Date.now()}/apply`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[300px] text-black gap-2">
      {"모달 내용"}
      <div className="flex gap-1">
        <button onClick={handleClose} className="bg-white text-black border border-black px-3 py-1 rounded hover:bg-gray-100">
          {"닫기"}
        </button>
        <button onClick={handleMove} className="bg-black text-white border border-none px-3 py-1 rounded hover:bg-gray-800">
          {"이동"}
        </button>
      </div>
    </div>
  );
};

export default Detail;
