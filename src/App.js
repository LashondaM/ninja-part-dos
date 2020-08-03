import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    // ninjaBoyz is the name of the original array
    ninjaBoyz : [
      { name: 'Eddy', age: 27, brace: 'blue', id: 1},
      { name: 'EdBoy', age: 36, brace: 'aqua', id: 2},
      { name: 'Ed', age: 15, brace: 'maroon', id: 3}
    ]
  }
  taste = (york) => {
    york.id = Math.random();
    let yorks = [...this.state.ninjaBoyz, york]
    this.setState({
      ninjaBoyz: yorks
    })
  }
  deleteNinja = (id) => {
    let oreo = this.state.ninjaBoyz.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjaBoyz: oreo
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('Component Updated');
    console.log(prevProps, prevState)
  }
  render() {
    return(
      <div className="App">
        <h1>My first Boy Fran</h1>
        <p>u aint welcome!</p>
        {/* // ponchos is the name that was given propities in the <Ninjas /> tag */}
        <Ninjas deleteMe={this.deleteNinja} ponchos={this.state.ninjaBoyz} />
        <AddNinja foot={this.taste}/>
      </div>
    )
  }
}

export default App;
