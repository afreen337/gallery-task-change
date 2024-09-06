const cl = console.log;

const selectImage = document.getElementById('selectImage');
const alldivs = [...document.querySelectorAll('.all')]

const onImageChange = (eve) => {
    let selectImage = eve.target.value;
    cl(selectImage)

    alldivs.forEach(div => div.classList.add('d-none'));
    let selectDiv = [...document.querySelectorAll("."+selectImage)]
    selectDiv.forEach(div => div.classList.remove('d-none'))
}

selectImage.addEventListener('change', onImageChange)