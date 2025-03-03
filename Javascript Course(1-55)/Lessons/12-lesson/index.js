//12-lesson
//CRUD
//Read
let obj = [
  { id: 1, year: 2000, name: "Python" },
  { id: 2, year: 2002, name: "Csharp" },
  { id: 3, year: 2003, name: "Swift" },
  { id: 4, year: 2002, name: "Golang" },
  { id: 5, year: 1995, name: "JavaScript" },
  { id: 6, year: 2005, name: "PHP" },
  { id: 7, year: 2006, name: "Java" },
  { id: 8, year: 2001, name: "Fsharp" },
  { id: 9, year: 2000, name: "Assembler" },
];
//sort() changes position of elements filter() throws elemnts and create new array,so we use sort() for read datas
const sortByYear = (example) => {
  let res = example.sort((a, b) => a.year - b.year);
  obj = res;
};
// console.log(sortByYear(obj), obj); //now obj ordered
//Now we sort alphabet order
const sortByAlphabet = (example) => {
  let res = example.sort((a, b) => a.name.localeCompare(b.name));
  obj = res;
};
// console.log(sortByAlphabet(obj), obj);
// let key = "Assembler";
// const getFilter = (type, key) => {
//   let res = obj.filter((value) => value[type].includes(key));
//   console.log(res);
// };
// getFilter("name", "Swift");
// const getFilterId = (type, key) => {
//   let res = obj.filter((value) => value[type] === key);
//   console.log(res);
// };
// getFilterId("id", 3);

// const getFilter = ({ key, value }) => {
//   let res = obj.filter((v) =>
//     `${v[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
//   );
//   obj = res;
// };
// getFilter({ value: 3, key: "id" });
// console.log(obj);
//Delete
const delArrElem = (example, id) => {
  let res = example.filter((value) => value.id !== id);
  obj = res;
};
// console.log(delArrElem(obj, 6), obj); //here id<5 elements deleted or delete sixth element
//Every way changes array we get new array
//Create
//Add datas
const addUser = (example) => {
  obj = [{ ...example, id: obj.length + 1 }, ...obj]; //when id hasn't given data we give thus type
};
// addUser({ id: 41, name: "Go", year: 2020 });
// console.log(obj);
//we don't use push() metod in real projects when we use spread operator it helps indexed
//Update
//Usually update get new data current data
let updateUser = (current, data) => {
  let res = current.map((value) =>
    value.id === data.id ? { ...value, [data.type]: data.value } : value
  );
  obj = res;
};
// updateUser(obj, { id: 2, type: "name", value: "Objective C" });
// console.log(obj);
//we use map because map return whole array
