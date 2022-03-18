const Btn = ({ url, text, classes, target, rel, icon }) => {
  return (
    <>
      <div>
        <a href={url} target={target} rel={rel} className={`btn ${classes}`}>
          {text}
          {""}
          {icon}
        </a>
      </div>
    </>
  );
};

export default Btn;
