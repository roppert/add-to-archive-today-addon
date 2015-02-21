var buttons = require("sdk/ui/button/action");
var tabs = require("sdk/tabs");
var clipboard = require("sdk/clipboard");

var button = buttons.ActionButton({
    id: "mozilla-link",
    label: "Add to Archive.Today",
    icon: {"16": "./icon-16.png",
           "32": "./icon-32.png",
           "64": "./icon-64.png"},
    onClick: handleClick
});

function handleClick(state) {
    var url = tabs.activeTab.url;
    tabs.open({ 
        url: "https://archive.today/?run=1&url="+encodeURIComponent(url),
        onReady: function() {
            clipboard.set(tabs.activeTab.url);
        }
    });
}
