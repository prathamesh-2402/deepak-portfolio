import { useState } from 'react'
import PropTypes from "prop-types";
import './reels.css'

const DigitalMarketing = () => {
    const reels = [
        { id: 1, url: "./assets/digital-marketing/reels/Bts Reel.mp4", title: "APCA" },
        { id: 2, url: "./assets/digital-marketing/reels/Bloom.mp4", title: "Bloom" },
        { id: 3, url: "./assets/digital-marketing/reels/Bombay_Bappa.mp4", title: "Bloom" },
        { id: 4, url: "./assets/digital-marketing/reels/Bread Reel.mp4", title: "APCA" },
        // { id: 5, url: "./assets/digital-marketing/reels/Bts Reel.mp4", title: "APCA" },
        { id: 5, url: "./assets/digital-marketing/reels/Global-Cafe.mp4", title: "Global Cafe" },
        { id: 6, url: "./assets/digital-marketing/reels/Globalcafe.mp4", title: "Global Cafe" },
        { id: 7, url: "./assets/digital-marketing/reels/Gold Medal.mp4", title: "APCA" },
        { id: 8, url: "./assets/digital-marketing/reels/Sleepy Owl.mp4", title: "Sleepy Owl" },
        { id: 9, url: "./assets/digital-marketing/reels/Sugartistique.mp4", title: "APCA" },
      ];
    
      const photos = [
        { id: 1, url: "/assets/digital-marketing/photoshoot/IMG_1.PNG", title: "Photo 1" },
        { id: 2, url: "/assets/digital-marketing/photoshoot/IMG_2.PNG", title: "Photo 2" },
        { id: 3, url: "/assets/digital-marketing/photoshoot/IMG_3.PNG", title: "Photo 3" },
        { id: 4, url: "/assets/digital-marketing/photoshoot/IMG_4.PNG", title: "Photo 4" },
        { id: 5, url: "/assets/digital-marketing/photoshoot/IMG_5.PNG", title: "Photo 5" },
        { id: 6, url: "/assets/digital-marketing/photoshoot/IMG_6.PNG", title: "Photo 6" },
        { id: 7, url: "/assets/digital-marketing/photoshoot/IMG_7.PNG", title: "Photo 7" },
      ];
    
      const MediaItem = ({ item, type }) => {
        const [isHovered, setIsHovered] = useState(false);
        
        MediaItem.propTypes = {
            item: PropTypes.shape({
              id: PropTypes.number.isRequired,
              url: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }).isRequired,
            type: PropTypes.string.isRequired,
          };

        return (
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            >
              {type === 'reel' ? (
                <video 
                  className="w-full h-96 object-cover"
                  poster={item.url}
                  autoPlay
                  muted
                  loop
                >
                  <source src={item.url} type="video/mp4" />
                </video>
              ) : (
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-96 object-cover"
                />
              )}
            </div>
            
            <div 
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        );
      };
    
      return (
        <div className="relative flex w-screen h-screen bg-black text-white">
          {/* Left Section - Reels */}
          <div className="w-1/2 flex flex-col">
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div>
                {reels.map(reel => (
                  <MediaItem key={reel.id} item={reel} type="reel" />
                ))}
              </div>
            </div>
            <div className="px-4 py-6 sticky bottom-0">
              <div className="text-xl text-right">
                REEL VIDEOS
              </div>
            </div>
          </div>
    
          {/* Right Section - Photos */}
          <div className="w-1/2 flex flex-col">
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <div>
                {photos.map(photo => (
                  <MediaItem key={photo.id} item={photo} type="photo" />
                ))}
              </div>
            </div>
            <div className="px-4 py-6 sticky bottom-0">
              <div className="text-xl">
                PHOTOGRAPHS
              </div>
            </div>
          </div>
        </div>
      );
    };

export default DigitalMarketing