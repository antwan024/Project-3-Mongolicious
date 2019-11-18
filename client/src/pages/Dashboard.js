import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import TaskInput from "../components/TaskInput";

class Achievement extends Component {
  state = {
    achievements: [],
    type: "",
    achivementPoints: 0,
    summary: "",
    date: "",
    earned: ""
  };

  componentDidMount() {
    this.loadAchievements();
  }

  loadAchievements = () => {
    API.getAchievements()
      .then(res =>
        this.setState({
          achievements: res.data,
          type: "",
          achievementPoints: 0,
          summary: "",
          date: "",
          earned: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteAchievement = id => {
    API.deleteAchievement(id)
      .then(res => this.loadAchievements())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <TaskInput />
            <List>
              {this.state.achievements.map(achievement => (
                <ListItem key={achievement._id}>
                  <Link to={"/achievements/" + achievement._id}>
                    <strong>
                      Need: {achievement.achievementPoints} {achievement.type}
                      Achievement: {achievement.summary}
                    </strong>
                  </Link>
                  <h5
                    onClick={() => this.deleteAchievement(achievement._id)}
                    REDEEM
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default Achievement;
