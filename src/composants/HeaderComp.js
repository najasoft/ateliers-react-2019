import React , {Component} from 'react';
import {BrowserRoute, Switch, Route,Redirect,NavLink,Link} from 'react-router-dom';
import ListeDev from './ListeDev';
import DetailsDev from './DetailsDev';
import ListeProjets from './ListeProjets';

 class Header extends Component {
render(){
    return <>
    <h1>Test</h1>
    <div className="alert alert-danger">
<Link t='/ListeDev'>Liste Dev</Link>
<Link t='/DetailsDev'>Details Dev</Link>
<Link t='/ListeProjet'>Liste Projets</Link>
</div>
    <Switch>
        <Route path="/DetailsDev"  component={DetailsDev}/>
        <Route path="/ListeDev" component={ListeDev}/>
        <Route path="/ListeProjets" component={ListeProjets}/>

    </Switch>


    </>;
}
 }

 export default Header;