import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { BrowserRouter as Router,Route,Link} from 'react-router-dom'

function P1(){
    return <>
     <h1>Composant P1</h1>
     <Link to="/p2" >P2</Link>
     <Link to="/p3">P3</Link>
     <a href="p2">P2</a>
     </>
}

function P2(){
    return <h1>Composant P2</h1>
}
function P3(){
    return <h1>Composant P3</h1>
}

ReactDOM.render(<Router><div>
<Route exact path='/' component={P1}/>
<Route path='/p2' component={P2}/>
<Route path='/p3' component={P3}/></div>
</Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
