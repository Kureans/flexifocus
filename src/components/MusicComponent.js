import { Component } from "react";

class Music extends Component {
    

    render() {
        return this.props.isActive && (
            <iframe
                title="lofi-beats"
                style={{ borderRadius: 12, marginTop: 24, }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator"
                width="100%"
                height="80%"
                frameBorder={0}
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        );
    }
}

export default Music;