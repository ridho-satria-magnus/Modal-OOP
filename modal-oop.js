var Jconfirm = {
  title: 'Modal Titlxze',
  msg: 'This is your message of concvsdsfirmation',
  textDismiss: 'Close',
  textAccept: 'Save changes',
  action1: 'alert("Hello this is action 1")',
  action2: 'alert("Hello this is action 2")',
  modalTitle: $("#modal-title"),
  body: $("#modal-body"),
  btnDismiss: $("#modal-btn-dismiss"),
  btnAccept: $("#modal-btn-accept"),
  show: function(){
    this.body.html(this.msg);
    this.btn1.html(this.button1);
    this.btn2.html(this.button2);
    this.modalTitle.html(this.title);
  },
  showErik: function(data){
    var obj = new Object({
      title: data.title || Jconfirm.title,
      msg: data.msg || Jconfirm.msg,
      do: function(){
        Jconfirm.modalTitle.html(this.title);
        Jconfirm.body.html(this.msg);
        Jconfirm.btnDismiss.html(data.textDismiss || Jconfirm.textDismiss);
        Jconfirm.btnAccept.html(data.textAccept || Jconfirm.textAccept);
      }
    });
    return obj.do();
  },
  exec1: function(){
    eval(this.action1);
  },
  exec2: function(){
    eval(this.action2);
  }
}

function alerting() {
  var konfirmasi = Object.create(Jconfirm);
  konfirmasi.showErik({
    title: "Erik Modal",
    msg: "Messages from Erik"
  })
}
