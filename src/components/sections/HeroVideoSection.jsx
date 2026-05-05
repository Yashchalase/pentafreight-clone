import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeInUp } from "../../utils/animations";

// Local copy in /public (Vite serves as root URL)
const VIDEO_SRC = "/homevideo-bpwZoUMP.mp4";
const FALLBACK_IMAGE_SRC = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000";

export default function HeroVideoSection() {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || videoFailed) return;
    const p = v.play();
    if (p !== undefined) {
      p.catch(() => setVideoFailed(true));
    }
  }, [videoFailed]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <motion.div
        className="relative h-screen min-h-[520px] w-full"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {videoFailed ? (
          <img
            src={FALLBACK_IMAGE_SRC}
            alt="Penta Freight"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/10" />
      </motion.div>
    </section>
  );
}

