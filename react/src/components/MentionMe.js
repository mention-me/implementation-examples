import { useEffect, memo } from "react";

const ENDPOINT =
  "https://tag-demo.mention-me.com/api/v2/refereefind/mm8a51717e";

const MentionMe = ({ implementation, situation, locale }) => {
  useEffect(() => {
    // Create & Insert MM Script
    const script = document.createElement("script");
    script.src = ENDPOINT + `?situation=${encodeURIComponent(implementation)}&locale=${encodeURIComponent(locale)}`;
    const head = document.querySelector("head");
    head.appendChild(script);

    return () => {
        // If desired, remove script
        script.parentNode.removeChild(script);

        // Cleanup MM window variable
        if (window.MentionMeFiredTags?.[implementation + situation] === true) {
            delete window.MentionMeFiredTags[implementation + situation];
        }
    };
  }, [implementation, situation, locale]);

  return <div id="mmWrapper" />;
};

export default memo(MentionMe);
