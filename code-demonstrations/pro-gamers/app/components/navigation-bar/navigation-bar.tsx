import { Link } from "react-router"
import { navigationBarListStyle, navigationBarStyleCompose } from "./styles"
import { User } from "../user/user"
import { useContext } from "react"
import { ThemeContext } from "@/contexts/theme-context"

export function NavigationBar() {
    const { theme } = useContext(ThemeContext);
    return (
        <nav style={navigationBarStyleCompose(theme)}>
            <User />
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
                <li>
                    <Link to="subscribe">Subscribe</Link>
                </li>
            </ul>
        </nav>
    )
}