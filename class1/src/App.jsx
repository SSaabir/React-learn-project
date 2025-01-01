import List from "./List";

 function App() {
   const fruits = [
      {id:101, name:"apple", calories: 95},
      {id:102, name: "mango", calories: 54}, 
      {id:103, name:"pine", calories: 37}];
      
      const vegitables = [
         {id:105, name:"carrot", calories: 295},
         {id:106, name: "celery", calories: 514}, 
         {id:107, name:"leaks", calories: 373}];
         
   return (
      <>
   {fruits.length > 0 && <List item={fruits} category="Fruits"/>}
   {vegitables.length > 0 && <List item={vegitables} category="Vegitables " />}
   </>
  )
}
export default App;