import { BsArrowRightShort } from 'react-icons/bs';


const NewProducts = () => {
    return (
        <>
            <main>
                <section className="flex justify-between items-center mb-3">
                    <p className="text-2xl font-extrabold">New Products</p>
                    <p className="text-sm cursor-pointer  text-blue-500 flex gap-1 items-center">View more < BsArrowRightShort size={20} /></p>
                </section>
                <hr />
            </main>




        </>
    )
}

export default NewProducts