
const Panel = () => {
  return (
    <div className=" bg-black py-12 px-4" >

      <p className=" text-5xl leading-9 font-bold text-white">Vendor <br /> Panel</p>
      <div className=" flex flex-col justify-between  py-10    h-screen ">

        <div className="bg-[#314bbf] p-5 space-y-3 rounded-lg ">
          
          <section className=" flex gap-2 px-4 py-4 rounded-lg hover:bg-gray-100   ">
            icon
            <p className=" font-bold">Order</p>
          </section>
          <section className=" flex gap-2 p-4 rounded-lg  bg-white">
            icon
            <p className=" font-bold">Order</p>
          </section>
          <section className=" flex gap-2 p-4 rounded-lg  bg-white">
            icon
            <p className=" font-bold">Order</p>
          </section>
          <section className=" flex gap-2 p-4 rounded-lg  bg-white">
            icon
            <p className=" font-bold">Order</p>
          </section>
         


        </div>

        <div>
          Hello
        </div>

      </div>

    </div>
  )
}

export default Panel