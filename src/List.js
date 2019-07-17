import React from 'react';

class List extends React.Component{
    
    constructor(props) {
        super(props);
        this.listItems=[]
        this.state = {
          items:this.props.items
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            items:nextProps.items
        })
    }

    markEditable = (id,event) => {
        this.props.changeItemValue(id,event.target.value)
    }

    markDone = (id,event) => {
        this.props.markItemDone(id)
    }

    removeItem = (id,event) => {
        this.props.deleteItem(id)
    } 

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

export default List;