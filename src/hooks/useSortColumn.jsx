

const useSortColumn = (data) => {

//? Siralanacak local state (sutun verilerinin local state hali)
  const [sortedProducts, setSortedProducts] = useState(data);

    const handleSort = (arg, type) => {
        setToggle({ ...toggle, [arg]: toggle[arg] * -1 });
        setSortedProducts(
          sortedProducts
            ?.map((item) => item)
            .sort((a, b) => {
              if (type === "date") {
                return toggle[arg] * (new Date(a[arg]) - new Date(b[arg]));
              } else if (type === "number") {
                return toggle[arg] * (a[arg] - b[arg]);
              } else {
                if (toggle[arg] === 1) {
                  return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
                } else {
                  return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
                }
              }
            })
        );
      };
  return ;
};

export default useSortColumn;
