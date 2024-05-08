// `app.js` file

document.addEventListener('DOMContentLoaded', () => {
    const model = document.querySelector('3dmodel');
    const scaleUpBtn = document.getElementById('btn-scale-up');
    const scaleDownBtn = document.getElementById('btn-scale-down');
    const rotateBtn = document.getElementById('btn-rotate');

    if (model === null) {
        console.error('Error: #3d-model not found.');
        return;
    }

    // Initial scale and rotation values
    let scale = { x: 0.5, y: 0.5, z: 0.5 };
    let rotation = { x: 0, y: 0, z: 0 };

    // Function to increase scale
    function scaleUp() {
        scale.x += 0.1;
        scale.y += 0.1;
        scale.z += 0.1;
        model.setAttribute('scale', scale);
    }

    // Function to decrease scale
    function scaleDown() {
        scale.x = Math.max(0.1, scale.x - 0.1);
        scale.y = Math.max(0.1, scale.y - 0.1);
        scale.z = Math.max(0.1, scale.z - 0.1);
        model.setAttribute('scale', scale);
    }

    // Function to rotate the model
    function rotateModel() {
        rotation.y += 10;
        model.setAttribute('rotation', rotation);
    }

    // Button click event listeners
    scaleUpBtn.addEventListener('click', scaleUp);
    scaleDownBtn.addEventListener('click', scaleDown);
    rotateBtn.addEventListener('click', rotateModel);
});
