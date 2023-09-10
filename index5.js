function demonstrateTemporalDeadZone() {
    if (true) {
      // This is a block scope
      console.log(myVar); // This will throw a ReferenceError
      let myVar = 42; // Variable declaration and assignment
      console.log(myVar); // This will log 42
    }
  }
  demonstrateTemporalDeadZone();
  