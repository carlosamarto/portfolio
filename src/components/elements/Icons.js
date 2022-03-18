const Icons = ({ children, url, classes }) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`icons__links ${classes}`}
      >
        {children}
      </a>
    </>
  );
};

export default Icons;
