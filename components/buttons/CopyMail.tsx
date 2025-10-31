"use client";

import { useState } from "react";
import copyIcon from "@/public/icons/copy.svg";
import checkmark from "@/public/icons/checkmark.svg";

export default function CopyMail({
  email,
  copyMsg: message,
}: {
  email: string;
  copyMsg: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyMailToClipboard() {
    const item = new ClipboardItem({
      ["text/plain"]: email,
    });
    navigator.clipboard.write([item]);

    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }

  return (
    <button onClick={copyMailToClipboard} className="cursor-pointer ">
      {copied ? (
        <div className="flex relative">
          <div
            className="size-8 text-green-500 relative"
            dangerouslySetInnerHTML={{ __html: checkmark }}
          />
          <div className="flex absolute left-full items-center">
            <div className="border-y-7 border-l-0 border-r-7 border-solid border-y-transparent border-r-gray-900"></div>
            <div className="flex h-8 px-2 items-center bg-gray-900 rounded-md">
              <div className="flex">{message}</div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="size-8 p-1 fill-white"
          dangerouslySetInnerHTML={{ __html: copyIcon }}
        ></div>
      )}
    </button>
  );
}
