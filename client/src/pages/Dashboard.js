import React, { Component } from "react";
import TaskInput from "../components/TaskInput";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class Dashboard extends Component {

      state = {
      events: [],
      eventPoints: "",
      summary: "",
      date: "",
      voucherCode: ""
    };

    componentDidMount() {
      this.loadEvents();
    }

    loadEvents = () => {
      API.getEvents()
        .then(res =>
          this.setState({ events: res.data, eventPoints: 0, summary: "", date: "", voucherCode: "" })
        )
        .catch(err => console.log(err));
    };

    deleteEvent = id => {
      API.deleteEvent(id)
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.summary) {
        API.saveEvent({
          summary: this.state.summary,
          date: this.state.date,
          voucherCode: this.state.voucherCode,
          eventPoints: this.state.eventPoints
        })
          .then(res => this.loadEvents())
          .catch(err => console.log(err));
      }
    };

    handleUserSubmit = event => {
      event.preventDefault();
      if (this.state.summary) {
        API.saveUserEvent({
          summary: this.state.summary
        })
          .then(res => this.loadUserEvents())
          .catch(err => console.log(err));
      }
    };



    render() {
        return (
            <div>
                <form>
                    <Input 
                        value={this.state.summary}
                        onChange={this.handleInputChange}
                        name="summary"
                        placeholder="Enter Completed Event:"
                    />
                    <Input 
                        value={this.state.eventPoints}
                        onChange={this.handleInputChange}
                        name="eventPoints"
                        placeholder="Enter Points Earned:"
                    />
                    
                    <FormBtn 
                        onClick={this.handleFormSubmit}
                    >Commit</FormBtn>
                  
                </form>
            </div>
        );
    }
}

export default Dashboard;

