const ICNMumbai = () => {
  const media = [
    { id: 'v1', type: 'video', src: '/assets/icn_mumbai/3.mp4', title: 'Stage Walk' },
    { id: 'v2', type: 'video', src: '/assets/icn_mumbai/5.mp4', title: 'Backstage Pump' },
    { id: 'v3', type: 'video', src: '/assets/icn_mumbai/6.mp4', title: 'Highlights' },
    { id: 'v4', type: 'video', src: '/assets/icn_mumbai/entry_icn.mp4', title: 'Highlights' },
    { id: 'i1', type: 'image', src: '/assets/icn_mumbai/1.jpg', title: 'Trophy Moment' },
    { id: 'i2', type: 'image', src: '/assets/icn_mumbai/2.jpg', title: 'Final Pose' },
    { id: 'i4', type: 'image', src: '/assets/icn_mumbai/4.jpg', title: 'Final Pose' },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center gap-8 px-[10%] md:text-center mb-[60px]">
        <h1 className="text-[42px] sm:text-[72px] font-semibold mt-[10vh]">ICN MUMBAI - Majestic</h1>
        <h2 className="text-[24px] sm:text-[32px] italic opacity-80">“Pushing limits, owning the stage, earning the medal.”</h2>
        <p className="text-[16px] sm:text-[20px] max-w-3xl">
          Photos and videos from ICN Mumbai, Majestic — showcasing physique, stage presence, and winning shots.
        </p>
      </div>

      <div className="w-full px-3 md:px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {media.map((m) => (
            <figure key={m.id} className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
              {m.type === 'image' ? (
                <img src={m.src} alt={m.title} className="w-full h-auto object-cover" loading="lazy" />
              ) : (
                <video src={m.src} className="w-full h-auto object-cover" autoPlay muted loop playsInline />
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ICNMumbai;


