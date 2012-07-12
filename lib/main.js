var data = require("self").data;
var L = function (s) { console.log('XXX '+s); };
var pp = function(o) { return JSON.stringify(o,null,'  ')};

var { NativeWindow, BrowserApp } = require("nw").win;

L(Object.keys(NativeWindow));

// info: XXX init,uninit,toast,menu,doorhanger,observe,contextmenus

// NativeWindow.toast.show("this is the message...", 4000);

function showToast() {
	console.log("in show toast...");
	NativeWindow.toast.show("Showing you a toast", "short");
}

var menuId = NativeWindow.menu.add("Show Toast", data.url("skull_icon.png"),
	function() {
		// console.log("in show toast callback...");
		showToast(); 
	}
);

// doorhanger example

var menuID;  
  
function offerCake(window) {  
  let buttons = [  
    {  
      label: "Yes, please!",  
      callback: function () {  
        NativeWindow.toast.show("yum", "short");  
      }  
    },  
    {  
      label: "Not today",  
      callback: function () {  
        NativeWindow.toast.show("still hungry", "short");  
      }  
    }  
  ];  
  
  let message = "How about some cake?";  
  let options = {  
    persistence: 1  
  };  
  
  NativeWindow.doorhanger.show(message, "cake-request", buttons, BrowserApp.selectedTab.id, options);  
} 

var menuId2 = NativeWindow.menu.add("Show Doorhanger", data.url("skull_icon.png"),
	function() {
		// console.log("in show toast callback...");
		offerCake();
	}
);

var menuId2 = NativeWindow.menu.add("Show Doorhanger", data.url("skull_icon.png"),
	function() {
		let uri = data.url("foo.html");
		var tab = BrowserApp.addTab(uri);
	}
);






