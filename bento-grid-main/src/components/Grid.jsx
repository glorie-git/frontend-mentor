import PropTypes from "prop-types";

const Grid = ({ content, backgroundColor, align }) => {
  return (
    <div
      className="rounded"
      style={{
        boxSizing: "content-box",
        background: `${backgroundColor}`,
        lineHeight: "3.2rem",
        padding: "2rem",
        margin: "30px 5px",
        display: "flex",
        alignItems: `${align ? align : "center"}`,
        flexDirection: "column",
      }}
    >
      {content}
    </div>
  );
};

Grid.propTypes = {
  content: PropTypes.string,
  backgroundColor: PropTypes.string,
  align: PropTypes.string,
};

export default Grid;
