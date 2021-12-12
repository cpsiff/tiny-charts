import ReactSlider from "react-slider";
const Slider = ({ onChange }) => {
  return (
    <ReactSlider
        max={1000}
        min={50}
        defaultValue={800}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={onChange}
    />
  );
};
export default Slider;