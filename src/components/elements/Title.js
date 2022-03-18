const Title = ({ number, text }) => {
  return (
    <h3 className="title__line">
      <span className="title__number">{number}</span> {text}
    </h3>
  );
};

export default Title;
