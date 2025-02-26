import {EmojiItemProps} from '../types/emoji-types';

type EmojisListProps = {
    data: EmojiItemProps[],
    difficultyLevelIndice: number
}
/**
 * Function that converts a string - html entity and returns a value.
 * Prevents the need to import a package for a simple project like this one.
 * 
 * @param value String that is a HTML entity that needs to be decoded
 * @returns The value after decoding the HTML entity. Javascript is not returned in case it is sent.
 */
export const parseStringToHtml = (value: string) => {
    const parser = new DOMParser;
    var dom = parser.parseFromString(value, 'text/html');
    return dom.body.getHTML();
};

/**
 * 
 * @param maxNumber Accepts a number to multiply with the random number generated to
 * ensure value is within the upper range
 * @returns a random number 
 */
const getRandomNumber =(maxNumber: number) => {
    return Math.floor(Math.random()*maxNumber);
}

const getRandomIndices = (difficultyLevelIndice:number, arrayLength: number) => {
    const randomNumberSet = new Set<number>();
    for(let i=0;i<difficultyLevelIndice;i++){
        let numberIndex = getRandomNumber(arrayLength);
        if(randomNumberSet.has(numberIndex)){
            i--;
        } else {
            randomNumberSet.add(numberIndex);
        }
    }
    return Array.from(randomNumberSet);
}
//TODO: Get the emojis slice, duplicate and shuffle it via a web worker
export const getEmojisFromList = ({data, difficultyLevelIndice}:EmojisListProps) => {
    const emojiSequenceIndicesArray = getRandomIndices(difficultyLevelIndice, data.length);
    const emojisToShowArray = emojiSequenceIndicesArray.map((index) => data[index]);
    return emojisToShowArray;
}

export  const duplicateEmojisAndShuffle = (emojisArray: EmojiItemProps[]) => {
    const pairedEmojisArray = [...emojisArray, ...emojisArray];
    for (let i = pairedEmojisArray.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairedEmojisArray[i], pairedEmojisArray[j]] = [pairedEmojisArray[j], pairedEmojisArray[i]];
    }
    
    return pairedEmojisArray;
}
