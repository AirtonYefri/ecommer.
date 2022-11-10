const ItemListContainer = (props) => {
  return (
          
    <section className="item-list-container">
      <h2 className="item-list-container__title">{props.title}</h2>

    </section>
  );
};
ItemListContainer.defaultProps ={
title: 'Mis productos'
}

export default ItemListContainer;
