import PropTypes from "prop-types";
import "./progress-bar.style.css";

function ProgressBar({ width, height, value, max, min, text }) {
    value = value > max ? max : value < min ? min : value;
    return (
        <div
            className="container"
            style={{
                width: `${width}`,
                height: `${height}`,
            }}
        >
            <div
                className="progress-value"
                style={{
                    width: `${value}%`,
                }}
            >
                {text()}
            </div>
        </div>
    );
}

ProgressBar.defaultProps = {
    width: "100%",
    height: "25px",
    min: 0,
    text: () => {},
};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
};

export default ProgressBar;
