import React, { useState, useEffect } from "react";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
    // We're done fetching our data so isLoading == false
    setIsLoading(false);      
    }, 3000)
});

  if (isLoading) {
    return <h2>Houston, we might have a problem.</h2>
  } else {
    return <h2>We have lift off!</h2>;
  }
  
};

export default MultipleReturns;
