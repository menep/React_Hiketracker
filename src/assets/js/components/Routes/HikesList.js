import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchHikes } from "../../state/actions";

const mapStateToProps = state => ({ hikes: state.hikes });
const mapDispatchToProps = dispatch => ({
  fetchHikes: () => dispatch(fetchHikes())
});

class HikesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hikes: {}
    };
  }

  componentDidMount() {
    this.props.fetchHikes();
    this.setState(() => ({
      hikes: this.props.hikes
    }));
  }

  render() {
    let list = [];
    for (let key in this.props.hikes) {
      const { date, name, duration, rating } = this.props.hikes[key];
      list.push(
        <tr className="hikes__item" key={key}>
          <td className="hikes__date">{date}</td>
          <td className="hikes__name">{name}</td>
          <td className="hikes__duration">{duration}</td>
          <td className="hikes__rating">{rating}</td>
        </tr>
      );
    }
    
    return (
      <main className="hikes__container">
        <table className="hikes__table">
          <thead>
            <tr className="hikes__header">
              <th scope="col">Date</th>
              <th scope="col">Hike Name</th>
              <th scope="col">Duration (hours)</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody className="hikes__list">{list}</tbody>
        </table>
        <Link to="/new-hike" className="hikes__add">
          Add
        </Link>
      </main>
    );
  }
}

HikesList.propTypes = {
  hikes: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HikesList);
