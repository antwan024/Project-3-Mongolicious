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

export default List;
