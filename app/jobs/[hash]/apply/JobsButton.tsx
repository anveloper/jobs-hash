"use client";

import { useRouter } from "next/navigation";

const JobsButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(`/jobs`)} className="bg-white text-black border border-black px-3 py-1 rounded hover:bg-gray-100">
      {"Jobs"}
    </button>
  );
};

export default JobsButton;
