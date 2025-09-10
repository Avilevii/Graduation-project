import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLlayout from "./comps/application-layout/AppLlayout";
import GetPostById from "./pages/GetPostById";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLlayout/>}>
        <Route index element={<Home/>}/>
        <Route path="getPostById" element={<GetPostById/>}/>
        </Route>
      </Routes>
    </>
  )
}
