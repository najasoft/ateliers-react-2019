import React, {Component}   from 'react';
import {liste} from  '../data/db';

class ListeDev extends Component {
    constructor(props){
        super(props);
 console.log(liste);
        this.state={
          "liste": liste,
        }
    
      }
    
    supprimer(id) {
      let liste2=this.state.liste.filter((el)=> el.objectID!=id)
      this.setState({"liste":liste2});
    }
     

    render(){
        return <div className="container">
             <h1>Liste des développeurs</h1>
      <table className="table table-striped table-responsive"> <thead className="thead-dark"><tr><th scope="col">Nom</th> <th scope="col">Langage</th><th scope="col">Expérience</th> <th scope="col">#</th></tr>
      </thead> <tbody>
      {
        this.state.liste.map((dev)=>{  return <tr key={dev.objectID}>
          <th scope="row">{dev.nom}</th>
          <td>{dev.langage}</td>
          <td>{dev.xp}</td>
         
          <td> <button className="btn btn-primary" onClick={()=>this.supprimer(dev.objectID)}>Supprimer</button></td>
       </tr>
        })
      }
      </tbody>
      </table>

        </div>

    }
}
export default ListeDev;