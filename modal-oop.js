var Jconfirm = {
  title: 'Modal Titlxze',
  msg: 'This is your message of concvsdsfirmation',
  textDismiss: 'Close',
  textAccept: 'Save changes',
  modalTitle: $("#modal-title"),
  body: $("#modal-body"),
  btnDismiss: $("#modal-btn-dismiss"),
  btnAccept: $("#modal-btn-accept"),
  show: function(data){
    var obj = new Object({
      do: function(){
        Jconfirm.modalTitle.html(data.title || Jconfirm.title);
        Jconfirm.body.html(data.msg || Jconfirm.msg);
        Jconfirm.btnDismiss.html(data.textDismiss || Jconfirm.textDismiss).attr("onclick", data.actionDismiss || '');
        Jconfirm.btnAccept.html(data.textAccept || Jconfirm.textAccept).attr("onclick", data.actionAccept || '');
      }
    });
    return obj.do();
  }
}

function alerting() {
  var konfirmasi = Object.create(Jconfirm);
  konfirmasi.show({
    title: "Delete Wishlist",
    msg: "Are you sure want to delete?",
    actionDismiss: "alert('Dismiss Action')",
    actionAccept: "alert('Accept Action ')",
    textDismiss: "No",
    textAccept: "Yes, Save Changes"
  })
}
