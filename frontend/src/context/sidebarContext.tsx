import { createContext } from "react";

export interface ISidebar {
    open: boolean
    toggleSidebar: () => void
    activeLink: string,
    setActiveLink: (link: string) => void,
    goToPage: (link: string, to: string) => void,
    activeSublink: string,
    setActiveSublink: (link: string) => void
}

const SidebarContext = createContext<ISidebar>({} as ISidebar)

export default SidebarContext