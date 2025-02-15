import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-black">
        <ul className="text-white">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
