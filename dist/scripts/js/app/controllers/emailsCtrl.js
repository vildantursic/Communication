var app = angular.module('app');

app.controller('emailsCtrl', function ($scope, $mdDialog, $http, $mdToast, myHttp, myDialog, myPopup, $animate, $state, $timeout, $mdBottomSheet, $rootScope, $localStorage) {

    $scope.email = {
        user: 'homevildan@hotmail.com',
        pass: 'sani1993',
        mail: 'imap-mail.outlook.com'
    };

    $scope.users = [
        {
            "address": "828 Nautilus Avenue, Lopezo, Louisiana, 4069",
            "phone": "+1 (897) 463-2624",
            "email": "ethel ferguson@xiix.name",
            "company": "XIIX",
            "name": "Ethel Ferguson",
            "isActive": true,
            "id": "562f8374ecadac8a7c049b26"
        },
        {
            "address": "131 Lawrence Street, Dante, Massachusetts, 8957",
            "phone": "+1 (908) 467-2091",
            "email": "tracy ferrell@daycore.io",
            "company": "DAYCORE",
            "name": "Tracy Ferrell",
            "isActive": false,
            "id": "562f83748259adb6dfb7945b"
        },
        {
            "address": "797 Bushwick Court, Tivoli, Maine, 3213",
            "phone": "+1 (804) 572-2464",
            "email": "roseann morse@zappix.info",
            "company": "ZAPPIX",
            "name": "Roseann Morse",
            "isActive": false,
            "id": "562f837466f4e9db6a2bc78b"
        },
        {
            "address": "930 Radde Place, Ernstville, District Of Columbia, 4716",
            "phone": "+1 (843) 586-3293",
            "email": "patrice shepard@centregy.org",
            "company": "CENTREGY",
            "name": "Patrice Shepard",
            "isActive": true,
            "id": "562f837400b875fdc1de53e7"
        },
        {
            "address": "526 Just Court, Sparkill, Kansas, 3268",
            "phone": "+1 (883) 475-2295",
            "email": "wendy guy@zolar.biz",
            "company": "ZOLAR",
            "name": "Wendy Guy",
            "isActive": false,
            "id": "562f837490faf22532627aba"
        },
        {
            "address": "856 Thomas Street, Windsor, New Mexico, 9952",
            "phone": "+1 (942) 416-3760",
            "email": "greta harrison@geeky.biz",
            "company": "GEEKY",
            "name": "Greta Harrison",
            "isActive": false,
            "id": "562f83744f2f1e7329ae6afa"
        },
        {
            "address": "689 Apollo Street, Chestnut, Connecticut, 1131",
            "phone": "+1 (899) 538-2936",
            "email": "snyder perez@elpro.com",
            "company": "ELPRO",
            "name": "Snyder Perez",
            "isActive": false,
            "id": "562f83741fbc35fe21912f9c"
        },
        {
            "address": "759 Keap Street, Blanco, Delaware, 8037",
            "phone": "+1 (947) 524-3447",
            "email": "wells gilliam@applideck.co.uk",
            "company": "APPLIDECK",
            "name": "Wells Gilliam",
            "isActive": false,
            "id": "562f8374c8478fe253a78460"
        },
        {
            "address": "624 Coventry Road, Laurelton, Rhode Island, 510",
            "phone": "+1 (875) 570-3836",
            "email": "gates lambert@proflex.us",
            "company": "PROFLEX",
            "name": "Gates Lambert",
            "isActive": true,
            "id": "562f837414191ee01062144f"
        },
        {
            "address": "548 Kaufman Place, Santel, American Samoa, 4246",
            "phone": "+1 (827) 435-3676",
            "email": "dianne peck@myopium.net",
            "company": "MYOPIUM",
            "name": "Dianne Peck",
            "isActive": false,
            "id": "562f837495f3b5e193d5c439"
        },
        {
            "address": "845 Anchorage Place, Knowlton, Virginia, 2280",
            "phone": "+1 (931) 545-2587",
            "email": "jerry osborn@exposa.ca",
            "company": "EXPOSA",
            "name": "Jerry Osborn",
            "isActive": true,
            "id": "562f837463c1898962b93d51"
        },
        {
            "address": "993 Sands Street, Northridge, Indiana, 897",
            "phone": "+1 (813) 496-2604",
            "email": "clemons sheppard@valpreal.tv",
            "company": "VALPREAL",
            "name": "Clemons Sheppard",
            "isActive": true,
            "id": "562f8374156134ab2a1407b8"
        },
        {
            "address": "808 Herkimer Court, Harborton, Northern Mariana Islands, 6466",
            "phone": "+1 (950) 405-2070",
            "email": "jacqueline marks@eclipsent.name",
            "company": "ECLIPSENT",
            "name": "Jacqueline Marks",
            "isActive": true,
            "id": "562f83748448910498d229d5"
        },
        {
            "address": "708 Post Court, Advance, Wyoming, 1262",
            "phone": "+1 (995) 459-3227",
            "email": "felecia park@cytrak.io",
            "company": "CYTRAK",
            "name": "Felecia Park",
            "isActive": true,
            "id": "562f8374aed7362c93b665d1"
        },
        {
            "address": "117 Ashford Street, Clay, Nevada, 2386",
            "phone": "+1 (923) 457-2010",
            "email": "carey bird@zoinage.info",
            "company": "ZOINAGE",
            "name": "Carey Bird",
            "isActive": true,
            "id": "562f837488e890ac2070d3d3"
        },
        {
            "address": "475 Fay Court, Dennard, Arkansas, 6288",
            "phone": "+1 (836) 490-3114",
            "email": "lottie conner@interodeo.org",
            "company": "INTERODEO",
            "name": "Lottie Conner",
            "isActive": true,
            "id": "562f83747553afa1b957ec98"
        },
        {
            "address": "516 Montgomery Place, Kenmar, Michigan, 1658",
            "phone": "+1 (857) 524-2166",
            "email": "francis mcdowell@yogasm.biz",
            "company": "YOGASM",
            "name": "Francis Mcdowell",
            "isActive": false,
            "id": "562f83742805be11f0adf7df"
        },
        {
            "address": "527 Remsen Street, Springville, Georgia, 8530",
            "phone": "+1 (934) 443-3278",
            "email": "marcie faulkner@zidant.biz",
            "company": "ZIDANT",
            "name": "Marcie Faulkner",
            "isActive": false,
            "id": "562f83746122a6f03398b4ec"
        },
        {
            "address": "477 Bedell Lane, Troy, California, 8655",
            "phone": "+1 (815) 587-3960",
            "email": "vickie harrington@quiltigen.com",
            "company": "QUILTIGEN",
            "name": "Vickie Harrington",
            "isActive": true,
            "id": "562f8374db7fc1958a548e71"
        },
        {
            "address": "629 Mersereau Court, Gallina, Arizona, 6695",
            "phone": "+1 (870) 595-2807",
            "email": "zimmerman stuart@updat.co.uk",
            "company": "UPDAT",
            "name": "Zimmerman Stuart",
            "isActive": true,
            "id": "562f8374ebe0482261465808"
        }
    ];

    var auth = '?user='+ $localStorage.mail.user +'&pass='+ $localStorage.mail.pass +'&mail='+ $localStorage.mail.mail;

    // Connect to mail if you already entered credentials (session storage)
    if($localStorage.mail){
        myHttp($scope, {method: 'GET', url: 'api/v1/c5/mailer' + auth });
    }

    $scope.emailConnectDialog = function(event, dialogName){

        myDialog(event, dialogName, $scope, function(){

            $scope.$storage = $localStorage.$default({
                mail: $scope.email
            });

            if ($localStorage.mail != undefined){
                myHttp($scope, {method: 'GET', url: 'api/v1/c5/mailer' + auth });

                myPopup('Connected to email');
            }

        });

    };

    ///////////////////
    // Grid
    ///////////////////
    $scope.items = [
        { name: 'Video oIP', icon: 'hangout' },
        { name: 'Voice oIP', icon: 'mail' },
        { name: 'Phone', icon: 'message' },
        { name: 'Chat Room', icon: 'copy2' },
        { name: 'E-mail', icon: 'facebook' }
    ];
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };

    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'views/partials/directives/gridMenu.html',
            controller: 'emailsCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $mdToast.show(
                $mdToast.simple()
                    .content(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
            );
        });
    };

    ///////////////

    $scope.object = '';

    //Pagination
    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $timeout(function () {
        $scope.numberOfPages = function () {
            return Math.ceil($scope.object.length / $scope.pageSize);
        };
    }, 1000);

});

//user: 'homevildan@hotmail.com',
//pass: 'sani1993',
//mail: 'imap-mail.outlook.com'

//chat.globalgps.ba:5222