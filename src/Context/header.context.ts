import { createContext } from "react"



export interface HeaderContextTypes {
    isMenuOpen: boolean;
    setIsMenuOpen: (toggle :boolean) => void;

}

export const HEADER_CONTEXT_STATE :HeaderContextTypes = {
    isMenuOpen: false,
    setIsMenuOpen: toggle => {}
}

export const HeaderContext = createContext<HeaderContextTypes>(HEADER_CONTEXT_STATE); 