
const HeaderTableProduct = () => {
  return (
          
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="p-4">
                      <div className="flex items-center">
                          <input
                              id="checkbox-all"
                              type="checkbox"
                              className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor="checkbox-all" className="sr-only">
                              checkbox
                          </label>
                      </div>
                  </th>
                  <th scope="col" className="p-4">
                      Product
                  </th>
                  <th scope="col" className="p-4">
                      Category
                  </th>
                  <th scope="col" className="p-4">
                      Stock
                  </th>
                  <th scope="col" className="p-4">
                     price
                  </th>
                 
                  <th scope="col" className="p-4">
                  Product Description
                  </th>
                 
                  <th scope="col" className="p-4">
                      Actions
                  </th>
              </tr>
          </thead>
  )
}

export default HeaderTableProduct