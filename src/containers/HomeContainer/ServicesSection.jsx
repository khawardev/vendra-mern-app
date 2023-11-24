/* eslint-disable no-unused-vars */
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdPayment } from 'react-icons/md';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GoShieldCheck } from 'react-icons/go';
import { GoPeople } from 'react-icons/go';
import { TbTruckReturn } from 'react-icons/tb';
const ServicesSection = () => {
    const ServicesData = [
        {
            icon: <LiaShippingFastSolid className=' text-yellow-500' size={25} />,
            title: 'International Shipment',
            description: 'Your orders are shipped seamlessly between countries',
        },
        {
            icon: <MdPayment size={25} className=' text-yellow-500' />,
            title: 'Secure Payment',
            description: 'Your payments are secure with our private security network.',
        },
        {
            icon: <AiOutlineDollarCircle size={25} className=' text-yellow-500' />,
            title: 'Great value',
            description: 'We offer competitive prices on over several items.',
        },
        {
            icon: <TbTruckReturn size={25} className=' text-yellow-500' />,
            title: 'Extended 45 day returns',
            description: 'You have the right to return your orders within 45 days.',
        },
        {
            icon: <GoShieldCheck size={25} className=' text-yellow-500' />,
            title: 'Shop with confidence',
            description: 'Our Buyer Protection policy covers your entire purchase journey.',
        },
        {
            icon: <GoPeople size={25} className=' text-yellow-500' />,
            title: 'Help center',
            description: 'Round-the-clock assistance for a smooth shopping experience.',
        },
    ];
    return (
        <>
            <main >
                {ServicesData.map((service, index) => {
                    return (
                        <div key={index} className='border p-4 flex gap-5 select-none'>
                            <section>
                                {service.icon}
                            </section>
                            <section className='leading-5'>
                                <h1 className='font-bold text-gray-800 mb-1'>{service.title}</h1>
                                <p className='text-gray-400 text-sm'>{service.description}</p>
                            </section>
                        </div>
                    );
                })}
                <main className=' mt-10 relative    '>
                    <section className='absolute  top-12 left-9 '>
                        <div className='flex'>
                            <p className='px-3 mb-3  text-sm items-center bg-yellow-500 rounded-full'>IPhone</p>
                        </div>
                        <p className=' font-extrabold text-2xl'>New IPhone</p>
                        <p className='mb-4'>Don&rsquo;t miss out latest oppurtunity</p>
                        <button className='px-4 py-1 text-white text-sm font-semibold rounded-full bg-blue-500'>Shop now</button>
                    </section>
                    <img src={'https://res.cloudinary.com/denajbnh4/image/upload/v1694878173/banner-3_arubwp.jpg'} className='w-full h-[572px]' alt="" />
                </main>
            </main>


        </>
    )
}

export default ServicesSection