function createTimeDrivenTriggers() {
  var start = new Date(2022, 8, 26, 11, 35) 
  var end = new Date(2022, 8, 26)
  ScriptApp.newTrigger('open')
      .timeBased()
      .inTimezone("Asia/Taipei")
      .at(start)
      .create();
  
  // ScriptApp.newTrigger('close')
  //     .timeBased()
  //     .at(end)
  //     .create();
  
}
