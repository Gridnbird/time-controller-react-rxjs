import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../utils/timeFormat';

export const TimeControllers = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <div>
    <header className="header">
      <h1 className="time-controller headline">
        Time Controller
      </h1>
      <h1 className="time-controller indicator">
        {setTimeFormat(time)}
      </h1>
    </header>
    <section className="main">
      <div className="container">
        <button type="button" className="button color" onClick={start}>
          Start
        </button>
        <button type="button" className="button color" onClick={stop}>
          Stop
        </button>
        <button type="button" className="button color" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button color" onClick={wait}>
          Wait
        </button>
      </div>
    </section>
  </div>
);

TimeControllers.propTypes = {
  time: PropTypes.number.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
};
