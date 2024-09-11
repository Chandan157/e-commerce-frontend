import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartCountBatch from "./CartCountBatch";

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-evenly items-center pt-8">
        <h1 className="text-4xl font-medium">Logo</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <IoSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <div className="icon__wrapper border border-gray-400 rounded-full w-[40px] h-[40px] grid place-items-center text-[22px]">
            <AiOutlineUser />
          </div>
          <div className="relative icon__wrapper border border-gray-400 rounded-full w-[40px] h-[40px] grid place-items-center text-[22px]">
            <MdOutlineShoppingCart />
            <CartCountBatch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
