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
}