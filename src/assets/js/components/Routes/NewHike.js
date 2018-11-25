import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addHike } from "../../state/actions";
import moment from "moment";

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
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState(() => ({ [id]: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addHike({
      ...this.state,
      date: moment(this.state.date).format("DD / MM / YYYY"),
      id: uuidv1()
    });
  }

  getForm() {
    return [
      {
        type: "text",
        id: "name",
        label: "Name",
        placeholder: "Where did you hike?"
      },
      {
        type: "date",
        id: "date",
        label: "Date",
        max: moment().format("YYYY-MM-DD")
      },
      {
        type: "number",
        id: "duration",
        label: "Duration",
        placeholder: "In hours"
      },
      {
        type: "number",
        id: "rating",
        label: "Rating",
        min: 1,
        max: 5,
        placeholder: "A value between 1 and 5"
      }
    ];
  }

  render() {
    return (
      <section className="new-hike__container">
        <form className="new-hike__form" onSubmit={(e) => this.handleSubmit(e)}>
          {this.getForm().map(item => (
            <label key={item.id} className="new-hike__label">
              <span className="new-hike__title">{item.label}</span>
              <input
                type={item.type}
                id={item.id}
                value={this.state[item.id]}
                onChange={(e) => this.handleChange(e)}
                className="new-hike__input"
                min={item.min}
                max={item.max}
                placeholder={item.placeholder}
                required
              />
            </label>
          ))}
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
