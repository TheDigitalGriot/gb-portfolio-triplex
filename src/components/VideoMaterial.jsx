import { useVideoTexture } from "@react-three/drei";
import { DoubleSide } from "three";

const VideoMaterial = ({ src }) => {
  const texture = useVideoTexture(src);
  return (
    <meshStandardMaterial side={DoubleSide} map={texture} toneMapped={false} map-repeat={[1, -1]} map-offset={[0, 1]}  />
  );
};

export default VideoMaterial;