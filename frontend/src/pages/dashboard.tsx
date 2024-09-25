import { useSidebarContext } from "../hooks/useSidebar"
import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

const Dashboard = () => {

    const {
        setActiveLink,
        setActiveSublink
    } = useSidebarContext()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setActiveLink("dashboard")
        setActiveSublink("")
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [setActiveLink, setActiveSublink])

    return (
        <div>
            {
                loading ? (
                    <BarLoader color="white" />
                ) : (
                    <p>Dashboard</p>
                )
            }
        </div>
    )
}

export default Dashboard