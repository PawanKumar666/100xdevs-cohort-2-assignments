/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert both strings to lower case
  const strA = str1.toLowerCase();
  const strB = str2.toLowerCase();

  // If the lengths are not equal, they cannot be anagrams
  if (strA.length !== strB.length) {
    return false;
  }

  // Create a count map for characters in strA
  const str1CountMap = {};

  // Fill the count map with characters from strA
  for (let i = 0; i < strA.length; i++) {
    const char = strA[i];
    if (char in str1CountMap) {
      str1CountMap[char] += 1;
    } else {
      str1CountMap[char] = 1;
    }
  }

  // Check characters in strB against the count map
  for (let i = 0; i < strB.length; i++) {
    const char = strB[i];
    if (char in str1CountMap) {
      if (str1CountMap[char] <= 0) {
        return false;
      }
      str1CountMap[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
