// Disable Webflow badge
const style = `
    <style>
        .w-webflow-badge {
            display: None !important;
            visibility: hidden !important;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', style);

// Custom scripts section
import('/custom/brands-slider/index.js');
