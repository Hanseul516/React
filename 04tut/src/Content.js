import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} />
      ) : (
        <p style={{ marginTop: "2em" }}>리스트가 비었습니다.</p>
      )}
    </main>
  );
};

export default Content;
