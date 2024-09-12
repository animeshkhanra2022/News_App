import React from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;

  return (
    <div className="container my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className=" badge rounded-pill bg-danger"
            style={{ left: "90%" }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default NewsItem;
