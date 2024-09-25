import { useSidebarContext } from "../../hooks/useSidebar"
import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"

const Overview = () => {

    const [loading, setLoading] = useState<boolean>(true)

    const { setActiveSublink, setActiveLink } = useSidebarContext()

    useEffect(() => {

        setActiveSublink("overview")
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
                    <p>Overview</p>
                )
            }
        </div>
    )
}

export default Overview