import { useState } from "react";
import AddProductForm from "./AddProductForm";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const addProduct = (product) => {
    setProducts((prev) => {
      if (prev.some((p) => p.name === product.name)) {
        alert("Product already exists");
        return prev;
      }
      return [...prev, product];
    });
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        className="mb-6 bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div className="grid gap-6">
        <AddProductForm onAddProduct={addProduct} />
        <SearchBar setSearchQuery={setSearchQuery} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default HomePage;
