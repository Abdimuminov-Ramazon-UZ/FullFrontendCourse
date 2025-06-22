// we use here export which importatn datas
export let users = [
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
  { id: 1, name: "ghost" },
];
export const list = [1, 2, 3, 4, 5, 6, 7];
const mentors = () => {
  console.log("Hi,mentors");
};
const students = () => {
  console.log("hi students");
};
export { mentors, students };
const ments = () => {
  console.log("Hi,mentors1");
};
export default ments; //we use export default for const datas so it is only for every code so we use export default one timne in code blocks
