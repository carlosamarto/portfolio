const Title = ({ number, text }) => {
  return (
    <h3 className="title__line">
      <span className="title__line-number">{number}</span> {text}
    </h3>
  );
};

export { Title };
