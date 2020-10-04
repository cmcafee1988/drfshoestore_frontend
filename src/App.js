import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {shoes: []}
  }
  componentDidMount(){
    fetch('http://localhost:8000/api/shoeview')
.then(res => res.json())
  
    .then(data=>this.setState({shoes: data}))

  }
 render(){ 
  return(
    <React.Fragment> 
    <ul>
      {this.state.shoes.map(shoe=>{
        return(
          <>
          <li>
           {shoe.size} 
          </li>
          <li>
         {shoe.manufacturer}
          </li>
          <li>
          {shoe.material}
          </li>
          <li>
          {shoe.color}
          </li>
          <li>
          {shoe.brand_name}
          </li>
          <li>
          {shoe.fasten_type}
          </li>
          <li>
          {shoe.shoe_type}
          </li>
    </>
        )
      })}
     
    </ul>
    </React.Fragment>
  )
}
}

export default App;
