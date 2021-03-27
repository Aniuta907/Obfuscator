import { deleteWhitespaces, deleteMultilineСomments } from './obfuscator.js' 

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
      `
      const result = deleteMultilineСomments(testString);
      expect(result).toMatch("let a;");    
  });
})