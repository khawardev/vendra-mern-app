import contact from "../assets/images/contact-1.jpg";
import toast from 'react-hot-toast';
import { useState } from "react";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${window.location.origin}/api/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Form submitted successfully");
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Submitted',
        //   text: 'Our Team will contact you soon!',
        // });


        toast.success(() => (
          <div className=" text-center">
            <p >Submitted, Our Team will contact you soon!</p>
          </div>
        ))
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Handle errors, e.g., show an error message
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className=" w-11/12 m-auto md:py-20 py-3">
      {/* <section className='my-10'>
                <div className='flex'>
                    <p className=' text-2xl   text-gray-700 bg-green-200 mb-2 px-5 rounded-full font-bold  '>Pakistan</p>
                </div>
                <div className='px-1'>
                    <p className='text-4xl font-bold  '>Comsats Software house</p>
                    <p className=' text-sm text-gray-600 mb-2'>Comsats University Rd, off GT road،, Sahiwal, Sahiwal District, Punjab 57000</p>
                    <p> (040) 4305005</p>
                    <a href="" className='text-blue-500'>contact@cuisahiwal.com</a>
               </div>
            </section> */}
      <section className="my-10">
        <p className=" text-2xl   text-gray-400 mb-4 font-bold   leading-6">
          You can ask us questions !
        </p>
        <p className=" md:text-5xl text-xl   mb-4 font-bold   leading-6 ">
          We are dedicated to providing exceptional support, assistance to our
          valued customer and partners seeking information or assistance, our
          team is here to help.
        </p>
      </section>

      <section className="md:flex gap-32 py-20 ">
        <div className="w-full flex flex-col justify-between ">
          <p className=" text-xl   mb-10">
            If you have any general inquiries or feedback for us, please dont
            hesitate to get in touch.insights help us enhance the Vendra
            Ecommerce experience for everyone.
          </p>
          <img src={contact} alt="" />
        </div>
        <div className="w-full  md:bg-gray-100 md:p-14   md:mt-0 mt-10">
          <p className="text-3xl  font-extrabold ">Get in Touch</p>
          <p className="text-xl   text-gray-600">
            If you have any query feel free to Contact us
          </p>
          <form onSubmit={handleSubmit}>
            <section className="flex  items-center md:gap-12 gap-5 my-8">
              <section className="w-full">
                <div className="flex">
                  <p className=" mb-2 bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full ">
                    Name
                  </p>
                </div>
                <input
                  type="text"
                  className="w-full py-2 rounded-tr-full border rounded-br-full rounded-bl-full  px-4  focus:border-yellow-500 focus:border  outline-none"
                  name="name"
                  value={formData.name} // Ensure the value is controlled by formData
                  onChange={handleChange} // Attach handleChange to handle input changes
                />
              </section>
              <section className="w-full">
                <div className="flex">
                  <p className="mb-2   bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full">
                    Email
                  </p>
                </div>
                <input
                  type="email"
                  className=" w-full py-2 rounded-tr-full border rounded-br-full rounded-bl-full  px-4  focus:border-yellow-500 focus:border  outline-none"
                  name="email"
                  value={formData.email} // Ensure the value is controlled by formData
                  onChange={handleChange} // Attach handleChange to handle input changes
                />
              </section>
            </section>
            <section className="my-6">
              <div className="flex">
                <p className=" mb-2   bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full">
                  Subject
                </p>
              </div>
              <input
                type="text"
                className="w-full  py-2 rounded-tr-full border rounded-br-full rounded-bl-full  px-4  focus:border-yellow-500 focus:border  outline-none"
                name="subject"
                value={formData.subject} // Ensure the value is controlled by formData
                onChange={handleChange} // Attach handleChange to handle input changes
              />
            </section>
            <section className="my-6">
              <div className="flex">
                <p className=" mb-2   bg-white flex py-1 px-4 border rounded-tr-full  rounded-br-full rounded-tl-full">
                  Message
                </p>
              </div>
              <textarea
                type="text"
                className="w-full py-2   px-4 border  focus:border-yellow-500 focus:border  outline-none"
                name="message"
                value={formData.message} // Ensure the value is controlled by formData
                onChange={handleChange} // Attach handleChange to handle input changes
                id=""
                cols="30"
                rows="10"
              />
            </section>

            <button
              type="submit"
              className="px-4   py-2 bg-yellow-500 rounded-full   text-white font-bold  "
            >
              Send Messege
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
