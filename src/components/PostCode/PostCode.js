import React, { Component } from "react";
import "./PostCode.scss";
import DaumPostcode from "react-daum-postcode";

class PostCode extends Component {
  // 우편번호 기능
  handleComplete = (data) => {
    const { settingPostValue, handlePostChecked } = this.props;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
        // console.log(extraAddress);
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    handlePostChecked();
    settingPostValue(data.zonecode, fullAddress);
  };

  render() {
    const postStyle = {
      position: "fixed",
      backgroundColor: "white",
      padding: "0.3em 0.4em",
      borderRadius: "5px",
      width: "50%",
      height: "60%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    return (
      <div className="PostCode">
        <DaumPostcode
          onComplete={this.handleComplete}
          style={postStyle}
          autoClose={true}
          autoResize={true}
        />
      </div>
    );
  }
}

export default PostCode;
