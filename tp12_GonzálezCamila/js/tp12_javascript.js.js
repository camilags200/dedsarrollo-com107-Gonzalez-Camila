$(document).ready(function() {
    $("#p1").click(function() {
      alert("Has hecho clic en el primer párrafo.");
    });
  });
  $(document).ready(function() {
    $("#boton1").click(function() {
      $("#miEnlace").attr("href", "https://www.google.com");
      $("#miEnlace").text("Google");
    });
    
    $("#boton2").click(function() {
      $("#miEnlace").attr("href", "https://www.yahoo.com");
      $("#miEnlace").text("Yahoo");
    });
    
    $("#boton3").click(function() {
      $("#miEnlace").attr("href", "https://www.bing.com");
      $("#miEnlace").text("Bing");
    });
  });
  $(document).ready(function() {
    $("#miDiv").click(function() {
      $(this).animate({ width: "250px", height: "250px" });
    });

    $("#miDiv").dblclick(function() {
      $(this).animate({ width: "800px", height: "70px" });
    });
  });
  $(document).ready(function() {
    $("#contenido").click(function() {
      $(this).fadeOut("slow", function() {
        $("#imagen").fadeIn("slow");
      });
    });
  });