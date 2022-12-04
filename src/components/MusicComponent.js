import { Component } from "react";

class Music extends Component {
    

    render() {
        return this.props.isActive && (
            <h1>Import your spotify/youtube playlists here! (WIP)</h1>
        );
    }
}

export default Music;