import { useState } from "react";

type Props = {
  url?: string | undefined;
  className?: string | undefined;
};

function VideoPlayer({ url, className = "w-full" }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full">
      <video
        src={url}
        onClick={playPause}
        controls={true}
        className={className}
      />
    </div>
  );
}

export default VideoPlayer;
