import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

function DBError() {
  return (
    <div className="flex flex-col w-4/5 h-5/6 gap-y-4 p-40 items-center justify-center text-red-500 shadow-shadowPrimaryFront">
      <ClipboardDocumentIcon className="w-8 h-8 " />
      <p>سرور در دسترس نیست، لطفا بعدا تلاش کنید.</p>
    </div>
  );
}

export default DBError;
