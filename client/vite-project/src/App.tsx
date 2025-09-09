import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLlayout from "./comps/application-layout/AppLlayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLlayout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}
