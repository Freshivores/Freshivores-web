import { getPlaiceholder } from "plaiceholder";

export async function getImage(src: string) {
  try {
    const res = await fetch(src);
    
    // Check if response is ok and is an image
    if (!res.ok || !res.headers.get('content-type')?.includes('image')) {
      throw new Error('Invalid image response');
    }

    const buffer = Buffer.from(await res.arrayBuffer());

    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
      ...plaiceholder,
      img: { src, height, width },
    };
  } catch (error) {
    console.error('Error generating placeholder:', error);
    // Return fallback values
    return {
      base64: '',
      img: { src, height: 0, width: 0 },
    };
  }
}
