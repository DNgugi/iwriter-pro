import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const usestyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChange,
  };
};

export const Form = (props) => {
  const classes = usestyles();
  return <form className={classes.root}>{props.children}</form>;
};
