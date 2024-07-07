import './Navstyle.css';
function NavBar(){
    return(
        <div className='BodyNav'>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between', alignItems:'center',height:'60px'/*, backgroundColor:'white'*/}}>
    <h1 style={{color:'black',fontSize:'45px',width:'25%'}}>Ecommerce</h1>

    <div style={{color:'black',display:'flex',justifyContent:'space-evenly',width:'40%',height:'100%',alignItems:'center',padding:'0px'}}>
        <a href="/" className="nav-buttons">Dashboard</a>
        <a href="/error" className="nav-buttons">Add Product</a>
    </div>
  
    </div>
    </div>
    )
}

export default NavBar;