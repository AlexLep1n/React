import { TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function celsiusToFahrenheit(e) {
    setCelsius(e.target.value);
    setFahrenheit((e.target.value * 9) / 5 + 32);
  }
  function fahrenheitToCelsius(e) {
    setFahrenheit(e.target.value);
    setCelsius(((e.target.value - 32) * 5) / 9);
  }

  return (
    <div>
      <TextField
        variant="outlined"
        label="Temperature in C"
        helperText={
          isNaN(celsius) || celsius === ""
            ? "Enter the temperature in degrees Celsius"
            : ""
        }
        style={{ marginRight: "20px" }}
        value={celsius}
        onChange={celsiusToFahrenheit}
        error={isNaN(celsius)}
        InputProps={{
          startAdornment: <InputAdornment position="start">C</InputAdornment>,
        }}
      />{" "}
      <TextField
        variant="outlined"
        label="Temperature in F"
        helperText={
          isNaN(fahrenheit) || fahrenheit === ""
            ? "Enter the temperature in degrees Fahrenheit"
            : ""
        }
        value={fahrenheit}
        onChange={fahrenheitToCelsius}
        error={isNaN(fahrenheit)}
        InputProps={{
          startAdornment: <InputAdornment position="start">F</InputAdornment>,
        }}
      />
    </div>
  );
}
