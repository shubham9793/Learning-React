const Container = ({ children }) => {
  return (
    <>
      <div className="card" style={{ width: "70%" }}>
        <div className="card-body">
          <p className="card-text">{children}</p>
        </div>
      </div>
    </>
  );
};

export default Container;
