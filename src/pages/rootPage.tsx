import { Outlet } from "@tanstack/react-router"
import Navbar from "../components/navbar"

export default function RootPage() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}