import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
  getStyle = () => {
    return {
      color: this.color,
      textAlign: "center",
      fontSize: "15px",
    };
  };
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
  getStyle = () => {
    return {
      color: this.color,
      margin: "10px auto",
      textAlign: "center",
      fontSize: "20px",
    };
  };
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
  getStyle = () => {
    return {
      color: this.color,
      margin: "10px auto",
      fontSize: "20px",
    };
  };
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#FFFF00";
  }
  getStyle = () => {
    return {
      color: this.color,
      margin: "150px auto",
      fontSize: "20px",
    };
  };
}

export { InfoAlert, ErrorAlert, WarningAlert, OfflineAlert };
