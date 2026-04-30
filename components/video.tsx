type VideoProps = {
  src: string;
  title?: string;
  poster?: string;
  type?: string;
};

export function Video({ src, title, poster, type = 'video/mp4' }: VideoProps) {
  return (
    <div className="my-4 aspect-video overflow-hidden rounded-md border border-fd-border bg-black">
      <video
        controls
        preload="metadata"
        playsInline
        poster={poster}
        title={title}
        className="h-full w-full"
      >
        <source src={src} type={type} />
        Your browser does not support video playback.
      </video>
    </div>
  );
}
