// import React, { Fragment } from 'react'
// import { LearnComponent } from './componets/Learncomponent'
// import { Header } from './componets/Header'

import { Student } from "./componets/Student";
import "./css/app.css";
export default function App() {
  return (
    <>
    {/* <Header/>
    <div>App</div>
    <LearnComponent/> */}
    <Student name="George" age={35} MaritalStatus={true} />
    <Student name="Lewis" age={55} MaritalStatus={false} />
    </>
    )
} 
