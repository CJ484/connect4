import { useTranslation } from 'react-i18next';
import './Header.scss';

export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <div className="header">
            <h1 className="title">{t(`titles.main`)}</h1>
            <div className="language-list">
                <button className="language-button" onClick={() => i18n.changeLanguage("en")}>English</button>
                <button className="language-button" onClick={() => i18n.changeLanguage("fr")}>French</button>
            </div>
        </div>
    )
}