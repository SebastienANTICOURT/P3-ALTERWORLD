import { useEffect } from "react";

function Boutique(str) {
  const formatString = (str) => {
    // if (str.length !== 8) {
    //     return "Invalid input";
    // }

    let firstPart = str.slice(0, -2);
    let secondPart = str.slice(-2);
    

    return `${firstPart}.${secondPart}`;
  }

  useEffect(() => {
    let inputString = "23591869";
    console.log(formatString(inputString)); // This should output: 23/59/1869
  }, [])
}

export default Boutique
