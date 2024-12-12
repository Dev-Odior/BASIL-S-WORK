import {
  Home,
  Insights,
  Solutions,
  Customers,
  Company,
  NotFound,
} from "../pages";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/insight" Component={Insights} />
        <Route path="/solutions" Component={Solutions} />
        <Route path="/customers" Component={Customers} />
        <Route path="/company" Component={Company} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
};
export default Routers;
