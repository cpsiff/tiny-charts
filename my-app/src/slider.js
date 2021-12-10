import ReactSlider from "react-slider";
const Slider = ({ onChange }) => {
  return (
    <ReactSlider
        max={800}
        min={100}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        onChange={onChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  );
};
export default Slider;