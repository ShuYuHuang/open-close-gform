function open() {
  form_id = "1TestTestTestTestTestTestTestTestTestTestTest"
             
  var form = FormApp.openById(form_id)
  form.setAcceptingResponses(true)
}

function close() {
  form_id = "1TestTestTestTestTestTestTestTestTestTestTest"
  var form = FormApp.openById(form_id)
  form.setAcceptingResponses(false)
}
