import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const liste=[
  {nom:"Dev1", langage:"PHP", xp:10 , objectID:1},
  {nom:"Dev2", langage:"Julia", xp:5 ,objectID:2},
  {nom:"Dev3", langage:"Scala", xp:3 ,objectID:3},
  {nom:"Dev4", langage:"Solidity", xp:13, objectID:4},
  {nom:"Dev5", langage:"Ruby", xp:5 ,objectID:5},

];


class App extends Component {

  constructor(props){
    super(props);
    //Initialisation de l'état du composant
    this.state={
      "liste": liste,
    }

  }

supprimer(id) {
  let liste2=this.state.liste.filter((el)=> el.objectID!=id)
  this.setState({"liste":liste2});
}
 
 
  render() {
    return (
      <div >
      <h1>Liste des développeurs</h1>
      <table ><tr><td>Nom</td> <td>Langage</td><td>Expérience</td></tr>
      {
        this.state.liste.map((dev)=>{  return <tr key={dev.objectID}>
          <td>{dev.nom}</td>
          <td>{dev.langage}</td>
          <td>{dev.xp}</td>
         
          <td> <button onClick={()=>this.supprimer(dev.objectID)}>Supprimer</button></td>
       </tr>
        })
      }
      </table>

      </div>
    );
  }
}

export default App;
