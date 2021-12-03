import ReactSlider from "react-slider";
const Slider = ({ onChange }) => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      onChange={onChange}
    />
  );
};
export default Slider;