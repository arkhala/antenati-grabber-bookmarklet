javascript: (function() {
    var currentUrl = window.location.href;
    var lastSegment = currentUrl.match(/\/([^\/]+)\/?$/)[1];
    var targetUrl = 'https://iiif-antenati.san.beniculturali.it/iiif/2/' + lastSegment + '/full/full/0/default.jpg';
    window.open(targetUrl, '_blank');
})();
