import SidebarContextProvider from "./sidebarProvider";

export default function Providers({ children }: {children: React.ReactNode}) {
    return (
        <SidebarContextProvider>
            {children}
        </SidebarContextProvider>
    )
}