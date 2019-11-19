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

      <div class="input-field col s12 m6">
          <select class="icons">
              <option value="" disabled selected>Choose your option</option>
              <option value="" data-icon="images/sample-1.jpg">{children}</option>
          </select>
      <label></label>
      </div>

  );
}
