/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  // TODO
  if (numbers.length === 0) return undefined;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { // if remainder when divided by 2 is not 0 -> odd number
      return false;
    }
  }
  return true; // gets true when no odd numbers were found
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  // TODO
  let countOfFood = 0;

  for (let i = 0; i < backpack.length; i++) {
    if (backpack[i].category === 'food') {
      countOfFood++
    }
  }
  return countOfFood >= people;
}
