import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * useImageCache is a custom hook for caching image URLs dynamically.
 * 
 * Based on: https://medium.com/@techcoder444/optimizing-image-loading-in-react-with-a-custom-useimagecache-hook-ae8900aae51e
 * This hook is useful for caching images to avoid redundant requests and improve performance.
 *
 * @template T - The type of items being processed.
 * @param items - An array of items that contain image identifiers.
 * @param getImageController - A function that retrieves the image URL based on an image identifier.
 * @param keyExtractor - A function that extracts the image identifier from an item.
 * @returns An object containing the image cache map and a setter function to update the cache.
 */

const useImageCache = <T, K extends string>(
    items: T[],
    getImageController: (key: K) => Promise<string>,
    keyExtractor: (item: T) => K | null
) => {
    const [imageCache, setImageCache] = useState<Map<K, string>>(() => new Map());
    const loadImages = useCallback(async () => {
        const newCache = new Map(imageCache);

        const requests = items
            .map((item) => ({ item, key: keyExtractor(item) }))
            .filter(({ key }) => key && !newCache.has(key))
            .map(async ({ key }) => {
                if (!key) return
                try {
                    const url = await getImageController(key);
                    newCache.set(key, url);
                }
                catch (error) {
                    console.error(`Error loading image: ${key}`, error);
                }
            });
        if (requests.length) {
            await Promise.all(requests);
            setImageCache(newCache);
        }
    }, [items, getImageController, keyExtractor, imageCache]);

    useEffect(() => {
        loadImages();
    }, [loadImages])

    const cachedImages = useMemo(() => imageCache, [imageCache]);
    return { imageCache: cachedImages, setImageCache };
};
export { useImageCache };