// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ pathname, setHeadComponents, setPostBodyComponents, setHtmlAttributes }) => {
  // כיוון עברית וכיווניות
  setHtmlAttributes({ lang: "he", dir: "rtl" });

  // <head>
  setHeadComponents([
    // מודעת אדסנס
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
    // CSS של n8n chat
    <link
      key="n8n-chat-style"
      href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
      rel="stylesheet"
    />,
    // 🎨 CSS מותאם RTL + טיזר + הגדלת צ'אט
    <style
      key="chat-custom-style"
      dangerouslySetInnerHTML={{
        __html: `
          #n8n-chat {
            direction: rtl;
            text-align: right;
            font-family: "Assistant", sans-serif !important;
          }

          #n8n-chat::before {
            content: "הרופא התורן זמין לשיחה!";
            position: absolute;
            top: -40px;
            right: 0;
            background: #2b6cb0;
            color: #fff;
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 14px;
            white-space: nowrap;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            z-index: 9999;
          }

          @media (min-width: 768px) {
            #n8n-chat .n8n-chat-container {
              width: calc(100% + 20px) !important;
              height: calc(100% + 50px) !important;
              max-height: none !important;
            }
          }
        `,
      }}
    />,
  ]);

  const bodyComponents = [];

  // ✅ צ'אט רק בעמוד הספציפי
  if (pathname === "/inex/השתלת-שיער-עם-ניב-רסקין-מדריך-מקיף-להשת/") {
    bodyComponents.push(
      <script
        key="n8n-chat"
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
            createChat({
              webhookUrl: 'https://n8n-4lnr.onrender.com/webhook/c56aff01-e9a4-4537-bde5-ea6f22737294/chat',
              defaultLanguage: 'he',
              initialMessages: [
                'שלום אני רופא תורן במרכז להשתלות שיער! 👋',
                'באיזו התקרחות מדובר?'
              ],
              i18n: {
                he: {
                  title: 'מומחה להשתלת שיער! 👋',
                  subtitle: 'מרכז שירות הפועל 24/7.',
                  footer: '',
                  getStarted: 'שיחה חדשה',
                  inputPlaceholder: 'הקלד את שאלתך...',
                }
              }
            });
          `,
        }}
      />
    );
  }

  setPostBodyComponents(bodyComponents);
};
