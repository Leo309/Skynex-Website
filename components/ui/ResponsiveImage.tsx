'use client';

import React from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';

type ResponsiveImageProps = {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'custom';
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
};

export default function ResponsiveImage({
  src,
  alt,
  aspectRatio = 'video',
  width,
  height,
  priority = false,
  className = '',
}: ResponsiveImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  
  // 根据不同屏幕尺寸设置图像大小
  const sizes = React.useMemo(() => {
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  }, []);
  
  // 设置默认宽高比
  const getAspectRatio = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-w-1 aspect-h-1';
      case 'video':
        return 'aspect-w-16 aspect-h-9';
      case 'wide':
        return 'aspect-w-21 aspect-h-9';
      case 'custom':
        return '';
      default:
        return 'aspect-w-16 aspect-h-9';
    }
  };
  
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-lg ${getAspectRatio()} ${className}`}
    >
      {isInView || priority ? (
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 675}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          className="object-cover w-full h-full transition-all duration-300 ease-in-out hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      )}
    </div>
  );
}
