export const createImageComponent = ({ src, alt }: { src: string; alt: string }) => {
  return (props: React.HTMLAttributes<HTMLImageElement>) => {
    return <img src={src} alt={alt} {...props} />;
  };
};
