const CurrentModule=(props) => {
    return (
      <div>
        <p> The modules name is {props.name}, the module leader is {props.leader} and this module contains {props.credits} credits. </p>
      </div>
    );
  }

  function Modules() {
    return (
      <div>
        <CurrentModule name="Machine Learning and Data Analytics" leader="Yan Zhang" credits="20"></CurrentModule>
        <CurrentModule name="Front-End Web Development" leader="Fiona Fairlie" credits="20"></CurrentModule>
        <CurrentModule name="Honours Project" leader="JAMES PATERSON" credits="40"></CurrentModule>
        <CurrentModule name="Cloud Platform Development" leader="SAJID NAZIR" credits="20"></CurrentModule>
        <CurrentModule name="Secure Software Development" leader="RICHARD HOLDEN" credits="20"></CurrentModule>
        
      </div>
    );
  }

  const domContainer = document.querySelector("#moduleContainer");
  const root = ReactDOM.createRoot(domContainer);
  root.render(<Modules />);

