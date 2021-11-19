import ".styles.css";
import React from "react";
import NameList from "./DisplayName/NameList";



class App extends Component {
  state = {
    names : ["Drew", "Mia","Zay","Aliyah","Mike", "Ray"]
  };

  displayAlert= () => {
    alert("devCodeCamp")
  };

 
  
   render() {
     return (
      <div prsentName = "App">
      <h1> React Component woeksheet 1 </h1>
      <h2> Import relavant component and seed datda if needed!</h2>
      < NameList names= {this.state.names} />

      </div>

    );
  }
}

export default App;
