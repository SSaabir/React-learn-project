import React from 'react'
import propType from 'prop-types'

export const Student = (props) => {
  return (
    <div className='Student'>
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>isMarried</th>
                <td>{props.MaritalStatus?"yes":"no"}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
};

Student.propType = {
    name: propType.string,
    age: propType.int,
    MaritalStatus: propType.bool
}
