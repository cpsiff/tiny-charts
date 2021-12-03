import ReactSlider from "react-slider";
const Slider = ({ onChange }) => {
  return (
    <ReactSlider
        max={800}
        min={250}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={onChange}
    />
  );
};
export default Slider;