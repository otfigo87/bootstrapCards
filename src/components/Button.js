import React from 'react'

const Button = ({url, title}) => {
  return (
      <a href={url} className="btn btn-primary">
        {title}
      </a>
  
  );
}

export default Button