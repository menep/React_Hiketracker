import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => ({ hikes: state.hikes });

const HikesList = props => {
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
        <tbody className="hikes__list">
          {props.hikes.map(hike => (
            <tr className="hikes__item" key={hike.id}>
              <td className="hikes__date">{hike.date}</td>
              <td className="hikes__name">{hike.name}</td>
              <td className="hikes__duration">{hike.duration}</td>
              <td className="hikes__rating">{hike.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/new-hike" className="hikes__add">
        Add
      </Link>
    </main>
  );
};

HikesList.propTypes = {
  hikes: PropTypes.array
};

export default connect(mapStateToProps)(HikesList);
