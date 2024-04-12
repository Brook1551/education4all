document.addEventListener('DOMContentLoaded', function() {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    const modal = document.getElementById('videoModal');
    const modalContent = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close');
    const videoIframe = modal.querySelector('#videoIframe');

    videoWrappers.forEach(function(wrapper) {
        wrapper.addEventListener('click', function() {
            const videoSrc = wrapper.getAttribute('data-src');
            videoIframe.src = videoSrc;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        videoIframe.src = '';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoIframe.src = '';
        }
    });
});
