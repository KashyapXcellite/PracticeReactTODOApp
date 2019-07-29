import React from 'react';

/**
 * @author Kashyap Ashara
 * This is List Component which item list from its props in this.props.items
 */
class List extends React.Component{
    
    constructor(props) {
        super(props);
        this.listItems=[]
        this.state = {
          items:this.props.items
        };
    }

    /**
     * This function is a Lifecycle of react which will always watch for its props and updated props
     */
    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            items:nextProps.items
        })
    }

    // this function is used to call the function passed in List component as function from parent Component
    markEditable = (id,event) => {
        this.props.changeItemValue(id,event.target.value)
    }

    // this function is used to call the function passed in List component as function from parent Component
    markDone = (id,event) => {
        this.props.markItemDone(id)
    }

    // this function is used to call the function passed in List component as function from parent Component
    removeItem = (id,event) => {
        this.props.deleteItem(id)
    }
    
    /**
    * Here is your render() function which will contain the structure of your Virtual DOM of the component
    */
    render() {
        return (
            <ul>
                {
                    this.state.items.map((item, index) => 
                        <React.Fragment>
                        <li>
                            <div className={item.done?"checked":""} onClick={this.markDone.bind(this,item.id)} style={{padding: "12px 8px 12px 40px"}}>
                                <input className="TodoItemInput" ref={(ref)=>this.listItems[item.id]=ref} key={index} value={item.value} onChange={this.markEditable.bind(this,item.id)} />
                            </div>
                            <span className="close" onClick={this.removeItem.bind(this,item.id)}>x</span>
                        </li>
                        </React.Fragment>
                    )
                }
            </ul>
        );
      }
}

/**
 * Here you have to specify the export List syntax
 */
export default List;