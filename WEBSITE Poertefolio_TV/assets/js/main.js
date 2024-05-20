document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('#list-example .list-group-item');
    var pdfDisplay = document.getElementById('pdf-display');
  
    listItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Altere o atributo src da iframe para o caminho do PDF correspondente
        var pdfSrc = item.getAttribute('data-src');
        pdfDisplay.src = pdfSrc;
      });
    });
  });



