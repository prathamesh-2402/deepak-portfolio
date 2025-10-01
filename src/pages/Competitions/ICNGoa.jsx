const ICNGoa = () => {
  const media = [
    { id: 'i1', type: 'image', src: '/assets/icn_goa/1.jpg', title: 'Backstage' },
    { id: 'i2', type: 'image', src: '/assets/icn_goa/2.jpg', title: 'Stage Pose' },
    { id: 'i3', type: 'image', src: '/assets/icn_goa/3.jpg', title: 'Stage Pose' },
    { id: 'i4', type: 'image', src: '/assets/icn_goa/4.jpg', title: 'Stage Pose' },
    { id: 'i5', type: 'image', src: '/assets/icn_goa/5.jpg', title: 'Stage Pose' },
    { id: 'i6', type: 'image', src: '/assets/icn_goa/6.jpg', title: 'Stage Pose' },
    { id: 'i7', type: 'image', src: '/assets/icn_goa/7.jpg', title: 'Stage Pose' },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center gap-8 px-[10%] md:text-center mb-[60px]">
        <h1 className="text-[42px] sm:text-[72px] font-semibold mt-[10vh]">ICN GOA - Supershow</h1>
        <h2 className="text-[24px] sm:text-[32px] italic opacity-80">“Moments from the win — stage, sweat, and stories.”</h2>
        <p className="text-[16px] sm:text-[20px] max-w-3xl">
          A collection of photos from ICN Goa Supershow - capturing the physique, and the winning moments.
        </p>
      </div>

      <div className="w-full px-3 md:px-6">
        {(() => {
          const totalCols = 3;
          const total = media.length;
          const base = Math.floor(total / totalCols);
          const extra = total % totalCols; // first `extra` columns get one more
          const counts = Array.from({ length: totalCols }, (_, i) => base + (i < extra ? 1 : 0));

          let start = 0;
          const cols = counts.map((count) => {
            const slice = media.slice(start, start + count);
            start += count;
            return slice;
          });

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cols.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map((m) => (
                    <figure key={m.id} className="rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                      {m.type === 'image' ? (
                        <img src={m.src} alt={m.title} className="w-full h-auto object-cover" loading="lazy" />
                      ) : (
                        <video src={m.src} className="w-full h-auto object-cover" autoPlay muted loop playsInline />
                      )}
                      {/* <figcaption className="px-3 py-2 text-sm opacity-70">{m.title}</figcaption> */}
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default ICNGoa;


