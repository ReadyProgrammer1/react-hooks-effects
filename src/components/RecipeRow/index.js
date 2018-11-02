import React from 'react'

export default function RecipeRow(props) {
  const label = props.label
  return (
    <tr>
    <td>&nbsp;</td>
    <td><h4>{label}</h4></td>
    <td>&nbsp;</td>
    <td>
      <textarea
        style={{height: '150px', width: '275px'}}
        type={props.type}
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
    </td>
  </tr>
  )
}