function Boutique(str) {
  // const formatString = (str) => {
  //   // if (str.length !== 8) {
  //     return "Invalid input";
  // }

  const firstPart = str.slice(0, -2)
  const secondPart = str.slice(-2)

  return `${firstPart}.${secondPart}`
}

//   useEffect(() => {
//     const inputString = "23591869"
//     // This should output: 23/59/1869
//   }, [])
// }

export default Boutique
