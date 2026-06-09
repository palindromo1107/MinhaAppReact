import { BrowserRouter, Route, Routes } from "react-router"
import Home from './views/Home.jsx'
import MainLayout from "./layouts/MainLayout.jsx"
import InstituicaoEncino from "./views/InstituicaoEncino.jsx"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/instituicaoensino" element={<InstituicaoEncino />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App