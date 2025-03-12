export const Buscar = ({ tragos }) => {
    return (
      <>
        {tragos.length > 0 ? (
          tragos.map((element, index) => (
            <div key={index}>
              <h3>{element.strDrink}</h3>
              <img src={element.strDrinkThumb} alt={element.strDrink} width="100" />
            </div>
          ))
        ) : (
          <p>No se encontraron tragos</p>
        )}
      </>
    );
  };
  