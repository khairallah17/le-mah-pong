import { useState, useEffect } from 'react'
import { useSidebarContext } from '../hooks/useSidebar'
import { BarLoader } from 'react-spinners'

const Shop = () => {

    const { setActiveLink, setActiveSublink } = useSidebarContext()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        
        setActiveLink("shop")
        setActiveSublink("")
        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, [setActiveLink, setActiveSublink])

    return (
        <div>
            {
                loading ? (
                    <BarLoader color='white'/>
                ) : (
                    <p>Shop</p>
                )
            }
        </div>
    )
}

export default Shop