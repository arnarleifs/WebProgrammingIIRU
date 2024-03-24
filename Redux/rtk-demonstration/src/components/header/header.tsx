import { Link } from "react-router-dom";
import "./header.css";
import { List, ListItem } from "@chakra-ui/react";

export function Header() {
  return (
    <nav className="header">
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/pokemons">Pokemons</Link>
        </ListItem>
      </List>
    </nav>
  );
}
