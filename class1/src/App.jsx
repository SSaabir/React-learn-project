import { Student } from "./Student";

 function App() {
  return (
 <>
    <Student name="hecrim" age={30} isStudent={true} />
    <Student name="jeremy" age={24} isStudent={false} />
    <Student name="aztec" age={34} isStudent={true} />
    <Student name="nimblenumble" age={67} isStudent={false} />
    <Student />
 </>
  )
}
export default App;