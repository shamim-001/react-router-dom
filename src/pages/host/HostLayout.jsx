import { Outlet } from "react-router-dom";
import HostNav from "../../components/HostNav";
const HostLayout = () => {
  return (
    <div className="px-10">
      <HostNav />
      <Outlet />
    </div>
  );
};

export default HostLayout;
