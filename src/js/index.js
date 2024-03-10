let imgElement = document.getElementById("imageSrc");
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener(
  "change",
  (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
  },
  false
);
imgElement.onload = function () {
  let mat = cv.imread(imgElement);
  console.log(mat.cols, mat.rows);
  cv.imshow("canvasOutput", mat);
  mat.delete();
};

const Module = {
  // https://emscripten.org/docs/api_reference/module.html#Module.onRuntimeInitialized
  onRuntimeInitialized() {
    document.getElementById("status").innerHTML = "OpenCV.js is ready.";
  },
};
