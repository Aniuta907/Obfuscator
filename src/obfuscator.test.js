import { 
  deleteWhitespaces, 
  deleteMultilineСomments, 
  deleteSinglelineСomments, 
  makeDeadCodeInjection, 
  renameVariables,
  randomInteger,
  isNumber,
  isLetter
} from './obfuscator.js';

  describe('obfuscator', () => {
    it('should delete white spaces', () => {
        const result = deleteWhitespaces('this   is  test  string');
        expect(result).toMatch("this is test string");    
    });

    it('should delete multiline comments', () => {
      const testString = `/* функция, удаляющая многострочные комментарии
      abcd
      */
      let a;
      `;
      const result = deleteMultilineСomments(testString);
      expect(result).toMatch("let a;");    
    });

    it('should delete single line comments', () => {
      const testString = "let a; //функция, удаляющая однострочные комментарии";
      const result = deleteSinglelineСomments(testString);
      expect(result).toMatch("let a;");    
    });

    it('should make deadcode injection', () => {
      const testString = "let a;";
      const result = makeDeadCodeInjection(testString);
      expect(result).toContain("let a;");
      expect(result).not.toEqual("let a;");
    });

    it('should rename variables', () => {
      const testString = "let a; var b;";
      const result = renameVariables(testString);
      expect(result).not.toEqual("let a; var b;");
    });

    it('should create random integer', () => {
      const result = randomInteger(100, 300);
      expect(result).toBeGreaterThanOrEqual(100);
      expect(result).toBeLessThanOrEqual(300);
    });

    it('should check if a character is a number', () => {
      let result = isNumber(100);
      expect(result).toBe(true);
      result = isNumber('abc');
      expect(result).toBe(false);
    });

    it('should check if a character is a letter', () => {
      let result = isLetter('a');
      expect(result).toBe(true);
      result = isLetter('100');
      expect(result).toBe(false);
    });
});