describe('Dependency Check', () => {
    it('should check if essential dependencies are installed', () => {
      
      let react, reactDom;
  
      try {
        react = require('react');
        reactDom = require('react-dom');
      } catch (error) {
        console.error('Dependency check failed: ', error);
      }
  
      // Check that all the modules are correctly loaded
      expect(react).toBeDefined();
      expect(reactDom).toBeDefined();
      expect(jest).toBeDefined();
    });
  });
  