"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Detail from "./Detail";

const Modal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(modal || "");
  }, [modal]);

  if (!hash) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
        <Detail hash={hash} />
      </div>
    </div>
  );
};

export default Modal;
