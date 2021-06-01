/**
 * Find out if time is passed.
 * @returns boolean
 */
export function timePassed({ current, duration, showAfter }) {
  if (current === showAfter) {
    return true;
  }
  let percent = (current / duration) * 100;
  if (99.9 < percent) {
    percent = 100;
  }
  return percent >= showAfter;
}
