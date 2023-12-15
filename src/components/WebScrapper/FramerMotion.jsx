import AnimateWrapper from './AnimateWrapper';
const products = [
    {
        id: 1,
        description: 'Description for Product 1',
    },
    {
        id: 2,
        description: 'Description for Product 2',
    },
    {
        id: 3,
        description: 'Description for Product 3',
    },
    {
        id: 4,
        description: 'Description for Product 4',
    },
    {
        id: 5,
        description: 'Description for Product 5',
    },
    {
        id: 6,
        description: 'Description for Product 6',
    },
    // Add more products as needed
];

const FramerMotion = () => {


    return (
        <div>


            {products.map((product) => (
                <AnimateWrapper transition={{ duration: 1, delay: product.id * .1 }} key={product.id}>
                    <p>{product.description}</p>
                </AnimateWrapper>
            ))}

        </div >
    );
};

export default FramerMotion;
