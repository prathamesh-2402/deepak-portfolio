const Gallery = () => {
  const media = [
    // Videos (existing, verified in project)
    { id: 'v1', type: 'video', src: '/assets/icn_mumbai/entry_icn.mp4' },
    { id: 'v2', type: 'video', src: '/assets/icn_mumbai/3.mp4' },
    { id: 'v3', type: 'video', src: '/assets/icn_mumbai/5.mp4' },
    { id: 'v4', type: 'video', src: '/assets/icn_mumbai/6.mp4' },
    { id: 'v5', type: 'video', src: '/assets/gallery/20.mp4' },

    // Photos (landscape + portrait)
    { id: 'p1', type: 'image', src: '/assets/gallery/1.jpeg' },
    { id: 'p2', type: 'image', src: '/assets/gallery/2.jpeg' },
    { id: 'p3', type: 'image', src: '/assets/gallery/3.jpeg' },
    { id: 'p4', type: 'image', src: '/assets/gallery/4.jpeg' },
    { id: 'p5', type: 'image', src: '/assets/gallery/5.jpeg' },
    { id: 'p6', type: 'image', src: '/assets/gallery/6.jpeg' },
    { id: 'p7', type: 'image', src: '/assets/gallery/7.jpeg' },
    { id: 'p8', type: 'image', src: '/assets/gallery/8.jpeg' },
    { id: 'p9', type: 'image', src: '/assets/gallery/9.jpeg' },
    { id: 'p10', type: 'image', src: '/assets/gallery/10.jpeg' },
    { id: 'p11', type: 'image', src: '/assets/gallery/11.jpeg' },
    { id: 'p12', type: 'image', src: '/assets/gallery/12.jpeg' },
    { id: 'p13', type: 'image', src: '/assets/gallery/13.jpeg' },
    { id: 'p14', type: 'image', src: '/assets/gallery/14.jpeg' },
    { id: 'p15', type: 'image', src: '/assets/gallery/15.jpeg' },
    { id: 'p16', type: 'image', src: '/assets/gallery/16.jpeg' },
    { id: 'p17', type: 'image', src: '/assets/gallery/17.jpeg' },
    { id: 'p18', type: 'image', src: '/assets/gallery/18.jpeg' },
    { id: 'p19', type: 'image', src: '/assets/gallery/19.jpeg' },
  ];

  return (
    <div className="min-h-screen w-full text-white py-10 px-3 md:px-6">
      <h1 className="text-3xl md:text-5xl text-light-foreground dark:text-dark-foreground font-semibold text-center mb-10">Physique Gallery</h1>

      {/* Masonry layout using CSS columns for mixed portrait/landscape media */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {media.map((item) => (
          <figure key={item.id} className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 group">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            ) : (
              <video
                src={item.src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            )}
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery