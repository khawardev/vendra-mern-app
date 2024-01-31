import NewProducts from "./NewProducts"

const TrendingProducts = () => {
  return (
    <div className="w-11/12 m-auto mb-10">
      <NewProducts url='bestselling' viewmore={true} title='Best Selling Products ' grid={'lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} />
    </div>
  )
}

export default TrendingProducts


