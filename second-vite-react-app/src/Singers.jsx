function Singers({ name, age }) {
  return (
    <div
      style={{
        border: "2px dotted white",
        margin: "20px",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <p>Name : {name}</p>
      <p>Age : {age}</p>
    </div>
  );
}
export default Singers;
