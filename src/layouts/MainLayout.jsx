import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/header"

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout