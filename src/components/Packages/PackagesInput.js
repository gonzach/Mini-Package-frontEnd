import React from 'react'

class Booking extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      inputPackageNumber: '',
      inputReceiver: '',
      inputPhoneNumber: '',
      inputWeight: '',
      bookingList: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/booking", {mode: 'cors'}).then(res => res.json()).then(res => console.log(res))
  }

  handleInputChange = (event) => {
    this.setState({ inputPackageNumber: event.target.value});
    this.setState({ inputReceiver: event.target.value});
    this.setState({ inputPhoneNumber: event.target.value});
    this.setState({ inputWeight: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state);
    this.setState({inputPackageNumber: '',  inputReceiver: '', inputPhoneNumber: '', inputWeight: ''})
  };

  render() {
    return (
        <div>
          <div>
            <h1>Book A pickUP</h1>
            <span>Package number:</span><input type="text" value={this.state.inputPackageNumber} onChange={this.handleInputChange}/><br/>
            <span>Receiver</span><input type="text" value={this.state.inputReceiver} onChange={this.handleInputChange}/><br/>
            <span>Phone Number:</span><input type="text" value={this.state.inputPhoneNumber} onChange={this.handleInputChange}/><br/>
            <span>Weight</span><input type="text" value={this.state.inputWeight} onChange={this.handleInputChange}/><br/>
            <button>BOOK</button>
          </div>
        </div>
    )
  }
}

export default Booking;
