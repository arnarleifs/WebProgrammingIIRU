import { backgroundColor, textColor } from "@/styles/css-vars";
import type { CSSProperties } from "react";

export const navigationBarStyleCompose = (theme: string): CSSProperties => {
    return {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor[theme],
        color: textColor[theme],
        height: "100px"
    }
}

export const navigationBarListStyle: CSSProperties = {
    display: 'flex',
    gap: 20
}