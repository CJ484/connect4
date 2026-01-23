import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import locales from "../../const/locales";
import './styles.scss';

export default function Languagelist() {
  const { i18n } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <FaGlobe />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(locales).map((locale) => (
          <Dropdown.Item
            key={locale}
            onClick={() => i18n.changeLanguage(locale)}
          >
            {locales[locale as keyof typeof locales].title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
