export const configuration =
{
    "Server": {
        "title": "Servers",
        "titleFontSize": "16",
        "servers": [
            {
                "name": "wspólna nauka",
                "imgURL": "server2.jpg"
            },
            {
                "name": "granie w komputer",
                "imgURL": "server1.jpg"
            },
            {
                "name": "granie w muzyczke",
                "imgURL": "server3.jpg",
            }
        ],
        "bottomBar": [
            {
                "name": "user",
                "url": "",
                "icon": "fas fa-user"
            },
            {
                "name": "settings",
                "url": "",
                "icon": "fas fa-cog"
            }
        ]
    },
    "Channel": {
        "title": "Projekt\u00A0",
        "arrowIcon": "fas fa-location-arrow",
        "channels": [
            {
                "serverID": 0,
                "name": "KANAŁY TEKSTOWE",
                "type": "text",
                "subChannels": [
                    { "channelName": "ogólny" },
                    { "channelName": "ciekawostki" },
                    { "channelName": "dowcipy" },
                    { "channelName": "memy" },
                    { "channelName": "ważne informacje" },
                    { "channelName": "stuff" }
                ]
            },
            {
                "serverID": 0,
                "name": "KANAŁY GŁOSOWE",
                "type": "voice",
                "icon": "fas fa-volume-down",
                "subChannels": [
                    { "channelName": "luźne rozmowy" },
                    { "channelName": "nauka śpiewu" },
                    { "channelName": "gramy w cska" },
                    { "channelName": "memy" },
                    { "channelName": "ważne informacje" }
                ]
            }
        ]
    },
    "TopBar": {
        "text": "ogólny",
        "userIcon": "fas fa-user-friends",
        "pinIcon": "fas fa-thumbtack",
        "bellIcon": "fas fa-bell-slash",
        "bellIconOff": "fas fa-bell",
        "helpIcon": "fas fa-question-circle",
        "searchIcon" : "fas fa-search"
    },
    "Active": []
}