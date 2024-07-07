import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './HomeStyle.css';
function HomePage(){


  let [result, setResult] = useState();
  const loadData = async() => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setResult(response.data)
    console.log(result)
    
  }

  useEffect(() =>{
    loadData();
    },[]);

    return(
        <div className='BodyHome'>
            <div>
  <div style={{ height: '125px' }} />
  <div style={{ height: "100%", width: "100%" }}>
    <h2
        style={{
          margin: '20px',
          fontFamily: "monospace",
          fontSize: '52px',
          paddingTop: '5px',
          paddingLeft: '5px'
        }}
      >
        Products
      </h2>
    <div
      style={{
        backgroundColor:'white',
        margin:'0px 40px',
        height:'1000px',
        display:'flex',
        padding:'40px',
        justifyContent: 'space-evenly',
        alignItems:'space-between',
        flexWrap: 'wrap',
        padding: '20px',
        paddingTop: '40px'
      }}>

        {
          result?.map((product) => (
            <div className='prods'>
              <img src={product.image} alt="product image" style={{
                backgroundColor:'#6f6f6f',
                width:'300px',
                height:'300px',
                borderRadius: '12px'}}/>
              <h1>{product.title}</h1>
              
              <h2>${product.price}</h2>
              <span>
                {product.description}
                </span>
              <h3>Rating:{product.rating.rate}stars {product.rating.count} responeses</h3>
             </div>
         ))
        }

    </div>
  </div>
</div>

        </div>
    )
}

export default HomePage;