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
    const { id, value } = event.target;
    this.setState(() => ({ [id]: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addHike({ ...this.state, id: uuidv1() });
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
