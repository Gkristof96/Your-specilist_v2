import React, { useState } from 'react'

const AutocompleteInput = ({ value, placeholder, setInput, items}) => {
    const [suggestions,setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    // input onChnage method to update the suggestions state
    const changeSuggestions = (e) => {
        const value = e.target.value
        if(value.length > 0) {
            // regex to watch the similarity
            const regex = new RegExp(`^${value}`, "i")
            // save the similar words to the state
            setSuggestions(items.sort().filter((v) => regex.test(v)))
            setShowSuggestions(true)
        }
        setInput(value)
    }

    // Change input about the suggestion
    const suggestionChanged = (value) => {
        if(suggestions.length > 1) {
            setInput(value)
            setSuggestions([])
            setShowSuggestions(false)
        }
        setShowSuggestions(false)
    }

    return (
       <div className='auto-input'>
          <input
            onFocus={() => setInput('')}
            type='text'
            value={value}
            onChange={changeSuggestions}
            placeholder={placeholder}
          />
          {showSuggestions &&
          <ul>
            {suggestions.map((suggestion,index) => (
              <li key={index} onClick={(e) => suggestionChanged(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
          }
       </div>
    )
}

export default AutocompleteInput
