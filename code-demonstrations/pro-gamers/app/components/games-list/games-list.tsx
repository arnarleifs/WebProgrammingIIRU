import type { Game } from "@/types/game";
import { useState } from "react"
import { GamesListItem } from "../games-list-item/games-list-item";

const initialList: Game[] = [
    {
        id: 1,
        name: "Super Mario Bros. 3",
        shortDescription: "Super Mario Bros. 3[a] is a 1988 platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). It was released for home consoles in Japan on October 23, 1988, in North America on February 12, 1990, and in Europe on August 29, 1991. It was developed by Nintendo Entertainment Analysis and Development, led by Shigeru Miyamoto and Takashi Tezuka.",
        rating: 9.5,
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png"
    },
    {
        id: 2,
        name: "Contra",
        shortDescription: "Contra[a] is a 1987 run and gun video game developed and published by Konami for arcades.[4][5] A home version was released for the Nintendo Entertainment System in 1988, along with ports for various home computer formats, including the MSX2. The arcade and computer versions were localized as Gryzor in Europe, and the NES version as Probotector in the PAL region.",
        rating: 9.6,
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/65/Contra_cover.jpg"
    }
];

export function GamesList() {
    const [games] = useState<Game[]>(initialList);
    return (
        games.map(g => <GamesListItem game={g} />)
    );
}