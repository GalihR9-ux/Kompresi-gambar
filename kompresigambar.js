document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const selectBtn = document.getElementById('selectBtn');
    const compressBtn = document.getElementById('compressBtn');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');
    const resultsSection = document.getElementById('resultsSection');
    const compressedImage = document.getElementById('compressedImage');
    const compressedSize = document.getElementById('compressedSize');
    const downloadBtn = document.getElementById('downloadBtn');
    const sizePresets = document.querySelectorAll('.size-preset');

    let selectedFile = null;
    let targetSize = 200;

    sizePresets.forEach(preset => {
        preset.addEventListener('click', () => {
            sizePresets.forEach(p => p.classList.remove('active'));
            preset.classList.add('active');
            targetSize = parseInt(preset.dataset.size);
        });
    });

    uploadArea.addEventListener('click', () => fileInput.click());
    selectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            selectedFile = e.target.files[0];
            compressBtn.disabled = false;
        }
    });

    qualitySlider.addEventListener('input', () => {
        qualityValue.textContent = qualitySlider.value;
    });

    compressBtn.addEventListener('click', function() {
        if (!selectedFile) return;
        compressedImage.src = URL.createObjectURL(selectedFile);
        compressedSize.textContent = targetSize;
        downloadBtn.href = compressedImage.src;
        resultsSection.style.display = 'block';
    });
});
