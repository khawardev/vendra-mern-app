import contact from '../assets/images/contact-1.jpg';
const ContactPage = () => {
    return (
        <main className=" w-11/12 m-auto md:py-20 py-3">
            {/* <section className='my-10'>
                <div className='flex'>
                    <p className=' text-2xl text-gray-700 bg-green-200 mb-2 px-5 rounded-full font-bold'>Pakistan</p>
                </div>
                <div className='px-1'>
                    <p className='text-4xl font-bold'>Comsats Software house</p>
                    <p className=' text-sm text-gray-600 mb-2'>Comsats University Rd, off GT road،, Sahiwal, Sahiwal District, Punjab 57000</p>
                    <p> (040) 4305005</p>
                    <a href="" className='text-blue-500'>contact@cuisahiwal.com</a>
               </div>
            </section> */}
            <section className="my-10">
                <p className=" text-2xl text-gray-600 mb-4">You can ask us questions !</p>
                <p className=" md:text-5xl text-xl  font-bold leading-6  ">We are dedicated to providing exceptional support, assistance to our valued customer and partners  seeking information or assistance, our team is here to help.</p>
            </section>


            <section className='md:flex gap-32 items-center py-10 '>
                <div className='w-full '>
                    <p className=' text-xl mb-10'>If you have any general inquiries or feedback for us, please dont hesitate to get in touch.insights help us enhance the Vendra Ecommerce experience for everyone.</p>
                    <img src={contact} className='rounded-xl' alt="" />
                </div>
                <div className='w-full  md:bg-gray-100 md:p-14  rounded-xl md:mt-0 mt-10'>
                    <p className='text-3xl  font-extrabold '>Get in Touch</p>
                    <p className='text-xl text-gray-600'>If you have any query feel free to Contact us</p>
                    <form action="">
                        <section className='flex  items-center md:gap-12 gap-5 my-8'>
                            <section className='w-full'>
                                <div className='flex'>
                                    <p className=' mb-2 bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full ' >Name</p>
                                </div>
                                <input type="text" className='w-full py-2 rounded-tr-full border rounded-br-full rounded-bl-full  px-4  focus:border-yellow-500 focus:border  outline-none' name="" id="" />
                            </section>
                            <section className='w-full'>
                                <div className='flex'>
                                    <p className='mb-2   bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full' >Email</p>
                                </div>
                                <input type="email" className=' w-full py-2 rounded-tr-full border rounded-br-full rounded-bl-full  px-4  focus:border-yellow-500 focus:border  outline-none' name="" id="" />
                            </section>

                        </section>
                        <section className='my-6'>
                            <div className='flex'>
                                <p className=' mb-2   bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full' >Subject</p>
                            </div>
                            <input type="text" className='w-full  py-2 rounded-tr-full border rounded-br-full rounded-bl-full  px-4  focus:border-yellow-500 focus:border  outline-none' name="" id="" />
                        </section>
                        <section className='my-6'>
                            <div className='flex'>
                                <p className=' mb-2   bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full' >Message</p>
                            </div>
                            <textarea type="text" className='w-full py-2   px-4 border  focus:border-yellow-500 focus:border  outline-none' name="" id="" cols="30" rows="10" />
                        </section>



                        <button type="submit" className='px-4   py-2 bg-yellow-500 rounded-tr-full  rounded-br-full rounded-bl-full text-white font-bold'>Send Messege</button>

                    </form>
                </div>
            </section>



        </main>
    )
}

export default ContactPage