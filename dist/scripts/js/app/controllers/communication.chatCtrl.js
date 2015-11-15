/**
 * Created by Vildan on 10/27/2015.
 */
var app = angular.module('app');

app.controller('chatCtrl', function ($scope, myHttp, myDialog, myPopup, $timeout, socket) {

    $('form').submit(function(){

        socket.emit('chat message', $('#m').val(), function(){
            console.log("Error user does not exist");
        });
        $('#m').val('');
        return false;
    });

    socket.on('chat message', function(data){
        $('#messages').append('<li><img src="/images/icons/me.jpg" class="md-avatar" alt="{{ ::user.who}}" />   ' + data.msg + '</li>');
        $("#chat-box").animate({ scrollTop: $('#chat-box').prop("scrollHeight")}, 1000);
    });

    socket.on('whisper', function(data){
        $('#messages').append('<li style="color: #3498db"><strong>'+ data.nick +'</strong>   ' + data.msg + '</li>');
        $("#chat-box").animate({ scrollTop: $('#chat-box').prop("scrollHeight")}, 1000);
    })

});