const Img = ({ url }) => {
  return (
    <img
      style={{
        width: "100%",
        flexGrow: "1",
        flexShrink: "0",
        objectFit: "cover",
      }}
      src={url}
      alt="unsplash img"
    />
  );
};

export default Img;
