import { Link } from "react-router"
import { navigationBarListStyle, navigationBarStyle } from "./styles"

export function NavigationBar() {
    return (
        <nav style={navigationBarStyle}>
            <ul style={navigationBarListStyle}>
                <li>
                    <Link to="">News</Link>
                </li>
                <li>
                    <Link to="topgames">Top 10 Games</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
        </nav>
    )
}