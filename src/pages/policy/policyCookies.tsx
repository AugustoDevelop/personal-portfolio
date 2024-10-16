import { useTranslation } from 'react-i18next';
import { PolicyCookiesStyle } from './style';

function PolicyCookies() {
  const { t } = useTranslation()

  return <PolicyCookiesStyle>
    <h2>{t("titlePolicy")}</h2>
    <h3>{t("intoCookies")}</h3><br />

    <h2>{t("subCookies")}</h2>
    <h3>{t("cookiesDetails")}</h3><br /><br />

    <h2>{t("usedCookies")}</h2>
    <h3>{t("useDetailsCookies")}</h3><br /><br />

    <h2>{t("cookiesSessions")}</h2>
    <h3>{t("cookiesSessionsDetail")}</h3><br /><br />

    <h2>{t("consent")}</h2>
    <h3>{t("consentDetail")}</h3><br /><br />

    <h2>{t("contact")}</h2>
    <h3>{t("contactDetails")}</h3><br /><br />
  </PolicyCookiesStyle>
}

export default PolicyCookies;