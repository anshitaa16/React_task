function ProductList({ products }) {
     if (products.length === 0) {
       return <p className="text-center text-gray-500">No Product Found</p>;
     }
   
     return (
       <ul className="bg-white p-6 rounded-md shadow-md">
         {products.map((product, index) => (
           <li key={index} className="flex justify-between mb-2">
             <span>{product.name}</span>
             <span>${product.price}</span>
           </li>
         ))}
       </ul>
     );
   }
   
   export default ProductList;
   