import React from "react";

class slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      ganti: false,
    };
    this.timer = setInterval(
      () =>
        this.state.ganti
          ? this.setState({ ganti: false })
          : this.setState({ ganti: true }),
      3000
    );
  }

  render() {
    return (
        <div className="slider">
            {this.state.ganti ? (
              <>
                <h1 style={{fontWeight:"bold"}}>I'm Web Developper</h1>
                <h4>salahuddin</h4>
              </>
            ) : (
              <>
                <h1 style={{fontWeight:"bold"}}>I am Salahuddin</h1>
                <h4>Full-stack web developper</h4>
              </>
            )}
        </div>
    );
  }
}
export default slideshow;
