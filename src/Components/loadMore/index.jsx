import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMore() {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const[disableButton,setdisableButton]=useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const result = await response.json();
            console.log(result)
          if(result && result.products&& result.products.length){
            setProducts((prevData)=>[...prevData,...result.products]);
            setLoading(false);
        }   
          }
          catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);
    useEffect(()=>{
        if(products&&products.length===100)
            setdisableButton(true)

    },[products])

    if(loading)
    {
        <div>Loading Data</div>    }

    return (
        <>
        <div className="load-more-container">
            <div className="product-container">
                {
                    products&&products.length?products.map(item=>
                        <div className="product" key={item.id}>
                         <img src={item.thumbnail}
                         alt={item.title}
                         />   
                        <p>{item.title}</p> 
                        </div> ):null
                }
            </div>
            <div className="button-container">
            <button disabled={disableButton} onClick={()=>setCount(count+1)}>Load More Products</button>
            </div>
        </div>
        </>
    );
}
