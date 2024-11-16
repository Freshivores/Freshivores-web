import Image from "next/image";

export default function ProductImage({
  url,
  alt,
}: {
  url: string;
  alt?: string;
}) {
  return (
    <Image
      src={`https://www.freshivores.com/${url}`}
      alt={alt || ""}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy"
      quality={75}
    />
  );
}
