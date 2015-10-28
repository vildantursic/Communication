/**
 * Created by Vildan on 10/27/2015.
 */
var app = angular.module('app');

app.controller('chatCtrl', function ($scope, myHttp, myDialog, myPopup, $timeout, socket) {

    $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
        $("#chat-box").animate({ scrollTop: $('#chat-box').prop("scrollHeight")}, 1000);
    });

});