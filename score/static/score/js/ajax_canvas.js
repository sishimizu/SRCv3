$('#go').on('click',function(){
  $("#form_area").submit(function (event) {
      event.preventDefault();
      var form_data = document.getElementById("form_area")
      var canvas = document.getElementById("canvas");
      var fd = new FormData(form_data);
      const team =  document.getElementById("team").textContent
      const run =  document.getElementById("run").textContent
      fd.append('team',team);
      fd.append('run_n',run);
      var file_name =team +"_" + run+".png"
      file_name =file_name.replace(/\r?\n/g, '');
      file_name = file_name.replace(/\s+/g, "");
      var data_url = canvas.toDataURL('image/png')
      fd.append('img',data_url);
      for([key, value] of fd){
          console.log(key, value);
      }
      $.ajax({
          url: 'determine',
          type: "POST",
          data: fd,
          processData: false,
          contentType: false,
      })
      .done(function() {
        location.href = 'http://127.0.0.1:8000/rank';
    });
  });
})

