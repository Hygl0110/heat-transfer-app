import "./CuadraticDataForm.css";

const CuadraticDataForm = (props) => {
  return (
    <div className="cuadraticForm_container">
      <form
        className="cuadraticForm"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="">a: </label>
        <input
          className="input"
          type="number"
          value={props.aValue}
          onChange={props.aChange}
        />
        <label htmlFor="">b: </label>
        <input
          className="input"
          type="number"
          value={props.bValue}
          onChange={props.bChange}
        />
        <label htmlFor="">c: </label>
        <input
          className="input"
          type="number"
          value={props.cValue}
          onChange={props.cChange}
        />
      </form>
    </div>
  );
};

export default CuadraticDataForm;
