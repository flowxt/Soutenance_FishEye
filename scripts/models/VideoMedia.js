import Media from "./Media.js";

class VideoMedia extends Media {
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  get mediaLink() {
    return `./assets/media/${this._video}`;
  }

  get mediaContent() {
    const media = document.createElement("video");
    media.setAttribute("alt", `vidéo dont le titre est ${this._title}`);
    media.setAttribute("data-media", this._id);
    media.setAttribute("tabindex", "0");
    media.setAttribute("src", this.mediaLink);
    media.setAttribute("muted", "");
    // media.setAttribute('autoplay', '');
    // media.setAttribute('loop', '');
    return media;
  }
}

export default VideoMedia;
