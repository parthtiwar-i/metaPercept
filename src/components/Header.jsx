import React from 'react'

const Header = () => {
  return (
    <div className="navbar">
        <div className="title">
            <p>Title</p>
        </div>
        <div className="navContent">
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <button>Button</button>
        </div>
    </div>
  )
}

export default Header