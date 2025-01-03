class Controls {
  
    constructor() {
      this.left = false;
      this.right = false;
      this.forward = false;
      this.reverse = false;
  
      // Initialize the private field
      this.#addKeyboardListeners();
    }
  
    // Define the private method
    #addKeyboardListeners() {
      document.onkeydown = (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = true;
            break;
          case "ArrowRight":
            this.right = true;
            break;
          case "ArrowUp":
            this.forward = true;
            break;
          case "ArrowDown":
            this.reverse = true;
            break;
        }
      };
  
      document.onkeyup = (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = false;
            break;
          case "ArrowRight":
            this.right = false;
            break;
          case "ArrowUp":
            this.forward = false;
            break;
          case "ArrowDown":
            this.reverse = false;
            break;
        }
      };
    }
  }