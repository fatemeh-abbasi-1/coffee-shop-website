import { ImageProps } from "./types";

const Image: React.FC<ImageProps> = ({ src, alt = "Image", className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
