import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React from "react";

function NoCommentsYet({changeToInsertComment}) {
  return (
    <div className="w-full bg-white items-center py-24 text-gray-500 h-48 md:h-96 flex flex-col">
      <ChatBubbleOvalLeftEllipsisIcon className="w-full h-24" />
      <span className="py-6">
        نظری برای این خبر درج نشده است، برای درج نظر بر روی دکمه کلیک کنید.
      </span>
      <span onClick={changeToInsertComment} className="px-4 py-2 bg-primary rounded-md text-white text-sm cursor-pointer hover:shadow-shadowPrimaryFront transition-all duration-150">
        درج نظر
      </span>
    </div>
  );
}

export default NoCommentsYet;
