import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
     
         <h1> <Link to="/">Homepage </Link> </h1>
        
          <h1><Link to="/countries">Country List 🌍</Link></h1>
      <Outlet />
    </>
  );
};
