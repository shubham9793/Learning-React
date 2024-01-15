import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
  };

  const handleSubstraction = () => {
    dispatch({
      type: "SUBSTRACTION",
      payload: {
        num: inputElement.current.value,
      },
    });
  };

  const handleToggal = () => {
    dispatch({
      type: "HANDLETOGGLE",
      payload: {
        num: inputElement.current.value,
      },
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 me-sm-3"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn  btn-warning btn-lg px-4"
          onClick={handleToggal}
        >
          Handle Toggal
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <input
          ref={inputElement}
          className="numberInput"
          type="text"
          placeholder="Enter number"
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn  btn-danger btn-lg px-4"
          onClick={handleSubstraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
