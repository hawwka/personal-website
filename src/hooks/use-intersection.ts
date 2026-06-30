import { useEffect, useRef, useState } from "react";

interface UseIntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersection<T extends Element>({
  freezeOnceVisible = true,
  root = null,
  rootMargin = "0px",
  threshold = 0,
}: UseIntersectionOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const shouldFreeze = freezeOnceVisible && isIntersecting;

    if (!element || shouldFreeze) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [freezeOnceVisible, isIntersecting, root, rootMargin, threshold]);

  return { ref, isIntersecting };
}
