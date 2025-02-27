import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (id) {
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(`Error fetching product data : ${error}`);
        });
    }
  }, [id]);

  if(!product){
    return <h1>Loading ....</h1>
  }

  return <div className="p-5 w-[60%]">

    <button className="mb-5 px-4 py-2 bg-black text-white rounded" onClick={()=>navigate(-1)}>
      Back


    </button>
    <img className="w-[50%] h-auto mb-5" src={product.images.length > 0 ? product.images[0] : '/default-image.jpg'} alt={product.title} />
    <h1 className="text-2xl mb-4 font-bold">{product.title} </h1>
    <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>
    <div className="flex">
      <p>Price : ${product.price}</p>
      <p className="ml-10">Rating: {product.rating}</p>
    </div>



  </div>;
};

export default ProductPage;
