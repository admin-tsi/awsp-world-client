import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

type Props = {
  videoId: string;
};

function VideoPlayer({ videoId }: Props) {
  return (
    <MuxPlayer
      className="w-full mt-10 aspect-video"
      playbackId={videoId}
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
