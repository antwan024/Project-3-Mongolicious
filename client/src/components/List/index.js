import React from "react";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="collection">{children}</ul>
);

export function ListItem({ children }) {
  return (
    <li className="collection-item">
      {children}
      <i className="material-icons">delete_forever</i>
    </li>
  );
}



export function Dropdown({ children }) {
  return (

    <div className="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      {children}
    </select>
    <label>Select sponsored event:</label>
  </div>

  );
}

export function DropItem({children}) {
  return (
        <option value="" selected>{children}</option>
  );
}
