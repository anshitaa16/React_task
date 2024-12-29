import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      onAddProduct({ name, price });
      setName("");
      setPrice("");
    }
  };

  return (
    <form
      className="bg-white p-6 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-bold mb-4">Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        className="w-full mb-4 px-3 py-2 border rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="w-full mb-4 px-3 py-2 border rounded-md"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
