(function () {
    var app = angular.module('store', []);
    app.controller('StoreContoller', function () {
        this.products = gems;


    });
    var gems = [
    {
        name: 'Octadoden',
        price: 2.29,
        description: 'this is test json type data',
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'img/ic_plus_circle_outline_black_48dp.png',
                thumb: 'img/ic_plus_circle_outline_black_18dp.png'

            }],
        reviews: [
            {
                star: 5,
                body: "this is awesome",
                author: "@jadkskd"
            },
        {
            star: 5,
            body: "this is awesome",
            author: "@ffgdkskd"
        },
        {
            star: 5,
            body: "this is awesome",
            author: "@jadk454545skd"
        }, {
            star: 5,
            body: "this is awesome",
            author: "@ju7u7989adkskd"
        }]
    },
    {
        name: 'Decadoden',
        price: 12.49,
        description: 'MOKAMOKAMOKMKA json type data',
        canPurchase: true,
        soldOut: false,
        images: [
           {
               full: 'img/ic_pause_circle_outline_black_48dp.png',
               thumb: 'img/ic_pause_circle_outline_black_18dp.png'

           }],
        reviews: [
           {
               star: 4,
               body: "this is awesome",
               author: "@jadkskd"
           },
       {
           star: 3,
           body: "this is awesome",
           author: "@ffgdkskd"
       },
       {
           star: 2,
           body: "this is awesome",
           author: "@jadk454545skd"
       }, {
           star: 1,
           body: "this is awesome",
           author: "@ju7u7989adkskd"
       }]

    },
    {
        name: 'Pentadoden',
        price: 5.29,
        description: 'this is test DODODOCAa',
        canPurchase: true,
        soldOut: false,
        images: [
           {
               full: 'img/ic_play_circle_outline_black_48dp.png',
               thumb: 'img/ic_play_circle_outline_black_18dp.png'

           }],
        reviews: [
           {
               star: 2,
               body: "this is awesome",
               author: "@jadkskd"
           },
       {
           star: 2,
           body: "this is awesome",
           author: "@ffgdkskd"
       },
       {
           star: 5,
           body: "this is awesome",
           author: "@jadk454545skd"
       }, {
           star: 6,
           body: "this is awesome",
           author: "@ju7u7989adkskd"
       }]

    }];
    app.controller('PanelController', function () {
        this.tab = 1; //ng-init="tab===1"
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
        this.getText = function (e) {
            var selText = "";
            console.log(e);
            if (window.getSelection) {
                if (document.activeElement &&
                        (document.activeElement.tagName.toLowerCase() == "textarea" ||
                         document.activeElement.tagName.toLowerCase() == "input")) {
                    var text = document.activeElement.value;
                    selText = text.substring(document.activeElement.selectionStart,
                                              document.activeElement.selectionEnd);
                }
                else {
                    var selRange = window.getSelection();
                    selText = selRange.toString();
                }
            }
            else {
                if (document.selection.createRange) { // Internet Explorer
                    var range = document.selection.createRange();
                    selText = range.text;
                }
            }
            if (selText !== "") {
                var el = document.getElementById(e);
                var x = event.clientX;     // Get the horizontal coordinate
                var y = event.clientY;     // Get the vertical coordinate
                var coor = "X coords: " + x + ", Y coords: " + y;
                var doc = document.createElement('div');
                doc.style.position = "absolute";
                doc.style.height = "200px";
                doc.style.width = "200px";
                doc.style.zIndex = "9999";
                doc.style.backgroundColor = "#455678";
                doc.style.top = el.offsetTop + "px";
                doc.style.left = el.offsetLeft+"px";
                document.body.appendChild(doc);
                console.log(coor);
               // alert(coor);
            }
        };
    });

}());


/*$("#textSel").bind("mouesup", function (e) {

    var top1 = $().css("top");
    var left1 = $().css("left");
})*/