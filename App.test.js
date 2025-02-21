describe('Dependency Check', () => {
    it('should check if essential dependencies are installed', () => {
      
      let react, reactDom, jest;
  
      try {
        react = require('react');
        reactDom = require('react-dom');
        jest = require('jest');
      } catch (error) {
        console.error('Dependency check failed: ', error);
      }
  
      // Check that all the modules are correctly loaded
      expect(react).toBeDefined();
      expect(reactDom).toBeDefined();
      expect(jest).toBeDefined();
    });
  });
  