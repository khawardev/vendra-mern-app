import { HiOutlineChevronDown } from 'react-icons/hi2';

const TopHeader = () => {
  return (
      <div>
          <main className=" flex md:justify-between justify-center gap-4 items-center list-none md:py-5 py-3 text-sm select-none">
              <li className=" flex gap-4 justify-center items-center ">
                  <ul className=' px-3 py-1 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full'>My account</ul>
              </li>
              <li className="flex gap-4 ">
                  <ul className=' flex justify-center items-center gap-2'>English <HiOutlineChevronDown /></ul>
                  <ul className=' flex justify-center items-center gap-2'>USD <HiOutlineChevronDown /></ul>
              </li>
          </main>

    </div>
  )
}

export default TopHeader