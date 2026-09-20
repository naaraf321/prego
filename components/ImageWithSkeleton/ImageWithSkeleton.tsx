"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWithSkeletonProps = ImageProps & {
  wrapperClassName?: string;
};

export default function ImageWithSkeleton({
  wrapperClassName = "",
  className = "",
  alt,
  onLoad,
  onError,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`image-loader ${loaded ? "is-loaded" : ""} ${failed ? "is-failed" : ""} ${wrapperClassName}`.trim()}
      aria-busy={!loaded && !failed}
    >
      {!loaded && !failed && <div className="image-skeleton" aria-hidden="true" />}

      {failed && (
        <div className="image-fallback" role="img" aria-label={`${alt} unavailable`}>
          <span>PREGO</span>
          <small>Image unavailable</small>
        </div>
      )}

      <Image
        {...props}
        alt={alt}
        className={`skeleton-image ${className}`.trim()}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setFailed(true);
          onError?.(event);
        }}
      />
    </div>
  );
}
