const useFilterSearch = (array, search) => {
  // ===== Return Object Complete =====
  return array.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );
  // ===== Return Name of Item =====
  // return array
  //   .map((item) => item.text)
  //   .filter((text) => text.toLowerCase().includes(search.toLowerCase()));
};

export default useFilterSearch;
