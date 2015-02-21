# add-to-archive-today-addon

A Mozilla Firefox addon to add a webpage to the Archive.Today archive.

Use the [Add-On SDK](https://developer.mozilla.org/en-US/Add-ons/SDK) to build a XPI file:

    curl -O https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/addon-sdk-1.17.tar.gz
    tar -xf addon-sdk-1.17.tar.gz
    cd addon-sdk-1.17
    source bin/activate
    git clone https://github.com/roppert/add-to-archive-today-addon.git
    cd add-to-archive-today-addon
    cfx xpi

This generates the XPI-file to be installed.

