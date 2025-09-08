import { Outlet } from "react-router-dom";
import Slogan from "./Slogan";

export default function AppLlayout() {
  return (
    <div>
        <Slogan/>
        <Outlet/>
    </div>
  )
}
