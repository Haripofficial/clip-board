import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Code({ code }) {
  const [copy, setCopy] = useState(false);
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }, [copy]);

  return (
    code && (
      <>
        <CopyToClipboard text={code} onCopy={() => setCopy(true)}>
          <div
            className="language-markup"
            onMouseEnter={(e) => {
              setStyle({ display: "block" });
            }}
            onMouseLeave={(e) => {
              setStyle({ display: "none" });
            }}
          >
            <code>{code}</code>
            <img src="/content_copy_black_24dp.svg" style={style} alt="copy" />
          </div>
        </CopyToClipboard>

        {copy && (
          <div className="floating-notification">
            <img src="/check_black_24dp.svg" alt="checked" />
            Copied to clipboard!
          </div>
        )}
      </>
    )
  );
}
