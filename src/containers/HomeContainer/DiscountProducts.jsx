import NewProducts from "./NewProducts"

const DiscountProducts = () => {
  return (
    <div className="w-11/12 m-auto mb-28">
      <NewProducts viewmore={true} title='Discounted items' Banner={false} grid={'lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} discount={true} />
    </div>
  )
}

export default DiscountProducts