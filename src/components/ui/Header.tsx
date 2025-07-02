import headericon from "../../../public/components.svg";

function Header() {
  return (
    <div className=" justify-center flex ">
      <div className="backdrop-blur-md items-center flex bg-transparent rounded-full shadow-md  shadow-orange-200  ">
        <button className="md:mx-10 mx-6 my-5 text-xl transition-all hover:scale-105 text-zinc-300  ">
          <div className="flex items-center">
            <img src={headericon} className="hidden lg:block" />
            <p className="lg:pl-20">About</p>
          </div>
        </button>
        <button className="md:mx-10 mx-6 my-5 text-xl  transition-all hover:scale-105 text-zinc-300 ">
          <p>Projects</p>
        </button>
        <button className="md:mx-10 mx-6 my-5 text-xl  transition-all hover:scale-105 text-zinc-300  ">
          <div className="flex items-center">
            <p className="lg:pr-20 ">Contact</p>
            <img src={headericon} className="hidden lg:block" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
