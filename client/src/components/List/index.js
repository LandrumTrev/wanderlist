import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

// {children} will be a bunch of ListItems
// NOTE the style.css file with multiple styles for custom list-overflow-container
export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

// {children} will be a Link (from React Router) with inner children
// parent sets key={book._id} on each <ListItem key={book._id}>
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
