import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export default function InputField({ label, isPassword, type, name, onChange, error, value, errorMessage }) {

  const handleChange = (event) => {
    onChange(event)
  };

  const handleClickShowPassword = () => {
    // setValues({
    //   ...values,
    //   showPassword: !values.showPassword,
    // });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          error={!!error}
          endAdornment={
            isPassword && (<InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {true ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>)

          }
          label={label}
        />
        {error && (
          <FormHelperText error id="name">
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    </>
  )
}
InputField.prototype={
  label: PropTypes.element.isRequired,
  type:PropTypes.element.isRequired,
  name:PropTypes.element.isRequired
}