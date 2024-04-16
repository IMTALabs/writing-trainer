/**
 * Converts seconds to MM:SS format
 * @param seconds The number of seconds to convert
 */
export const secondsToMMSS = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
}
