import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const CookiesMessage : React.FC = () => {
  const { t } = useTranslation()
  const isHaveCookie = getCookieConsentValue("cookieConsent");
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (show && !isHaveCookie) {
        setShow(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [show, isHaveCookie]);

  return (
    <>
      <CookieConsent
        cookieName="cookieConsent"
        location="bottom"
        visible={"show"}
        buttonText={t("btnAccept")}
        onAccept={() => setShow(true)}
        enableDeclineButton
        declineButtonText={t("btnReject")}
        onDecline={() => setShow(true)}
        expires={30}
        style={{
          background: "#2B373B",
          opacity: "0.95",
          position: "fixed",
          top: `${show ? "100vh" : "calc(100vh - var(--footer-height))"}`,
          transition: "top 2s",
        }}
        buttonStyle={{ color: "var(--text-heade)", fontSize: "13px", borderRadius: "5px",  background: "#4CAF50"}}
        declineButtonStyle={{ fontSize: "13px", borderRadius: "5px" }} 
      >
        {t("messageCookies")}
        <Link
          to="/policy"
          style={{
            textDecoration: "underline",
            fontSize: "12px",
            color: "var(--color-switch)",
          }}
        >
          {" "}
          {t("titleCookies")}
        </Link>
      </CookieConsent>
    </>
  );
};

export default CookiesMessage;