export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>StyledJsx</p>
        <button>Fight</button>
      </div>
      <style jsx="true">
        {`
          .container {
            border: 1px solid #999;
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};
