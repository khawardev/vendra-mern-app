import Rightbar from "../containers/AdminRights/Rightbar"
import Products from "../containers/AdminRights/Products"
const AdminPage = () => {
    return (
        <div className="w-11/12 m-auto my-12 00">
            <p className=' font-bold   text-6xl  text-center my-20 text-yellow-500'>Admin Panel</p>

            <Rightbar />
            <Products />
        </div>
    )
}

export default AdminPage