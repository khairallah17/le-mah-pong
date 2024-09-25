import { useEffect, useState } from "react"
import { BarLoader } from "react-spinners"
import { useSidebarContext } from "../hooks/useSidebar"

const Chat = () => {

    const {
        setActiveLink,
        setActiveSublink
    }  = useSidebarContext()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        setActiveLink("chat")
        setActiveSublink("")
        setTimeout(() => {
            setLoading(false)
        }, 3000)

    })

    return (
        <div>

            {
                loading ? (
                    <BarLoader color="white" />
                ) : (
                    <p>Chat</p>
                )
            }

        </div>
    )
}

export default Chat