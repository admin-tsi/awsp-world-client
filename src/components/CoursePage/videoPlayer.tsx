import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

type Props = {};

function VideoPlayer({}: Props) {
  return (
    <MuxPlayer
      className="w-full md:w-4/6 mt-10"
      playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
      accentColor="#F2DD66"
      metadata={{
        video_id: 'video-id-54321',
        video_title: 'Test video title',
        viewer_user_id: 'user-id-007',
      }}
    />
  );
}

export default VideoPlayer;
