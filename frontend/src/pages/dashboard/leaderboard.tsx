import { useSidebarContext } from "../../hooks/useSidebar"
import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

const Leaderboard = () => {

    const [loading, setLoading] = useState<boolean>(true)

    const { setActiveSublink, setActiveLink } = useSidebarContext()

    useEffect(() => {

        setActiveSublink("leaderboard")
        setActiveLink("")

        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, [setActiveSublink, setActiveLink])

    return (
        <div>
            {
                loading ? (
                    <BarLoader color="white"/>
                ) : (
                    <p>Leaderboard</p>
                )
            }
        </div>
    )
}

export default Leaderboard