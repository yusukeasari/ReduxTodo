import React from 'react'

const App = ({dispatch}) => {
  let input
  return (
	  <div>
	  	Hello Worldaaa!
		<input ref={(node) => {
		  input = node
	    }} />
		<button onCllick={() => {
		  dispatch(test('yea!'))
	  	}}>
		</button>

	  </div>
  )
}

export default App