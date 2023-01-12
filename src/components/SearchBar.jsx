const SearchBar = (props) => {
   const {onSearch} = props;
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;