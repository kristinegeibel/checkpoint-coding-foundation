function filterApiData(apiData, mandatoryKeys) {
  const apiData = [
    {
      id: 1,
      description: "",
      price: 0,
      title: "",
    },
    {
      price: 0,
      tags: [],
    },
    {
      id: 3,
      price: 0,
      title: "",
    },
  ];
}

const filteredData = apiData.filter(function (item) {
  return item.id;
});
//console.log(filteredData);

const onlyId = filteredData.map((item) => {
  return item.id;
});
//console.log(onlyId);

let result = [];
result.push(onlyId);

console.log(result);
