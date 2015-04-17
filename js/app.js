(function () {
    var app = angular.module('store', []);
    app.controller('StoreContoller', function() {
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
    });

}());

