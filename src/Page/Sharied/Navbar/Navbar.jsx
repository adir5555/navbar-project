import { Link } from 'react-router-dom';
import Rea from '../../../assets/WhatsApp Image 2024-07-13 at 00.15.54_23d745f6.jpg';





const Navbar = () => {
  const navlink = <>
    <li>
      <Link className="justify-between">
        Profile
        <span className="badge">New</span>
      </Link>
    </li>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/'>Menu</Link></li>
    <li><Link to='/'>Serect</Link></li>
  </>
  return (
    <div className="navbar bg-sky-900 p-10">
      <div className="flex-1">
        <h1 className="text-5xl ml-16 text-green-600 uppercase font-bold">Shanto</h1>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn mr-14 btn-ghost btn-circle avatar">
            <div className=" rounded-full">
              <img className=""
                alt="Tailwind CSS Navbar component"
                src={Rea} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-sky-400 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navlink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;