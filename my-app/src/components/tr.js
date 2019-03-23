import React from 'react';
import PropTypes from 'prop-types';

const Tr = (props) => {
  const {thumbnails, title, descrption, filename} = props.pic;
  return (
    <tr>
      <td>
        <img src={thumbnails.w160} alt={title}/>
      </td>
      <td>
        <h3>{title}</h3>
        <p>{descrption}</p>
      </td>
      <td>
        <a href={filename}>View</a>
      </td>
    </tr>
  );
};

Tr.prototypes = {
  pic: PropTypes.object,
};

export default Tr;
