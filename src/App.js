import './App.css';
import React from "react"



class Convert extends  React.Component {
  constructor(props) {
    super(props);
    this.kurs=40;
    this.state = {
        dolar:0,
        grivna:0,
        money:0,
       
    } 
   
}



changeHandler = ({target:{value,dolar,grivna,name,}}) =>{
    this.setState ({    
        [name]:Number(value),
    })
}

changeHandler1 = ({target:{value,name,}}) =>{
  this.setState ({
       [name]:Number(value),  

  })
}



render(){
return (
   <>
 <label>Гривна</label>
 <input type="text" placeholder='Введите количесто гривен' name="grivna" value={this.state.grivna} onChange={this.changeHandler1}></input> 
 <label>Доллар</label>
 <input type="text" placeholder='Введите количество доларов'  name="dolar" value={this.state.grivna/this.kurs} onChange={this.changeHandler}></input>
  </>
)
}


}




export default Convert;