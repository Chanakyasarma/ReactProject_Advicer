import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component{
    state={ advice: '' };
    componentDidMount(){
      this.fetchAdvice();
    };
    fetchAdvice= () =>{
      axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const{advice}=response.data.slip
        this.setState({ advice});
      })
      .catch((error)=>{
        console.log(error);
      });
      gettime=()=>{
        var dt = new Date();
        document.getElementById('date-time').innerHTML=dt;
      }

    }
    render(){
      const{advice}=this.state;
      return(
        
        <div className="app">
          <span id='date-time'></span>
          <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>Give Me An Advice</span>
            </button>
          </div>
        </div>
      );
    }
}
export default App;