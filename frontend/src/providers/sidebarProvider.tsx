import SidebarContext from "../context/sidebarContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SidebarContextProvider = ({children}: {children: React.ReactNode}) => {
    
    const navigation = useNavigate()

    if (!navigation)
        throw new Error("error initiaising navigation")

    const [open, setOpen] = useState<boolean>(false)
    const [activeLink, setActiveLink] = useState<string>("dashboard")
    const [activeSublink, setActiveSublink] = useState<string>("overview")

    const toggleSidebar = () => setOpen(!open)
    const goToPage = (link:string, to: string) => {
        setActiveLink(link)
        navigation(`/${to}`)
        setActiveSublink("")
    }
    
    return (
        <SidebarContext.Provider value={{
            open,
            activeLink, setActiveLink,
            goToPage,
            toggleSidebar,
            activeSublink, setActiveSublink
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContextProvider

