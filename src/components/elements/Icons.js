const Icons = ({ children, url, classes }) => {
  return (
    <>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={`icons ${classes}`}>
        {children}
      </a>
    </>
  );
};

export { Icons };
