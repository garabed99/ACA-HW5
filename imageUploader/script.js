const upload = document.getElementById("image-uploader");
const image = document.querySelector("img");

upload.addEventListener("change", () => {
  let img = upload.files[0];
  image.src = URL.createObjectURL(img);
});
