import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Delete } from "@material-ui/icons";

const List = ({ images }) => {
  const deleteImage = (id) => {
    axios
      .delete(`/images/${id}`)
      .then((res) => {})
      .catch((err) => {
        alert("Was not able to delete the image.");
      });
  };

  return (
    <>
      {images
        .slice()
        .reverse()
        .map(({ _id, path }) => {
          return (
            <div key={_id}>
              <img
                src={"/" + path}
                alt={path}
                style={{ width: 300, display: "block" }}
              />

              <Delete
                onClick={() =>
                  window.confirm(
                    "Are you sure you want to delete this image?"
                  ) && deleteImage(_id)
                }
                style={{ cursor: "pointer", marginBottom: 12 }}
              />
            </div>
          );
        })}
    </>
  );
};

List.propTypes = {
  images: PropTypes.array.isRequired,
};

export default List;
