import React, { Component } from "react";

class ImageUpload extends Component {
  state = {
    file: "",
    imagePreviewUrl: ""
  };

  _handleSubmit = e => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  };

  _handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    /* <button type="submit" onClick={this._handleSubmit}>
    Upload Images
  </button>*/
    return (
      <div className="write-upload">
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
        </form>
        {!$imagePreview && <img src={imagePreviewUrl} />}
      </div>
    );
  }
}

export default ImageUpload;
