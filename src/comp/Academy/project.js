import React from "react";

export default function project({ nilai }) {
  return (
    <>
      <div className={`box ${nilai.wrna}`}>
        <h4>{nilai.thn}</h4>
        <h5>{nilai.nama}</h5>
        <h4>{nilai.des}</h4>
        <div style={{ marginTop: "8px" }}>
          <button
            style={{ marginRight: "14px", marginTop: "10px" }}
            className="btn"
          >
            {nilai.nama === "TodoList App" ? (
              <a href={nilai.situs}>
                <span className="fa fa-android fa-2x"></span> Download
              </a>
            ) : (
              <a href={"http://" + nilai.situs} target="blank">
                <span className="fa fa-television fa-2x"></span> Situs
              </a>
            )}
          </button>
          <button style={{ marginTop: "10px" }} className="btn">
            <a href={"http://" + nilai.github} target="blank">
              <span className="fa fa-github fa-2x"></span> Code
            </a>
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
