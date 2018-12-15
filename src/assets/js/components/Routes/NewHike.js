import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addHike } from "../../state/actions";
import moment from "moment";
import fire from "../../firebase/firebase";

const mapDispatchToProps = dispatch => ({
  addHike: hike => dispatch(addHike(hike))
});

class NewHike extends React.Component {
  constructor() {
    super();
    this.state = {
      hike: {
        date: "",
        name: "",
        duration: "",
        rating: ""
      },
      redirect: false
    };
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState(state => ({ hike: { ...state.hike, [id]: value } }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const id = uuidv1();
    const { date, name, duration, rating } = this.state.hike;
    fire
      .database()
      .ref("hikes")
      .update({
        [id]: {
          date: moment(date).format("DD / MM / YYYY"),
          name,
          duration,
          rating
        }
      });
    this.setState(() => ({ redirect: true }));
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
    if (this.state.redirect) {
      // after the submission, state will be updated so that the page can be redirected to the list of stored hikes
      return <Redirect to="/my-hikes" />;
    }
    return (
      <section className="new-hike__container">
        <form className="new-hike__form" onSubmit={e => this.handleSubmit(e)}>
          {this.getForm().map(item => (
            <label key={item.id} className="new-hike__label">
              <span className="new-hike__title">{item.label}</span>
              <input
                type={item.type}
                id={item.id}
                value={this.state[item.id]}
                onChange={e => this.handleChange(e)}
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
