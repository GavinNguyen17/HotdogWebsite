import React from 'react';
import styles from './stylesheet.module.css'; 

function App2(){
class Website extends React.Component {
  render() {
    return( <h1 className={styles.myheader}>Hotdog</h1>)
    
  }
}
return (
    <div className="App2">
      
      <Website/>
      <center>
      <a id={styles.link} HREF ="https://weekendatthecottage.com/best-hot-dog-recipes/" target="_blank" rel="noopener noreferrer">Hotdog Recipes</a>
      <h3 id={styles.stylish}>Ketchup</h3>
      <h2 className={styles.yell}>Mustard</h2>
      <br/>
      <img src="https://t3.ftcdn.net/jpg/05/85/99/60/360_F_585996070_hzWAqLeQLfgla0tG6njZZBSVmdaY9LhP.jpg" alt="Hotdog Image" />

</center>

    </div>
  );
}
export default App2;