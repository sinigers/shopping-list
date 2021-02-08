import React, { Component } from "react";

class AddDelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  //this is for the onChange (updates state) - everytime the user types something, the updateInput function will run
  //with two inputs (key and value which corresponds to newItem object and the string (which is event.target.value))
  //updateInput then updates the newItem state.
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create the new item with unique id
    //so a state object itself can be assigned new objects to it
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
    };

    //copy current list of items
    const list = [...this.state.list];

    //add new item to the list
    list.push(newItem);

    //update state with new list and reset new item
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    console.log(id);
    //copy list
    const list = [...this.state.list];

    //filter out deleted object
    //remember that the list (each object) gets assigned a value and id when its added to list
    const updatedList = list.filter((item) => item.id !== id);

    //update state
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div id="notebooks">
        <br />
        <input
          id="query"
          type="text"
          placeholder="type the item here"
          //once the input is entered, the object will be assigned a value = user's input
          //we also need this value later for the list also
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <button onClick={() => this.addItem()}>Add</button>
        <br />
        <ul>
          {this.state.list.map((item) => {
            return (
              <li class="product-preview" key={item.id}>
                {item.value}

                <button onClick={() => this.deleteItem(item.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AddDelList;
