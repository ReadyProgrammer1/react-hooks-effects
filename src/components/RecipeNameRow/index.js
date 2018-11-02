import React from 'react'

export default function RecipeNameRow(props) {
  const label = props.label
  return (
    <tr>
      <td>&nbsp;</td>
      <td><h4>{label}</h4></td>
      <td>&nbsp;</td>
      <td>
        <input
          type={props.type}
          value={props.value}
          onChange={(e) => props.handleChange(e)}
          style={{width: '275px'}}
        />
      </td>
    </tr>
  )
}