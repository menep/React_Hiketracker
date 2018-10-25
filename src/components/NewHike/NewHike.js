import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addHike } from "../../state/actions";

const mapDispatchToProps = dispatch => ({
  addHike: hike => dispatch(addHike(hike))
});

class NewHike extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      name: "",
      duration: "",
      rating: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    switch (id) {
      case "name":
        this.setState({ name: value });
        break;
      case "date":
        this.setState({ date: value });
        break;
      case "duration":
        this.setState({ duration: value });
        break;
      case "rating":
        this.setState({ rating: value });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, date, duration, rating } = this.state;
    const id = uuidv1();
    this.props.addHike({ name, date, duration, rating, id });
  }

  render() {
    return (
      <section className="new-hike__container">
        <form className="new-hike__form" onSubmit={this.handleSubmit}>
          <label className="new-hike__label">
            <span className="new-hike__title">Name</span>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="new-hike__input"
            />
          </label>
          <label className="new-hike__label">
            <span className="new-hike__title">Date</span>
            <input
              id="date"
              type="date"
              onChange={this.handleChange}
              className="new-hike__input"
            />
          </label>
          <label className="new-hike__label">
            <span className="new-hike__title">Duration (hours)</span>
            <input
              id="duration"
              type="number"
              onChange={this.handleChange}
              className="new-hike__input"
            />
          </label>
          <label className="new-hike__label">
            <span className="new-hike__title">Rating</span>
            <input
              type="number"
              id="rating"
              min="0"
              max="100"
              onChange={this.handleChange}
              className="new-hike__input"
            />
          </label>
          <input type="submit" value="Submit" className="new-hike__submit" />
        </form>
      </section>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewHike);
