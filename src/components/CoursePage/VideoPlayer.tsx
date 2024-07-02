import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

type Props = {
  videoId: string;
};

function VideoPlayer({ videoId }: Props) {
  return (
    <MuxPlayer
      className="w-full mt-10"
      playbackId={videoId}
      accentColor="#F2DD66"
    />
  );
}

export default VideoPlayer;
