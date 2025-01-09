export const Button = () => {
 
  const handleClick = (e) => e.target.textContent = "OUCH!!!";
  //const handleClick2 = (name) => console.log(`${name} DONT!`);
  return (
 <button onClick={(e) => handleClick(e)}>Click Me</button>
  )
}
