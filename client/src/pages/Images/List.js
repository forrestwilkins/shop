import React, { useState, useEffect } from "react";
import axios from "axios";

import { Spinner } from "react-bootstrap";

import ImageForm from "../../components/Images/Form";

const List = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    axios
      .get("/images/")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      {images ? (
        <>
          <ImageForm />

          {images.map(({ _id, path }) => {
            const url = "/" + path;
            return <img src={url} alt={url} key={_id} />;
          })}
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </>
  );
};

export default List;
