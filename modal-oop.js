var Jconfirm = {
    title: 'Modal Title',
  msg: 'This is your message of confirmation',
  button1: 'Yes',
  button2: 'No',
  action1: 'alert("Hello this is action 1")',
  action2: 'alert("Hello this is action 2")',
  modalTitle: $(".title-confirm"),
  body: $(".modal-confirm"),
  btn1: $(".btn1-confirm"),
  btn2: $(".btn2-confirm"),
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
            Jconfirm.body.innerHTML = this.msg;
      }
    })
    return obj.do();
  },
  exec1: function(){
    eval(this.action1);
  },
  exec2: function(){
    eval(this.action2);
  }
}
​
var konfirmasi = Object.create(Jconfirm);
konfirmasi.showErik({
    title: "Erik Modal",
    msg: "Messages from Erik"
})
