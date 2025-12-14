import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать QR код</Link>
            <Link to="/scan">Сканировать QR код</Link>
            <Link to="/ScanHistory">История Сканирования</Link>
            <Link to="/GenerateHistory">История Генерирования</Link>
        </nav>

    )
}