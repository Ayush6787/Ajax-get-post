var pageExecute = {

  fileContents:"Null",
  pagePrefix:"Null",
  slides:"Null",

  init: function () {
      $.ajax({
          url: "C:\Users\ayush\OneDrive\Desktop\Ajax Practical 2 WAD\hi.txt",
          async: false,
          success: function (data){
              pageExecute.fileContents = data;
          }
      });
  }
};