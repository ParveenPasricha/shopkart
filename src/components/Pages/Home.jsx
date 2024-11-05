import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className='bg-slate-400 text-2xl text-right '>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/">Home</Link>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Shopping">Shopping</Link>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Cart">Cart</Link>
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Login">Login/SignUp</Link>
        </div>
        <div><h1>HOme</h1></div>
    </>
    
  )
}

export default Home
