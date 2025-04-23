export function sortSentence(sentence: string): string {
  const words: string[] = sentence.split(' ');
  const sortedWords = new Array<string>(words.length);

  for (const word of words) {
      const index = parseInt(word[word.length - 1]) - 1
      sortedWords[index] = word.slice(0, -1);
  }
  return sortedWords.join(' ');
}