export const debounce = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number
) => {
    let timer: ReturnType<typeof setTimeout>;

    const debounced = (...args: Parameters<T>) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    return debounced;
};