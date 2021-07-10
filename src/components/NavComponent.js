import React from 'react'

const navBarStyles = {
  color: "red",
  fontsize: "20px"
}



function NavComponent() {
    return (
      <div>
        <nav style={navBarStyles}>
          <ul>
            <li>Smamdfjn</li>
          </ul>
        </nav>
      </div>
    );
  }

export default NavComponent;