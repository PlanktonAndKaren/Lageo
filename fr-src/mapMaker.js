import html2canvas from "html2canvas";

function screenShot(){
  const iframe = document.getElementsByTagName('iframe');
  const screen = iframe[0]?.contentDocument?.body;

  html2canvas(screen)
    .then((canvas) => {
      const base64image = canvas.toDataURL('image/png');

     // Do something with the imae
  });
}
