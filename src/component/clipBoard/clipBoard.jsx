import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CopyToClipboard from "react-copy-to-clipboard";

export default function ClipBoard({ data }) {
  const [copy, setCopy] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }, [copy]);

  return (
    <div className="data-container">
      <pre className="pre-description">
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </pre>
      {data.code && (
        <CopyToClipboard text={data.code} onCopy={() => setCopy(true)}>
          <div
            className="language-markup"
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
          >
            <code>{data.code}</code>
            <img src="/content_copy_black_24dp.svg" style={style} alt="copy" />
          </div>
        </CopyToClipboard>
      )}
      {copy && (
        <div className="floating-notification">
          <img src="/check_black_24dp.svg" alt="checked" />
          Copied to clipboard!
        </div>
      )}
    </div>
  );
}
