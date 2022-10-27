const Spinner = () => {
  return (
    <div className="bg-gray pt-4 d-flex align-items-center justify-content-center">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
