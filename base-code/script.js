// Select all draggable items and drop zones
const draggables = document.querySelectorAll('.draggable');
const dropZones = document.querySelectorAll('.drop-zone');

// 1. Handle Draggable Items
draggables.forEach(draggable => {
    // When the user starts dragging the item
    draggable.addEventListener('dragstart', (e) => {
        // Store the ID of the element being dragged
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

// 2. Handle Drop Zones
dropZones.forEach(zone => {
    // Necessary to allow dropping. By default, browsers prevent dropping data/elements.
    zone.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    // Visual feedback when item enters the zone
    zone.addEventListener('dragenter', (e) => {
        e.preventDefault();
        zone.classList.add('hovered');
    });

    // Remove visual feedback when item leaves the zone
    zone.addEventListener('dragleave', () => {
        zone.classList.remove('hovered');
    });

    // Handle the actual drop
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('hovered');

        // Retrieve the ID of the dragged item
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);

        // Append the item to the new drop zone
        zone.appendChild(draggableElement);
    });
});