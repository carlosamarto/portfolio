const TitleLine = ({ number, text }) => {
  return (
    <h3 className='titleline'>
      <span className='titleline__number'>{number}</span> {text}
    </h3>
  );
};

export { TitleLine };
