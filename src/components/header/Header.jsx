import '../../assets/styles/Header.scss';
import { FiSearch } from 'react-icons/fi';
import TopHeader from './top/TopHeader';
import MiddleHeader from './middle/MiddleHeader';
import BottomHeader from './bottom/BottomHeader';
import { useState } from "react";
import Search from "./middle/Search/Search";

const Header = () => {
    const [ShowSearch, setShowSearch] = useState(false);

    return (
        <>
            {ShowSearch && <Search setShowSearch={setShowSearch} />}

            <div className='w-11/12 my-1  m-auto'>
                <TopHeader />
            </div>
            {/* <hr className='lg:hidden block' /> */}
            <main className='w-11/12  m-auto select-none'>
                <MiddleHeader />
                <section className='lg:hidden flex justify-between items-center border rounded-full mb-4'>
                    <div className='flex justify-center items-center'>
                        <div className='px-3'>
                            <FiSearch size={17} />
                        </div>
                        <div>
                            <input onClick={() => setShowSearch(true)} type="text" className='py-3 outline-none border-none w-full' placeholder='Search product ...' />
                        </div>
                    </div>

                    <button className='py-2 px-4 mr-1 rounded-full  bg-yellow-500'>Search</button>
                </section>
                <BottomHeader />

            </main>
       
            {/* <hr /> */}
        </>

    )
}

export default Header