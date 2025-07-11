// making query selector 
let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");

// eventlistener to check button is clicked
hamburger.addEventListener("click", () => {

  // Tweaking css on button click
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {

  // Tweaking css on button click
  sidebar.classList.remove("active");
});

// for 'my cv' button to enabling download
// making query selector 
document.getElementById("getCV").addEventListener("click", () => {
  const link = document.createElement('a');
  link.href = 'assets/cv.pdf'; // change path if it's in /assets or /files
  link.download = 'Safal_Gautam_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // clean up!
});

