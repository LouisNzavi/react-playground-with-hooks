import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Super() {
  const [state, setState] = useState({
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setState({ loading: false });
    }, 10000);
  }, []);

  const { loading } = state;

  return (
    <div>
      {loading ? (
        <h2>Component is loading... </h2>
      ) : (
        <h2>Component is done loading!</h2>
      )}
    </div>
  );
}

export default Super;

//useEffect(), hooks the primary concepts of componentDidMount(), componentDidUpdate() and componentWillUnmount() into a single function
//arguments passed to useEffect()
//anonymous callback function houses the useEffect logic
//an array that takes in a comma-delimited variable called the dependency list
//without the dependecncy the hook will run on every render, this can cause issues
//
