class Singleton {
    private static instance: Singleton;
  
    private constructor() {
      // Private constructor prevents instantiation from outside
    }
  
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    public someMethod(): void {
      console.log("Singleton method called");
    }
  }
  
  // Usage
  const singleton = Singleton.getInstance();
  singleton.someMethod();
  