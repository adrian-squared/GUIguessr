const themes = ["win1", "win2", "win3", "win95", "winme","macos1", "macos7", "macos8", "macos9"];
const os_array = ["Windows", "macOS","OS/2"]
const imgs_win = ["win1","win2", "win3", "win31", "win95", "win98", "winme", "winxp", "winvista", "win7", "win8", "win10", "win11"];
const vers_win = ["1.0","2.0","3.0","3.1","95","98","Me","XP","Vista","7","8","10","11"]
const date_win = [1985, 1987, 1990, 1992, 1995, 1998, 2000, 2001, 2007, 2009, 2012, 2015, 2021]
const imgs_mac = ["macos1","macos3", "macos4", "macos7", "macos8", "macos9", "macosx", "macosx2", "macosx3", "macosx4", "macosx5"];
const vers_mac = ["System 1","System 3","System 4","System 7","8","9","X 10.0 Cheetah","X 10.2 Jaguar","X 10.3 Panther","X 10.4 Tiger","X 10.5 Leopard"]
const date_mac = [1984, 1986, 1987, 1991, 1997, 1999, 2001, 2002, 2003, 2005, 2007]
const imgs_os2 = ["os213","os22", "os2w3", "os2w4"];
const vers_os2 = ["1.3","2.0","Warp 3","Warp 4"]
const date_os2 = [1990, 1992, 1994, 1996]

var row = 1

var company = ""
var date = 0
var os_id = Math.floor(Math.random() * os_array.length)
var img_id = 0

if (os_array[os_id] == "Windows") {
    img_id = Math.floor(Math.random() * imgs_win.length);
    main_img = imgs_win[img_id];
    company = "Microsoft"
} else if (os_array[os_id] == "macOS") {
    img_id = Math.floor(Math.random() * imgs_mac.length);
    main_img = imgs_mac[img_id];
    company = "Apple"
} else if (os_array[os_id] == "OS/2") {
    img_id = Math.floor(Math.random() * imgs_os2.length);
    main_img = imgs_os2[img_id];
    if (main_img == "os213") {
        company = "Microsoft"
    } else {
        company = "IBM"
    }
}

if (os_array[os_id] == "Windows") {
    date = date_win[img_id]
} else if (os_array[os_id] == "macOS") {
    date = date_mac[img_id]
} else if (os_array[os_id] == "OS/2") {
    date = date_os2[img_id]
}

theme = themes[Math.floor(Math.random() * themes.length)];

document.getElementById("version_windows").style.display = 'none';
document.getElementById("version_macos").style.display = 'none';
document.getElementById("version_os2").style.display = 'none';

document.getElementById("body").style.backgroundImage = "url('themes/" + theme + "/bg.png')";

if (theme == "win1" || theme == "win2") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "Fixedsys";
    }
}else if (theme == "win3") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "System";
    }
}else if (theme == "win95" || theme == "winme") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "W95FA";
    }
}else if (theme == "macos1" || theme == "macos7") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "Chicago";
    }
}else if (theme == "macos8" || theme == "macos9") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "Charcoal";
    }
}

document.getElementById("main_img").setAttribute('src', 'img/' + main_img + '.png');

function check_select(button) {
    document.getElementById("search").style.display = 'none';
    document.getElementById("search_cell").innerHTML = button;
    if (document.getElementById("search_cell").innerHTML == "Windows") {
        document.getElementById("version_windows").style.display = 'block';
        document.getElementById("suggestions_win").style.display = 'block';
    } else if (document.getElementById("search_cell").innerHTML == "macOS") {
        document.getElementById("version_macos").style.display = 'block';
        document.getElementById("suggestions_mac").style.display = 'block';
    } else if (document.getElementById("search_cell").innerHTML == "OS/2") {
        document.getElementById("version_os2").style.display = 'block';
        document.getElementById("suggestions_os2").style.display = 'block';
    }
}

function check_select_win(button) {
    document.getElementById("version_windows").style.display = 'none';
    document.getElementById("version").innerHTML = button;
    if (document.getElementById("version").innerHTML == "1.0") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1985;
    } else if (document.getElementById("version").innerHTML == "2.0") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1987;
    } else if (document.getElementById("version").innerHTML == "3.0") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1990;
    } else if (document.getElementById("version").innerHTML == "3.1") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1992;
    } else if (document.getElementById("version").innerHTML == "95") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1995;
    } else if (document.getElementById("version").innerHTML == "98") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1998;
    } else if (document.getElementById("version").innerHTML == "Me") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2000;
    } else if (document.getElementById("version").innerHTML == "XP") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2001;
    } else if (document.getElementById("version").innerHTML == "Vista") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2007;
    } else if (document.getElementById("version").innerHTML == "7") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2009;
    } else if (document.getElementById("version").innerHTML == "8") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2012;
    } else if (document.getElementById("version").innerHTML == "10") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2015;
    } else if (document.getElementById("version").innerHTML == "11") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 2021;
    }
    tab_down()
}

function check_select_mac(button) {
    document.getElementById("version_macos").style.display = 'none';
    document.getElementById("version").innerHTML = button;
    if (document.getElementById("version").innerHTML == "System 1") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1984;
    } else if (document.getElementById("version").innerHTML == "System 2") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1985;
    } else if (document.getElementById("version").innerHTML == "System 3") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1986;
    } else if (document.getElementById("version").innerHTML == "System 4") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1987;
    } else if (document.getElementById("version").innerHTML == "System 7") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1991;
    } else if (document.getElementById("version").innerHTML == "8") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1997;
    } else if (document.getElementById("version").innerHTML == "9") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 1999;
    } else if (document.getElementById("version").innerHTML == "X 10.0 Cheetah") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 2001;
    } else if (document.getElementById("version").innerHTML == "X 10.2 Jaguar") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 2002;
    } else if (document.getElementById("version").innerHTML == "X 10.3 Panther") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 2003;
    } else if (document.getElementById("version").innerHTML == "X 10.4 Tiger") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 2005;
    } else if (document.getElementById("version").innerHTML == "X 10.5 Leopard") {
        document.getElementById("company").innerHTML = "Apple";
        document.getElementById("date").innerHTML = 2007;
    }
    tab_down()
}

function check_select_os2(button) {
    document.getElementById("version_os2").style.display = 'none';
    document.getElementById("version").innerHTML = button;
    if (document.getElementById("version").innerHTML == "1.3") {
        document.getElementById("company").innerHTML = "Microsoft";
        document.getElementById("date").innerHTML = 1990;
    } else if (document.getElementById("version").innerHTML == "2.0") {
        document.getElementById("company").innerHTML = "IBM";
        document.getElementById("date").innerHTML = 1992;
    } else if (document.getElementById("version").innerHTML == "Warp 3") {
        document.getElementById("company").innerHTML = "IBM";
        document.getElementById("date").innerHTML = 1994;
    } else if (document.getElementById("version").innerHTML == "Warp 4") {
        document.getElementById("company").innerHTML = "IBM";
        document.getElementById("date").innerHTML = 1996;
    }
    tab_down()
}

function hide() {
    document.getElementById("suggestions").style.display = 'none';
    document.getElementById("suggestions_win").style.display = 'none';
}

function check_answer() {
    if (document.getElementById("gui2").innerHTML == os_array[os_id]) {
        document.getElementById("gui2").style.color = "#ffffff";
        document.getElementById("gui2").style.backgroundColor = "#538d4e";
    }
    if (os_array[os_id] == "Windows") {
        if (document.getElementById("version2").innerHTML == vers_win[img_id]) {
            document.getElementById("version2").style.color = "#ffffff";
            document.getElementById("version2").style.backgroundColor = "#538d4e";
        }
    } else if (os_array[os_id] == "macOS") {
        if (document.getElementById("version2").innerHTML == vers_mac[img_id]) {
            document.getElementById("version2").style.color = "#ffffff";
            document.getElementById("version2").style.backgroundColor = "#538d4e";
        }
    } else if (os_array[os_id] == "OS/2") {
        if (document.getElementById("version2").innerHTML == vers_os2[img_id]) {
            document.getElementById("version2").style.color = "#ffffff";
            document.getElementById("version2").style.backgroundColor = "#538d4e";
        }
    }
    if (document.getElementById("company2").innerHTML == company) {
        document.getElementById("company2").style.color = "#ffffff";
        document.getElementById("company2").style.backgroundColor = "#538d4e";
    }
    if (document.getElementById("date2").innerHTML == date) {
        document.getElementById("date2").style.color = "#ffffff";
        document.getElementById("date2").style.backgroundColor = "#538d4e";
    } else if (document.getElementById("date2").innerHTML > date) {
        document.getElementById("date2").innerHTML = document.getElementById("date2").innerHTML + "↓";
    } else {
        document.getElementById("date2").innerHTML = document.getElementById("date2").innerHTML + "↑";
    }
}

function check_answer_row1() {
    if (document.getElementById("search_cell").innerHTML == os_array[os_id]) {
        document.getElementById("cell_1").style.color = "#ffffff";
        document.getElementById("cell_1").style.backgroundColor = "#538d4e";
    }
    if (os_array[os_id] == "Windows") {
        if (document.getElementById("version").innerHTML == vers_win[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
        }
    } else if (os_array[os_id] == "macOS") {
        if (document.getElementById("version").innerHTML == vers_mac[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
        }
    } else if (os_array[os_id] == "OS/2") {
        if (document.getElementById("version").innerHTML == vers_os2[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
        }
    }
    if (document.getElementById("company").innerHTML == company) {
        document.getElementById("company").style.color = "#ffffff";
        document.getElementById("company").style.backgroundColor = "#538d4e";
    }
    if (document.getElementById("date").innerHTML == date) {
        document.getElementById("date").style.color = "#ffffff";
        document.getElementById("date").style.backgroundColor = "#538d4e";
    } else if (document.getElementById("date").innerHTML > date) {
        document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + "↓";
    } else {
        document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + "↑";
    }
}

function tab_down() {
    document.getElementById("search").style.display = 'block';
    document.getElementById("suggestions").style.display = 'none';
    document.getElementById("suggestions_win").style.display = 'none';
    document.getElementById("suggestions_mac").style.display = 'none';
    document.getElementById("suggestions_os2").style.display = 'none';
    document.getElementById("version_windows").style.display = 'none';
    document.getElementById("version_macos").style.display = 'none';
    document.getElementById("version_os2").style.display = 'none';
    row = row+1
    if (row == 2) {
        var row2 = document.createElement("tr");
        row2.id = "row2";
        var gui2 = document.createElement("td");
        gui2.id = "gui2";
        var version2 = document.createElement("td");
        version2.id = "version2";
        var company2 = document.createElement("td");
        company2.id = "company2";
        var date2 = document.createElement("td");
        date2.id = "date2";
        document.getElementById("tab_main").appendChild(row2);
        document.getElementById("row2").appendChild(gui2);
        document.getElementById("row2").appendChild(version2);
        document.getElementById("row2").appendChild(company2);
        document.getElementById("row2").appendChild(date2);
        document.getElementById("gui2").innerHTML = document.getElementById("search_cell").innerHTML;
        document.getElementById("version2").innerHTML = document.getElementById("version").innerHTML;
        document.getElementById("company2").innerHTML = document.getElementById("company").innerHTML;
        document.getElementById("date2").innerHTML = document.getElementById("date").innerHTML;
        document.getElementById("search_cell").innerHTML = ""
        document.getElementById("version").innerHTML = ""
        document.getElementById("company").innerHTML = ""
        document.getElementById("date").innerHTML = ""
        check_answer()
    } else if (row == 3) {
        var row3 = document.createElement("tr");
        row3.id = "row3";
        var gui3 = document.createElement("td");
        gui3.id = "gui3";
        var version3 = document.createElement("td");
        version3.id = "version3";
        var company3 = document.createElement("td");
        company3.id = "company3";
        var date3 = document.createElement("td");
        date3.id = "date3";
        document.getElementById("tab_main").appendChild(row3);
        document.getElementById("row3").appendChild(gui3);
        document.getElementById("row3").appendChild(version3);
        document.getElementById("row3").appendChild(company3);
        document.getElementById("row3").appendChild(date3);
        document.getElementById("gui3").innerHTML = document.getElementById("gui2").innerHTML;
        document.getElementById("version3").innerHTML = document.getElementById("version2").innerHTML;
        document.getElementById("company3").innerHTML = document.getElementById("company2").innerHTML;
        document.getElementById("date3").innerHTML = document.getElementById("date2").innerHTML;
        document.getElementById("gui2").innerHTML = document.getElementById("search_cell").innerHTML;
        document.getElementById("version2").innerHTML = document.getElementById("version").innerHTML;
        document.getElementById("company2").innerHTML = document.getElementById("company").innerHTML;
        document.getElementById("date2").innerHTML = document.getElementById("date").innerHTML;
        document.getElementById("search_cell").innerHTML = ""
        document.getElementById("version").innerHTML = ""
        document.getElementById("company").innerHTML = ""
        document.getElementById("date").innerHTML = ""
        document.getElementById("gui3").style.backgroundColor = document.getElementById("gui2").style.backgroundColor
        document.getElementById("gui3").style.color = document.getElementById("gui2").style.color
        document.getElementById("gui2").style.backgroundColor = "#ffffff"
        document.getElementById("gui2").style.color = "#000000"
        document.getElementById("version3").style.backgroundColor = document.getElementById("version2").style.backgroundColor
        document.getElementById("version3").style.color = document.getElementById("version2").style.color
        document.getElementById("version2").style.backgroundColor = "#ffffff"
        document.getElementById("version2").style.color = "#000000"
        document.getElementById("company3").style.backgroundColor = document.getElementById("company2").style.backgroundColor
        document.getElementById("company3").style.color = document.getElementById("company2").style.color
        document.getElementById("company2").style.backgroundColor = "#ffffff"
        document.getElementById("company2").style.color = "#000000"
        document.getElementById("date3").style.backgroundColor = document.getElementById("date2").style.backgroundColor
        document.getElementById("date3").style.color = document.getElementById("date2").style.color
        document.getElementById("date2").style.backgroundColor = "#ffffff"
        document.getElementById("date2").style.color = "#000000"
        check_answer()
    } else if (row == 4) {
        var row4 = document.createElement("tr");
        row4.id = "row4";
        var gui4 = document.createElement("td");
        gui4.id = "gui4";
        var version4 = document.createElement("td");
        version4.id = "version4";
        var company4 = document.createElement("td");
        company4.id = "company4";
        var date4 = document.createElement("td");
        date4.id = "date4";
        document.getElementById("tab_main").appendChild(row4);
        document.getElementById("row4").appendChild(gui4);
        document.getElementById("row4").appendChild(version4);
        document.getElementById("row4").appendChild(company4);
        document.getElementById("row4").appendChild(date4);
        document.getElementById("gui4").innerHTML = document.getElementById("gui3").innerHTML;
        document.getElementById("version4").innerHTML = document.getElementById("version3").innerHTML;
        document.getElementById("company4").innerHTML = document.getElementById("company3").innerHTML;
        document.getElementById("date4").innerHTML = document.getElementById("date3").innerHTML;
        document.getElementById("gui3").innerHTML = document.getElementById("gui2").innerHTML;
        document.getElementById("version3").innerHTML = document.getElementById("version2").innerHTML;
        document.getElementById("company3").innerHTML = document.getElementById("company2").innerHTML;
        document.getElementById("date3").innerHTML = document.getElementById("date2").innerHTML;
        document.getElementById("gui2").innerHTML = document.getElementById("search_cell").innerHTML;
        document.getElementById("version2").innerHTML = document.getElementById("version").innerHTML;
        document.getElementById("company2").innerHTML = document.getElementById("company").innerHTML;
        document.getElementById("date2").innerHTML = document.getElementById("date").innerHTML;
        document.getElementById("search_cell").innerHTML = ""
        document.getElementById("version").innerHTML = ""
        document.getElementById("company").innerHTML = ""
        document.getElementById("date").innerHTML = ""
        document.getElementById("gui4").style.backgroundColor = document.getElementById("gui3").style.backgroundColor
        document.getElementById("gui4").style.color = document.getElementById("gui3").style.color
        document.getElementById("gui3").style.backgroundColor = document.getElementById("gui2").style.backgroundColor
        document.getElementById("gui3").style.color = document.getElementById("gui2").style.color
        document.getElementById("gui2").style.backgroundColor = "#ffffff"
        document.getElementById("gui2").style.color = "#000000"
        document.getElementById("version4").style.backgroundColor = document.getElementById("version3").style.backgroundColor
        document.getElementById("version4").style.color = document.getElementById("version3").style.color
        document.getElementById("version3").style.backgroundColor = document.getElementById("version2").style.backgroundColor
        document.getElementById("version3").style.color = document.getElementById("version2").style.color
        document.getElementById("version2").style.backgroundColor = "#ffffff"
        document.getElementById("version2").style.color = "#000000"
        document.getElementById("company4").style.backgroundColor = document.getElementById("company3").style.backgroundColor
        document.getElementById("company4").style.color = document.getElementById("company3").style.color
        document.getElementById("company3").style.backgroundColor = document.getElementById("company2").style.backgroundColor
        document.getElementById("company3").style.color = document.getElementById("company2").style.color
        document.getElementById("company2").style.backgroundColor = "#ffffff"
        document.getElementById("company2").style.color = "#000000"
        document.getElementById("date4").style.backgroundColor = document.getElementById("date3").style.backgroundColor
        document.getElementById("date4").style.color = document.getElementById("date3").style.color
        document.getElementById("date3").style.backgroundColor = document.getElementById("date2").style.backgroundColor
        document.getElementById("date3").style.color = document.getElementById("date2").style.color
        document.getElementById("date2").style.backgroundColor = "#ffffff"
        document.getElementById("date2").style.color = "#000000"
        check_answer()
    } else if (row == 5) {
        var row5 = document.createElement("tr");
        row5.id = "row5";
        var gui5 = document.createElement("td");
        gui5.id = "gui5";
        var version5 = document.createElement("td");
        version5.id = "version5";
        var company5 = document.createElement("td");
        company5.id = "company5";
        var date5 = document.createElement("td");
        date5.id = "date5";
        document.getElementById("tab_main").appendChild(row5);
        document.getElementById("row5").appendChild(gui5);
        document.getElementById("row5").appendChild(version5);
        document.getElementById("row5").appendChild(company5);
        document.getElementById("row5").appendChild(date5);
        document.getElementById("gui5").innerHTML = document.getElementById("gui4").innerHTML;
        document.getElementById("version5").innerHTML = document.getElementById("version4").innerHTML;
        document.getElementById("company5").innerHTML = document.getElementById("company4").innerHTML;
        document.getElementById("date5").innerHTML = document.getElementById("date4").innerHTML;
        document.getElementById("gui4").innerHTML = document.getElementById("gui3").innerHTML;
        document.getElementById("version4").innerHTML = document.getElementById("version3").innerHTML;
        document.getElementById("company4").innerHTML = document.getElementById("company3").innerHTML;
        document.getElementById("date4").innerHTML = document.getElementById("date3").innerHTML;
        document.getElementById("gui3").innerHTML = document.getElementById("gui2").innerHTML;
        document.getElementById("version3").innerHTML = document.getElementById("version2").innerHTML;
        document.getElementById("company3").innerHTML = document.getElementById("company2").innerHTML;
        document.getElementById("date3").innerHTML = document.getElementById("date2").innerHTML;
        document.getElementById("gui2").innerHTML = document.getElementById("search_cell").innerHTML;
        document.getElementById("version2").innerHTML = document.getElementById("version").innerHTML;
        document.getElementById("company2").innerHTML = document.getElementById("company").innerHTML;
        document.getElementById("date2").innerHTML = document.getElementById("date").innerHTML;
        document.getElementById("search_cell").innerHTML = ""
        document.getElementById("version").innerHTML = ""
        document.getElementById("company").innerHTML = ""
        document.getElementById("date").innerHTML = ""
        document.getElementById("gui5").style.backgroundColor = document.getElementById("gui4").style.backgroundColor
        document.getElementById("gui5").style.color = document.getElementById("gui4").style.color
        document.getElementById("gui4").style.backgroundColor = document.getElementById("gui3").style.backgroundColor
        document.getElementById("gui4").style.color = document.getElementById("gui3").style.color
        document.getElementById("gui3").style.backgroundColor = document.getElementById("gui2").style.backgroundColor
        document.getElementById("gui3").style.color = document.getElementById("gui2").style.color
        document.getElementById("gui2").style.backgroundColor = "#ffffff"
        document.getElementById("gui2").style.color = "#000000"
        document.getElementById("version5").style.backgroundColor = document.getElementById("version4").style.backgroundColor
        document.getElementById("version5").style.color = document.getElementById("version4").style.color
        document.getElementById("version4").style.backgroundColor = document.getElementById("version3").style.backgroundColor
        document.getElementById("version4").style.color = document.getElementById("version3").style.color
        document.getElementById("version3").style.backgroundColor = document.getElementById("version2").style.backgroundColor
        document.getElementById("version3").style.color = document.getElementById("version2").style.color
        document.getElementById("version2").style.backgroundColor = "#ffffff"
        document.getElementById("version2").style.color = "#000000"
        document.getElementById("company5").style.backgroundColor = document.getElementById("company4").style.backgroundColor
        document.getElementById("company5").style.color = document.getElementById("company4").style.color
        document.getElementById("company4").style.backgroundColor = document.getElementById("company3").style.backgroundColor
        document.getElementById("company4").style.color = document.getElementById("company3").style.color
        document.getElementById("company3").style.backgroundColor = document.getElementById("company2").style.backgroundColor
        document.getElementById("company3").style.color = document.getElementById("company2").style.color
        document.getElementById("company2").style.backgroundColor = "#ffffff"
        document.getElementById("company2").style.color = "#000000"
        document.getElementById("date5").style.backgroundColor = document.getElementById("date4").style.backgroundColor
        document.getElementById("date5").style.color = document.getElementById("date4").style.color
        document.getElementById("date4").style.backgroundColor = document.getElementById("date3").style.backgroundColor
        document.getElementById("date4").style.color = document.getElementById("date3").style.color
        document.getElementById("date3").style.backgroundColor = document.getElementById("date2").style.backgroundColor
        document.getElementById("date3").style.color = document.getElementById("date2").style.color
        document.getElementById("date2").style.backgroundColor = "#ffffff"
        document.getElementById("date2").style.color = "#000000"
        check_answer()
    } else if (row >= 6) {
        document.getElementById("search").style.display = 'none';
        check_answer_row1()
    }
    return
}

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', function () {
const inputValue = this.value.trim().toLowerCase();
const suggestionItems = suggestionsList.querySelectorAll('button');

let hasMatches = false;

suggestionItems.forEach(function (listItem) {
const textValue = listItem.textContent.toLowerCase();
const displayStyle = textValue.includes(inputValue) ? 'block' : 'none';
listItem.style.display = displayStyle;
hasMatches = hasMatches || displayStyle === 'block';
});

suggestionsList.style.display = hasMatches ? 'block' : 'none';
});


const searchInput_win = document.getElementById("searchInput_win");
const suggestionsList_win = document.getElementById('suggestions_win');

searchInput_win.addEventListener('input', function () {
const inputValue_win = this.value.trim().toLowerCase();
const suggestionItems_win = suggestions_win.querySelectorAll('button');

let hasMatches_win = false;

suggestionItems_win.forEach(function (listItem) {
const textValue_win = listItem.textContent.toLowerCase();
const displayStyle_win = textValue_win.includes(inputValue_win) ? 'block' : 'none';
listItem.style.display = displayStyle_win;
hasMatches_win = hasMatches_win || displayStyle_win === 'block';
});

suggestionsList_win.style.display = hasMatches_win ? 'block' : 'none';
});

const searchInput_mac = document.getElementById("searchInput_mac");
const suggestionsList_mac = document.getElementById('suggestions_mac');

searchInput_mac.addEventListener('input', function () {
const inputValue_mac = this.value.trim().toLowerCase();
const suggestionItems_mac = suggestions_mac.querySelectorAll('button');

let hasMatches_mac = false;

suggestionItems_mac.forEach(function (listItem) {
const textValue_mac = listItem.textContent.toLowerCase();
const displayStyle_mac = textValue_mac.includes(inputValue_mac) ? 'block' : 'none';
listItem.style.display = displayStyle_mac;
hasMatches_mac = hasMatches_mac || displayStyle_mac === 'block';
});

suggestionsList_mac.style.display = hasMatches_mac ? 'block' : 'none';
});

const searchInput_os2 = document.getElementById("searchInput_os2");
const suggestionsList_os2 = document.getElementById('suggestions_os2');

searchInput_os2.addEventListener('input', function () {
const inputValue_os2 = this.value.trim().toLowerCase();
const suggestionItems_os2 = suggestions_os2.querySelectorAll('button');

let hasMatches_os2 = false;

suggestionItems_os2.forEach(function (listItem) {
const inputValue_os2 = listItem.textContent.toLowerCase();
const displayStyle_os2 = inputValue_os2.includes(inputValue_os2) ? 'block' : 'none';
listItem.style.display = displayStyle_os2;
hasMatches_os2 = hasMatches_os2 || displayStyle_os2 === 'block';
});

suggestionsList_os2.style.display = hasMatches_os2 ? 'block' : 'none';
});