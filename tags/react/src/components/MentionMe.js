import { useEffect, memo } from "react";

const ENDPOINT =
  "https://tag-demo.mention-me.com/api/v2/referreroffer/mmbd3a737d";

const addTerm = (url, urlParams) => {
    const anchor = document.createElement("a");
    anchor.href = url;

    Object.entries(urlParams).filter(([_key, value]) => {
      return !!value;
    }).forEach(([key, value]) => {
        anchor.search += `${anchor.search ? "&" : ""}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    });

    return anchor.href;
};

const MentionMe = ({ implementation = "", situation = "", locale = "en_GB" }) => {
  useEffect(() => {
    // Create & Insert MM Script
    const script = document.createElement("script");
    script.src = addTerm(ENDPOINT, {
      'situation': situation,
      'locale': locale,
      'implementation': implementation,
    });

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
