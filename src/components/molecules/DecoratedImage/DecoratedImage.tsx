import Image from "../../atoms/Image/Image";

interface DecoratedImageProps {
  src: string;
  alt?: string;
}

const DecoratedImage: React.FC<DecoratedImageProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="pt-6 px-8 w-[380px] h-[400px] relative z-10 border-creamy_white border-8 rounded-full shadow-[0_0_40px_#a9744f] hover:shadow-[0_0_25px_#a9744f] transition-shadow duration-300">
        <Image alt={alt} src={src} />
      </div>
    </div>
  );
};

export default DecoratedImage;
