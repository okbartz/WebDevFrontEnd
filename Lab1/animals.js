const CurrentAnimal=(props) => {
    return (
      <div>
        <p> This is a {props.name} </p>
      </div>
    );
  }
  const Animals=() => {
      return (
        <div>
          <CurrentAnimal name="dog"></CurrentAnimal>
          <CurrentAnimal name="cat"></CurrentAnimal>
          <CurrentAnimal name="mouse"></CurrentAnimal>
        </div>
      );
    }
  
  
  const domContainer = document.querySelector("#animalContainer");
  const root = ReactDOM.createRoot(domContainer);
  root.render(<Animals />);
  