// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  // קובע את כיוון האתר והגדרת שפה
  setHtmlAttributes({ lang: "he", dir: "rtl" });

  // ממשיך עם הקוד שכבר היה לך
  setHeadComponents([
    <meta
      key="google-adsense-account"
      name="google-adsense-account"
      content="ca-pub-8148276210846697"
    />,
    <script
      key="google-adsense"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8148276210846697"
      crossOrigin="anonymous"
    />,
  ]);
};
