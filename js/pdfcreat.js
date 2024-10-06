function pdfyarat() {
    const { jsPDF } = window.jspdf;

    const movzu = document.getElementById('movzu').value;
    const movzutitle = document.getElementById('movzutitle').value;
    const altbasliq = document.getElementById('altbasliq').value;
    const muellif = document.getElementById('muellif').value;
    const edebiyyat = document.getElementById('edebiyyat').value;
    const metn = document.getElementById('metn').value;

    const doc = new jsPDF();


    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10; 
    const maxWidth = pageWidth - margin * 2; 

    
    function centerText(text, y) {
        const textWidth = doc.getTextWidth(text);
        const x = (pageWidth - textWidth) / 2;
        doc.text(text, x, y);
    }


    centerText(`Movzu: ${movzu}`, 10);
    centerText(`Movzunun basliqi: ${movzutitle}`, 20);
    centerText(`Alt Basliq: ${altbasliq}`, 30);
    centerText(`Muellif: ${muellif}`, 40);
    centerText(`Edebiyyat: ${edebiyyat}`, 50);

   
    doc.setFontSize(12);
    doc.text(`Metn:`, margin, 60); 
    doc.text(metn, margin, 70, { maxWidth: maxWidth, align: "left" }); 


    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgData = event.target.result;  
            const format = file.type.includes("png") ? 'PNG' : 'JPEG';  

           
            doc.addImage(imgData, format, 20, 130, 50, 50);

            doc.save('generated.pdf');
        };

       
        reader.readAsDataURL(file); 
    } else {
        alert("Please select an image first!");
    }
}