import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="5Vorb0E9Z3M"
            onClose={() => this.setState({ isOpen: false })}
          />
          <img src="/logo192.png" onClick={this.openModal} alt="react logo"/>
        </div>
      </div>
    );
  }
}

export default videoModal;
