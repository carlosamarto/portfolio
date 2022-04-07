const Button = ({ url, text, classes, target, rel, icon }) => {
  return (
    <>
      <div className='button'>
        <a
          href={url}
          target={target}
          rel={rel}
          className={`button__primary ${classes}`}>
          {text}
          {""}
          {icon}
        </a>
      </div>
    </>
  );
};

export { Button };
