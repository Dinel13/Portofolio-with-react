import React from "react";
import Myservice from "./myservice";

export default function datame() {
  return (
    <div className="my-data">
      <div className="col-md-6 my-datas">
        <h3>My Personal Data</h3>
        <table>
          <tr>
            <td>
              <b>Name </b>
            </td>
            <td>: salahuddin</td>
          </tr>
          <tr>
            <td>
              <b>Phone </b>
            </td>
            <td>: +6282346462345</td>
          </tr>
          <tr>
            <td>
              <b>Hobby </b>
            </td>
            <td>: Riding and reading</td>
          </tr>
          <tr>
            <td>
              <b>Email </b>
            </td>
            <td>
              <a href="dinel13.github.io">: salah.huddiin@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td>
              <b>Website </b>
            </td>
            <td>
              <a href="dinel13.github.io">: dinel13.github.io</a>
            </td>
          </tr>
        </table>
      </div>
      <Myservice></Myservice>

    </div>
  );
}
