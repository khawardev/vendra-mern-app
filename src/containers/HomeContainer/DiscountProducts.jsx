import NewProducts from "./NewProducts"

const DiscountProducts = () => {
  return (
      <div className="w-11/12 m-auto mb-10">
      <NewProducts title='Discounted Products' Banner={false} grid={'grid-cols-5'} discount={true} />
      </div>
  )
}

export default DiscountProducts