import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './App.css'
import DataFetching from "./DataFetching";


function App() {
  return (
    <div className="app" >
      { 
          <div className="item-container">
            <Formularz/>
            <div className="miasta"> 
              <Tabela />
            </div>
          </div>
      }
    </div>
  );
}

function Formularz() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    ReactDOM.render(<DataFetching latitude = {inputs.latitude} longitude = {inputs.longitude} />, rootElement); 

  }

  return (
    <div class="form-style-2">
    <div class="form-style-2-heading"> Podaj współrzędne geograficzne </div>
    <form onSubmit={handleSubmit}>
    <label for="longitude"><span>Długość <span class="required">*</span></span>
      <input 
        value={inputs.longitude || ""} 
        onChange={handleChange}
        class="input-field"
        type="text" 
        name="longitude"
        id="longitude"
      />
      </label>
      <br/>
      <label for="latitude"><span>Szerokość <span class="required">*</span></span>
      <input 
        value={inputs.latitude || ""} 
        onChange={handleChange}
        class="input-field"
        type="text" 
        name="latitude"
        id="latitude"
      />
      </label>
        <br/>
        <input type="submit" />
    </form>
    </div>
  )
}

function Tabela(){
return(
  <table>
  <tr>
    <th>Miasto</th>
    <th>Długość</th>
    <th>Szerokość</th>
  </tr>
  <tr>
    <td>Warszawa</td>
    <td>21.0117800°</td>
    <td>52.2297700°</td>
  </tr>
  <tr>
    <td>Berlin</td>
    <td>13.4105300°</td>
    <td>52.5243700°</td>
  </tr>
  <tr>
    <td>Pekin</td>
    <td>116.3972300°</td>
    <td>39.9075000°</td>
  </tr>
  <tr>
    <td>Madryt</td>
    <td>-3.7025600°</td>
    <td>40.4165000°</td>
  </tr>
</table>
)

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);