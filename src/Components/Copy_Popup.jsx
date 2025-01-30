import React from 'react'

const Copy_Popup = ({copied}) => {
  return (
    <section>
        {copied && (
            <div style={{position: 'absolute', bottom: '3rem'}}>Copied to Clipboard</div>
        )}
    </section>
  )
}

export default Copy_Popup