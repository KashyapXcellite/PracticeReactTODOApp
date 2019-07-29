/**
 * Import are the library and component here to use it in your Component
 */
import React from 'react';
import './static/css/App.css';
import List from './List'

/**
 * @author Kashyap Ashara
 * This is the main Component to export an App
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Default state are initialized in constructor of the component
     */
    this.state = {
      term: {value:''},
      items: [],
      idCounter:0
    };
  }

  /** 
  * onChange event of input textbox box and assigning state for that input textbox.
  * Here the default value for TODO item's done value will be false
  */
  onChange = (event) => {
    let obj={id:this.state.idCounter+1, value:event.target.value, done:false}
    this.setState({term: obj});
  }

  // onSubmit event to add TODO Item in your TODO List Component
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      idCounter: this.state.idCounter+1,
      term:{value:''},
      items: [...this.state.items, this.state.term]
    });
  }

  // change event to edit TODO item value
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

  // event to mark TODO item as done
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

  // event to remove your TODO Item from the TODO List
  deleteItem = (id) => {
    let itemsArray=this.state.items.filter((obj)=>obj.id!==id)
    this.setState({
      items:itemsArray
    })
  }

  /**
   * Here is your render() function which will contain the structure of your Virtual DOM of the component
   */
  render() {
    return (
      <div className="App-background">
        <h3 className="App-Title">MY TO DO LIST</h3>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term.value} className="AddItemInput" onChange={this.onChange} />
          <button className="addBtn">Submit</button>
        </form>
        {/**
          TODO List Component is Render here and all the list of TODO item will be passed as props to the below List Component
         */}
        <List items={this.state.items} changeItemValue={(id,itemValue)=>this.changeItemValue(id,itemValue)} markItemDone={(id)=>this.markItemDone(id)} deleteItem={(id)=>this.deleteItem(id)}/>
      </div>
    );
  }
}

/**
 * Here you have to specify the export App syntax
 */
export default App;
