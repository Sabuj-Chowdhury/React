// function Todo({ task ,isDone}) {
//   return <li>Task : {task}</li>;
// }
// conditional rendering
// function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on {task}</li>;
//   }
// }
// function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work on {task}</li>;
// }
// function Todo({ task, isDone }) {
//   return (
//     <li>
//       {" "}
//       {isDone ? "Finish" : "work on"} : {task}
//     </li>
//   );
// }
function Todo({ task, isDone }) {
  return (
    <li>
      {task} {isDone && ": done"}
    </li>
  );
}
export default Todo;
