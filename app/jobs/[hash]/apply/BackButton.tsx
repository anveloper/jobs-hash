"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="bg-white text-black border border-black px-3 py-1 rounded hover:bg-gray-100">
      {"뒤로"}
    </button>
  );
};

export default BackButton;
