const Footer = ({ length }) => {
  return (
    <footer>
      <p>{length} {length === 1 ? "item" : "items"} in the list</p>
    </footer>
  );
};

export default Footer;
