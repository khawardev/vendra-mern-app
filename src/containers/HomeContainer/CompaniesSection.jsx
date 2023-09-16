import CompaniesData from "../../data/CompaniesData";

const CompaniesSection = () => {
   

    return (
        <div className='w-11/12 m-auto'>
            <div className=' my-7 flex items-center justify-between px-5 '>
                {CompaniesData.map((company, index) => (
                    <img key={index} src={company.url} width={120} alt={`Company Logo ${index}`} className='opacity-40 hover:opacity-90 cursor-pointer hover:transition-[2s]  transition-[2s] ' />
                ))}
            </div>
            <hr />
        </div>
    );
};

export default CompaniesSection;
