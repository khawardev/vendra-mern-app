import NewProducts from "./NewProducts"

const TrendingProducts = () => {
  return (
      <div className="w-11/12 m-auto mb-10">
      <NewProducts title='Trending Products' Banner={false} grid={'grid-cols-5'} />
      </div>
  )
}

export default TrendingProducts