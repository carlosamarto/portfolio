const Btn = ({ url, text, classes, target, rel, icon }) => {
  return (
    <>
      <div>
        <a
          href={url}
          target={target}
          rel={rel}
          className={`inline-block text-paragraph font-moboto font-bold text-red border border-red hover:bg-alt transition-all ease-in-out duration-200 ${classes}`}
        >
          {text}
          {""}
          {icon}
        </a>
      </div>
    </>
  );
};

export default Btn;
