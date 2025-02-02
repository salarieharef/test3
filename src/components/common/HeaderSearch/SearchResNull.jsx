import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

function SearchResNull() {
  return (
    <div className="flex flex-col h-5/6 gap-y-4 items-center my-5 justify-center text-gray-400">
      <ClipboardDocumentIcon className="w-8 h-8" />
      <p>اطلاعات مرتبط پیدا نشد.</p>
    </div>
  );
}

export default SearchResNull;
