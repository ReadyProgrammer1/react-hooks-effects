import React, { useState, useEffect } from 'react'
import RecipeNameRow from '../RecipeNameRow'
import RecipeRow from '../RecipeRow'
import '../styles.css'

export default function RecipeTable() {

  const recipeName = useFormInput('')
  const recipeDirections = useFormInput('')
  const recipeIngredients = useFormInput('')
  useDocumentTitle(recipeName.value)

  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const handleChange = (e) => {
      setValue(e.target.value)
    }
    return {value, handleChange}
  }
  
  function useDocumentTitle(title) {
    useEffect(() => {
      document.title = title
    })
  }

  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>
            <table>
              <thead>
                <tr>
                  <th><h1>Recipe</h1></th>
                </tr>
              </thead>
              <tbody>
                <RecipeNameRow 
                  type='text'
                  label='Name'
                  {...recipeName}
                />
                <RecipeRow
                  type='text'
                  label='Ingredients'
                  {...recipeIngredients}
                />
                <tr><td /><td /><td /><td><hr /></td></tr>
                <RecipeRow
                  type='text'
                  label='Directions'
                  {...recipeDirections}
                />
              </tbody>
            </table>
          </td>
          <td>&nbsp;</td><td>&nbsp;</td>
          <td>
            <div className='recipe'>
              <h1>{recipeName.value}</h1>
              <h4>Ingredients</h4>
              {recipeIngredients.value}<br /><br />
              <h4>Directions</h4>
              {recipeDirections.value}<br /><br />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}