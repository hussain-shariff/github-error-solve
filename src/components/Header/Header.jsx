import { MdConstruction, MdInsertDriveFile } from "react-icons/md";
import { Link } from "react-router-dom";

function Header({ notice }) {
  return (
    <header className="p-4 bg-dark-secondary sticky top-0 z-50">
      <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* <h1 className="text-xl font-bold">
          GITHUB <span className="text-primary line-through">ERROR</span> SOLVE
        </h1> */}
        <Link to={'/'}>
          <img src="assets/TEST2.png" className="w-36" alt="" />
        </Link>
        <div className="flex mt-2 md:mt-0 items-center gap-3 text-sm">
          <MdConstruction className="text-lg" />
          <h6>Under Construction</h6>
          <MdInsertDriveFile className="text-lg" />
          <Link to={'/doc'}>Doc</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;