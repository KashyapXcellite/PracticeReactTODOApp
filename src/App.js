import React from 'react';
import './static/css/App.css';
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: {value:''},
      items: [],
      idCounter:0
    };
  }

  onChange = (event) => {
    let obj={id:this.state.idCounter+1, value:event.target.value, done:false}
    this.setState({term: obj});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      idCounter: this.state.idCounter+1,
      term:{value:''},
      items: [...this.state.items, this.state.term]
    });
  }

  changeItemValue = (id,itemValue) => {
    let itemsArray=this.state.items
    itemsArray.map((obj)=>{
      if(obj.id===id){
        obj.value=itemValue
      }
      return null
    })

    this.setState({
      items:itemsArray
    })
  }

  markItemDone = (id) => {
    let itemsArray=this.state.items
    itemsArray.map((obj)=>{
      if(obj.id===id){
        obj.done=!obj.done
      }
      return null
    })

    this.setState({
      items:itemsArray
    })
  }

  deleteItem = (id) => {
    let itemsArray=this.state.items.filter((obj)=>obj.id!==id)
    this.setState({
      items:itemsArray
    })
  }

  render() {
    return (
      <div className="App-background">
        <h3 className="App-Title">MY TO DO LIST</h3>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term.value} className="AddItemInput" onChange={this.onChange} />
          <button className="addBtn">Submit</button>
        </form>
        <List items={this.state.items} changeItemValue={(id,itemValue)=>this.changeItemValue(id,itemValue)} markItemDone={(id)=>this.markItemDone(id)} deleteItem={(id)=>this.deleteItem(id)}/>
      </div>
    );
  }
}

export default App;
