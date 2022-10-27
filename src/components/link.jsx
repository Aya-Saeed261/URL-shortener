import { useState } from "react";

const Link = ({ url, shortenedLink }) => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedLink);
    setCopied(true);
  };

  return (
    <li className="link-holder d-flex flex-column flex-md-row justify-content-between align-items-md-center bg-white rounded-2 px-md-4 py-3">
      <p className="original-link mb-0 px-3 px-md-0 pb-2 pb-md-0">{url}</p>
      <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-4 px-3 px-md-0 pt-2 pt-md-0">
        <p className="mb-0 cyan">{shortenedLink}</p>
        <button
          type="button"
          className={`copy-btn btn-hover btn ${
            isCopied ? "copied bg-blue" : "bg-cyan"
          } text-white rounded-3 py-2 align-self-stretch align-self-md-start`}
          onClick={handleCopy}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
};

export default Link;
