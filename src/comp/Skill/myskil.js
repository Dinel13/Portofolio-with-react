import React from "react";

export default function myskil() {
  return (
    <div className="col-md-5 my-ser-right">
      <div className="col-md-6 col-sm-6 col-xs-12 mb-xs-3 mt-xs-3 stats-grid stats-grid-2" style={{marginTop: "2em"}}>
        <div className="ser-icone green">
          <span className="fa fa-coffee font" aria-hidden="true"></span>
          <div className="counter">505</div>
          <h4>Coffee</h4>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12 mt-3 stats-grid stats-grid-4" style={{marginTop: "2em"}}>
        <div className="ser-icone">
          <span className="fa fa-lightbulb-o font" aria-hidden="true"></span>
          <div className="counter">1001</div>
          <h4>Ideas</h4>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="bar-grids">
        <h6>
          Html<span> 88% </span>
        </h6>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped active"
            style={{ width: "88%" }}
          ></div>
        </div>
        <div className="mid-bar">
          <h6>
            Css<span> 73% </span>
          </h6>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped active"
              style={{ width: "73%" }}
            ></div>
          </div>
        </div>
        <div className="mid-bar">
          <h6>
            Javascript<span>60% </span>
          </h6>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped active"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        <div className="mid-bar">
          <h6>
            React<span>56% </span>
          </h6>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped active"
              style={{ width: "56%" }}
            ></div>
          </div>
        </div>
        <div className="mid-bar">
          <h6>
            MySql<span>68% </span>
          </h6>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped active"
              style={{ width: "68%" }}
            ></div>
          </div>
        </div>
        <div className="mid-bar">
          <h6>
            Node & Express <span>48% </span>
          </h6>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped active"
              style={{ width: "48%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
