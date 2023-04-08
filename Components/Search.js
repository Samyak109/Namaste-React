export default Search = () => {
  let searchText = "CHAITANYA PARATHAS";
    return (
    <div className="search-container">
      <input
        type="search"
        className="search-input"
        id="search"
        placeholder="Search Restaurant"
        value={searchText}
        onChange={(e) => {
            console.log(e.target.value);
            e.target.value = "JAIN RESTAURANT";
            searchText = "JAIN RESTAURANT";
        }}
      />
      <button>Search</button>
    </div>
  );
};
