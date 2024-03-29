import React from 'react';

export default function Filter({ filters, selectedFilter, onFilterChange }) {
  return (
    <nav>
      <ul>
        {filters.map((item, idx) => {
          return (
            <li key={idx}>
              <input
                type="radio"
                name="filter"
                id={`filter_${idx}`}
                defaultChecked={idx === 0 ? true : false}
                onChange={() => onFilterChange(item)}
              />
              <label htmlFor={`filter_${idx}`}>{item}</label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
