
export const  TAB = 9,
LEFT_ARROW =	37,
RIGHT_ARROW = 39,
BACKSPACE = 8,
DELETE = 46,
CMD = 91, // MAC
CTRL = 17, // WIN
C = 67,
V = 86;

export const SPECIAL_CHARACTERS = [" ", "/", "(", ")", "+", "\/", "-"];

export function overwriteCharAtPosition(input: HTMLInputElement, cursorPosition: number, key: string) {
    const currentValue = input.value;
    console.log('currentValue', currentValue);
  
    input.value = 
      currentValue.slice(0, cursorPosition) 
      + key 
      + currentValue.slice(cursorPosition + 1);
    
    console.log('updatedValue', input.value);
  
}
