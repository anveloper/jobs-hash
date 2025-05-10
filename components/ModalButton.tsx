"use client";

import { useRouter, useSearchParams } from "next/navigation";

const ModalButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleOpen = () => {
    const params = new URLSearchParams(searchParams);
    params.set("modal", Date.now().toString());
    router.push(`?${params.toString()}`);
  };
  return (
    <button onClick={handleOpen} className="bg-white text-black border border-black px-3 py-1 rounded hover:bg-gray-100">
      {"모달"}
    </button>
  );
};

export default ModalButton;
