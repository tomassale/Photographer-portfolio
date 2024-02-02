import ItemFooter from './ItemFooter';

const ItemList = ({ footer }) => {
  return (
    <>
      {footer.map((obj) => (
        <div key={obj.id} className="itemFooter">
          <h3>{obj.title}</h3>
          <hr />
          <ul>
            <ItemFooter footerItem={obj.links} />
          </ul>
        </div>
      ))}
    </>
  );
}

export default ItemList;