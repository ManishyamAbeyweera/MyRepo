import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'yellow', 'purple', 'green', 'brown', 'blue', 'orange', 'pink']
    const rendomColour = colors[Math.floor(Math.random() * 5)];
    const className = rendomColour + '-text'

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow