function SearchBar({ setSearchQuery }) {
     return (
       <input
         type="text"
         placeholder="Search products"
         className="w-full mb-4 px-3 py-2 border rounded-md"
         onChange={(e) => setSearchQuery(e.target.value)}
       />
     );
   }
   
   export default SearchBar;
   