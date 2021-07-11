//This component returns the slider which is used on TeacherForm page
//Used for grading students


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}Â°C`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  const [sliderVal, setSliderVal] = useState(0);

  const handleSlide = (event, val) => {
    props.handleSlider(val);
    console.log(val);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {props.name}
      </Typography>
      <Slider
        style={{ width: "700px" }}
        onChange={handleSlide}
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
    </div>
  );
}
