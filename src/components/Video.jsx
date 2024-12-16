import { useRef, useEffect } from "react";
import PropTypes from 'prop-types';

const Video = ({ src, isMuted }) => {
    Video.propTypes = {
        src: PropTypes.string.isRequired,
        isMuted: PropTypes.bool
    }

    const refVideo = useRef(null);

    useEffect(() => {
        if (!refVideo.current) {
            return;
        }

        if (isMuted) {
            refVideo.current.defaultMuted = true;
            refVideo.current.muted = true;
        }
    }, []);

    return (
            <video
                ref={refVideo}
                className="w-[92%] h-auto object-cover rounded-3xl"
                onContextMenu={() => {return false;}}
                autoPlay={true}
                loop={true}
                playsInline
                src={src}
            >
            </video>
    );
}

export default Video;
