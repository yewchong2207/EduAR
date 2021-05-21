window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '?';

    render();
};

var models = [
    {
        url: 'https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        info: 'Dinosaur',
    },

    {
        url: 'https://cdn.glitch.com/0f662680-b46a-4a86-bc3e-660c29752c5a%2FMosque.gltf?v=1611234341037',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'mosque',
    },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function render() {
    let marker = document.querySelector('a-marker');
    let model = document.createElement('a-entity');

    setModel(models[modelIndex], model);

    document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        var entity = document.querySelector('a-entity');
        modelIndex++;
        var newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
    });

    marker.appendChild(model);
}