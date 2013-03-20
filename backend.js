function ListOfBusStations($scope){
    // create an array of contacts (we could retrieve this data from a web service)
    $scope.stations = [
        { "from":"Montpelier","to":"Burlington" }
        , { "from":"Burlington", "to":"Stowe" }
        , { "from":"Vermont", "to":"Boston" }
        , { "from": "Montpelier", "to":"Waterbury" }
        , { "from":"Montpelier", "to":"White river junction" }
        , { "from":"Burlington", "to":"Colchester" }
    ];

};

