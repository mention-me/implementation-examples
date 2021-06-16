import React, { useEffect, memo } from "react";

interface Props {
  implementation: string;
  situation: string;
  locale: string;
}

const ENDPOINT =
  "https://tag-demo.mention-me.com/api/v2/refereefind/mm8a51717e";

const MentionMe: React.FunctionComponent<Props> = ({ implementation, situation, locale }) => {
  useEffect(() => {
    // Create & Insert MM Script
    const script = document.createElement("script");
    script.src = ENDPOINT + `?situation=${situation}&implementation=${encodeURIComponent(implementation)}&locale=${encodeURIComponent(locale)}`;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(script);

    return () => {
        // If desired, remove script
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }

        // Cleanup MM window variable
        if (window.MentionMeFiredTags?.[implementation + situation] === true) {
            delete window.MentionMeFiredTags[implementation + situation];
        }
    };
  }, [implementation, situation, locale]);

  return <div id="mmWrapper" />;
};

export default memo(MentionMe);
