import { IoRemoveOutline } from "react-icons/io5";
import about1 from '../../src/assets/images/about-1.jpg';
import about2 from '../../src/assets/images/about-2.jpg';
const AboutPage = () => {
    return (
        <main className=" w-11/12  m-auto md:py-20 py-3">

            <main className="my-10">
                <p className=" text-2xl text-gray-400 mb-4 font-bold leading-6">Our Mission, About Machic</p>
                <p className=" md:text-6xl text-xl mb-4 font-bold leading-6  ">We belive the best experience always wins</p>
                <p className=" text-lg  mb-4 w-3/5 leading-6  text-justify">Quisque lacinia commodo euismod. Nullam tempus nec mi id blandit. In lacinia nibh vitae ante laoreet rhoncus. Quisque in dapibus lorem, luctus gravida velit. Nulla gravida eros ac pharetra porta.</p>
            </main>


            <main className=' grid grid-cols-3 gap-3  py-10 '>
                <section className='flex gap-3 '>
                    <div >
                        <IoRemoveOutline size={29} />
                    </div>
                    <div>
                        <p className=' text-xl font-bold leading-8 '>Class aptent taciti sociosqu</p>
                        <p className='leading-5 text-gray-400'>Quisque luctus leo sit amet ante finibus lobortis. Class aptent taciti sociosqu.</p>
                    </div>
                </section>
                <section className='flex gap-3 '>
                    <div >
                        <IoRemoveOutline size={29} />
                    </div>
                    <div>
                        <p className=' text-xl font-bold leading-8 '>Class aptent taciti sociosqu</p>
                        <p className='leading-5 text-gray-400'>Quisque luctus leo sit amet ante finibus lobortis. Class aptent taciti sociosqu.</p>
                    </div>
                </section>
                <section className='flex gap-3 '>
                    <div >
                        <IoRemoveOutline size={29} />
                    </div>
                    <div>
                        <p className=' text-xl font-bold leading-8 '>Class aptent taciti sociosqu</p>
                        <p className='leading-5 text-gray-400'>Quisque luctus leo sit amet ante finibus lobortis. Class aptent taciti sociosqu.</p>
                    </div>
                </section>

            </main>

            <main>
                <img src={about1} className=" w-full" />
            </main>

            <main className=" grid grid-cols-6 py-20">
                <section className=" col-span-1">
                </section>
                <section className=" col-span-5">
                    <p className=" leading-7 text-lg  " >
                        Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus tempor ante in dapibus. Curabitur sed lectus tempus, pulvinar magna vel, laoreet sapien. <br /><br />
                        Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus. Etiam hendrerit est viverra eros mollis, a laoreet ante dictum. Aliquam erat volutpat. Vivamus tempor blandit dui vel interdum. Etiam ut libero eget ex sodales lobortis vitae at est. Nulla facilisis velit nec pellentesque commodo. Phasellus suscipit sodales magna in vehicula.<br /><br />
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat. Proin ut nisi ut ipsum blandit vehicula. Nulla orci eros, ornare vitae tristique et, iaculis nec mauris. Aliquam ornare, turpis sed lobortis ultricies, lectus felis lacinia lacus, et convallis ipsum erat sed tortor. Proin molestie sagittis augue, id sollicitudin libero congue vel. Suspendisse id elementum nunc. Donec in neque vitae nisl consequat accumsan.<br /><br />
                    </p>
                </section>
            </main>
            <main className="mb-10">
                <p className=" text-2xl text-gray-400 mb-4 font-bold leading-6">Our Vision, About Machic</p>
                <p className=" md:text-5xl text-xl mb-4 font-bold leading-6  ">Nulla at facilisis leo. Aenean vel molestie risus. Morbi in vehicula metus, ut malesuada mauris.</p>
            </main>

            <main className=" grid grid-cols-3 gap-16 my-20">
                <section className=" col-span-1">
                    <img src={about2} className=" w-full" />
                </section>
                <section className='col-span-2'>
                    <p className=" leading-7   " >
                        Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus tempor ante in dapibus. Curabitur sed lectus tempus, pulvinar magna vel, laoreet sapien. <br /><br />
                        Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus. Etiam hendrerit est viverra eros mollis, a laoreet ante dictum. Aliquam erat volutpat. Vivamus tempor blandit dui vel interdum. Etiam ut libero eget ex sodales lobortis vitae at est. Nulla facilisis velit nec pellentesque commodo. <br /><br />
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat. Proin ut nisi ut ipsum blandit vehicula. Nulla orci eros, ornare vitae tristique et, iaculis nec mauris. Aliquam ornare, turpis sed lobortis ultricies, lectus felis lacinia lacus, et convallis ipsum erat sed tortor. Proin molestie sagittis augue, id sollicitudin libero congue vel. <br /><br />
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat. Proin ut nisi ut ipsum blandit vehicula. Nulla orci eros, ornare vitae tristique et, iaculis nec mauris. Aliquam ornare, turpis sed lobortis ultricies, lectus felis lacinia lacus, et convallis ipsum erat sed tortor. Proin molestie sagittis augue, id sollicitudin libero congue vel.<br /><br />

                    </p>
                </section>
            </main>
            <main className=" grid grid-cols-6 py-10">
                <section className=" col-span-1">
                </section>
                <section className=" col-span-5">
                    <p className=" leading-7 text-lg  " >
                        Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus tempor ante in dapibus. Curabitur sed lectus tempus, pulvinar magna vel, laoreet sapien. <br /><br />
                        Nulla bibendum tincidunt ligula, a placerat dolor viverra eget. Maecenas id diam sed ligula facilisis lacinia. Nunc maximus est ut sem varius suscipit. Phasellus vel tellus viverra, lacinia metus et, faucibus tellus. Etiam hendrerit est viverra eros mollis, a laoreet ante dictum. Aliquam erat volutpat. Vivamus tempor blandit dui vel interdum. Etiam ut libero eget ex sodales lobortis vitae at est. Nulla facilisis velit nec pellentesque commodo. Phasellus suscipit sodales magna in vehicula.<br /><br />
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat. Proin ut nisi ut ipsum blandit vehicula. Nulla orci eros, ornare vitae tristique et, iaculis nec mauris. Aliquam ornare, turpis sed lobortis ultricies, lectus felis lacinia lacus, et convallis ipsum erat sed tortor. Proin molestie sagittis augue, id sollicitudin libero congue vel. Suspendisse id elementum nunc. Donec in neque vitae nisl consequat accumsan.<br /><br />
                        Ut ac semper ligula. Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat. Proin ut nisi ut ipsum blandit vehicula. Nulla orci eros, ornare vitae tristique et, iaculis nec mauris. Aliquam ornare, turpis sed lobortis ultricies, lectus felis lacinia lacus, et convallis ipsum erat sed tortor. Proin molestie sagittis augue, id sollicitudin libero congue vel. Suspendisse id elementum nunc. Donec in neque vitae nisl consequat accumsan.<br /><br />
                    </p>
                </section>
            </main>

            <main className=' grid grid-cols-3 gap-3  py-10 '>
                <section className='flex gap-3 '>
                    <div >
                        <IoRemoveOutline size={29} />
                    </div>
                    <div>
                        <p className=' text-xl font-bold leading-8 '>Class aptent taciti sociosqu</p>
                        <p className='leading-5 text-gray-400'>Quisque luctus leo sit amet ante finibus lobortis. Class aptent taciti sociosqu.</p>
                    </div>
                </section>
                <section className='flex gap-3 '>
                    <div >
                        <IoRemoveOutline size={29} />
                    </div>
                    <div>
                        <p className=' text-xl font-bold leading-8 '>Class aptent taciti sociosqu</p>
                        <p className='leading-5 text-gray-400'>Quisque luctus leo sit amet ante finibus lobortis. Class aptent taciti sociosqu.</p>
                    </div>
                </section>
                <section className='flex gap-3 '>
                    <div >
                        <IoRemoveOutline size={29} />
                    </div>
                    <div>
                        <p className=' text-xl font-bold leading-8 '>Class aptent taciti sociosqu</p>
                        <p className='leading-5 text-gray-400'>Quisque luctus leo sit amet ante finibus lobortis. Class aptent taciti sociosqu.</p>
                    </div>
                </section>

            </main>


        </main>
    )
}

export default AboutPage