import CompaniesData from "../../data/CompaniesData";

const CompaniesSection = () => {


    return (
        <div className='w-11/12 m-auto  my-7 '>
            <div className=' my-5 grid  lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-3 justify-between   '>
                {CompaniesData.map((company, index) => (
                    <div key={index} className="w-full  flex justify-center items-center">
                        <img src={company.url} width={120} alt={`Company Logo ${index}`} className='opacity-40  hover:opacity-90 cursor-pointer hover:transition-[2s]  transition-[2s] ' />
                    </div>
                    ))}

            </div>
            <hr />
        </div>
    );
};

export default CompaniesSection;
