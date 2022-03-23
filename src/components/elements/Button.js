const Button = ({ url, text, classes, target, rel, icon }) => {
  return (
    <>
      <div>
        <a href={url} target={target} rel={rel} className={`button ${classes}`}>
          {text}
          {""}
          {icon}
        </a>
      </div>
    </>
  );
};

export { Button };
