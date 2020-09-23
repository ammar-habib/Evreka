import React, {Component} from 'react';
import {Container, Row, Col, Tabs, Tab, Form, Button} from "react-bootstrap";
import './App.css';
import EventList from "./component/common/event-list/event-list";
import TakeAction from "./component/take-action/take-action";
import Location from "./component/common/location/location";

const myData = {
    "data": [
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1588172625.mp3",
                    "type": "audio"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-04-29T15:03:44.871Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Plansız Rota 10:51",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "dsfvbnv ",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "İmren KARALAR",
                    "title": "Şoför"
                }
            ],
            "id": 13409,
            "location": {
                "latitude": 39.9229025,
                "type": "single_point",
                "longitude": 32.8419197
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1588172618.mp3",
                    "type": "audio"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-04-29T15:03:37.406Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Plansız Rota 10:51",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "dsfvbnv ",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "İmren KARALAR",
                    "title": "Şoför"
                }
            ],
            "id": 13408,
            "location": {
                "latitude": 39.9229025,
                "type": "single_point",
                "longitude": 32.8419197
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1588172548.mp3",
                    "type": "audio"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-04-29T15:02:27.652Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Plansız Rota 10:51",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "dsfvbnv ",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "İmren KARALAR",
                    "title": "Şoför"
                }
            ],
            "id": 13407,
            "location": {
                "latitude": 39.9229357,
                "type": "single_point",
                "longitude": 32.8419088
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1588172539.mp3",
                    "type": "audio"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-04-29T15:02:19.094Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Plansız Rota 10:51",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "dsfvbnv ",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "İmren KARALAR",
                    "title": "Şoför"
                }
            ],
            "id": 13406,
            "location": {
                "latitude": 39.9228845,
                "type": "single_point",
                "longitude": 32.8419053
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1587840179.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-04-25T18:42:58.885Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "truck renkli",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/67",
                    "value": "v6.5.2.7 test1",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "truck",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Asım Doğan NAMLI",
                    "title": "Şoför"
                }
            ],
            "id": 13397,
            "location": {
                "latitude": 39.8959337,
                "type": "single_point",
                "longitude": 32.8335157
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1584440476.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-03-17T10:21:15.009Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Plansız Rota 13:04",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Flat Tire",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "İmren KARALAR",
                    "title": "Şoför"
                }
            ],
            "id": 13003,
            "location": {
                "latitude": 39.9229594,
                "type": "single_point",
                "longitude": 32.8418861
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1584439637.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-03-17T10:07:15.719Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "truck renkli",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Plansız Rota 13:04",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "truck",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "İmren KARALAR",
                    "title": "Şoför"
                }
            ],
            "id": 13002,
            "location": {
                "latitude": 39.922966,
                "type": "single_point",
                "longitude": 32.8418967
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1584021116.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-03-12T13:51:55.895Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "truck renkli",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/67",
                    "value": "v6.5.2.3 test",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "truck",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Asım Doğan NAMLI",
                    "title": "Şoför"
                }
            ],
            "id": 12982,
            "location": {
                "latitude": 39.8921736,
                "type": "single_point",
                "longitude": 32.7818015
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1580124682.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-27T11:37:50.009Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-27T11:31:19.692Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/67",
                    "value": "Ad Hoc Route 12:41",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Flat Tire",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "00000",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Berkay AKÇORA",
                    "title": "Şoför"
                }
            ],
            "id": 12834,
            "location": {
                "latitude": 39.8974902,
                "type": "single_point",
                "longitude": 32.7761183
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1580122489.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "deneme",
                    "task_id": null,
                    "title": "Çözüm Bildir",
                    "user": "evreka",
                    "date": "2020-01-27T10:58:46.343Z",
                    "action_taken": true,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-27T10:54:48.945Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "truck renkli",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Ad Hoc Route 12:43",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "truck",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Çözüm Bildir",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Mehmet PANCAROĞLU",
                    "title": "Şoför"
                }
            ],
            "id": 12833,
            "location": {
                "latitude": 39.8974793,
                "type": "single_point",
                "longitude": 32.7762278
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1580120425.mp3",
                    "type": "audio"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-27T10:20:25.340Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Ad Hoc Route 12:43",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Engine Malfunction",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Mehmet PANCAROĞLU",
                    "title": "Şoför"
                }
            ],
            "id": 12832,
            "location": {
                "latitude": 39.8975212,
                "type": "single_point",
                "longitude": 32.7762372
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1580120208.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-27T10:17:06.304Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-27T10:16:48.601Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "truck renkli",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Ad Hoc Route 12:43",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "truck",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Mehmet PANCAROĞLU",
                    "title": "Şoför"
                }
            ],
            "id": 12831,
            "location": {
                "latitude": 39.8974983,
                "type": "single_point",
                "longitude": 32.7762436
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1580119903.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "sgsfkgskgg\ngfgfgdfg\ndsmgsgnsmgnsmgnsmgnsmnsmgnsmgnsmgsgmngsd fmgLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat arcu et lacus lobortis, sit amet auctor velit rhoncus. Nam eu ipsum ante. Proin imperdiet et eros sit amet cursus. Sed s",
                    "task_id": null,
                    "title": "Çözüm Bildir",
                    "user": "evreka",
                    "date": "2020-01-27T10:13:19.855Z",
                    "action_taken": true,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-27T10:11:43.221Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "Ad Hoc Route 12:43",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Flat Tire",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Çözüm Bildir",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "06 ADN 61",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Mehmet PANCAROĞLU",
                    "title": "Şoför"
                }
            ],
            "id": 12830,
            "location": {
                "latitude": 39.8975006,
                "type": "single_point",
                "longitude": 32.77625
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1580119225.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-27T10:08:50.157Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-27T10:00:25.582Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/67",
                    "value": "Ad Hoc Route 12:41",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Engine Malfunction",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "00000",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "Berkay AKÇORA",
                    "title": "Şoför"
                }
            ],
            "id": 12828,
            "location": {
                "latitude": 39.8974943,
                "type": "single_point",
                "longitude": 32.7762561
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1578667909.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-14T06:17:10.629Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-10T14:51:47.014Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "122",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Engine Malfunction",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "ozde12",
                    "title": "Şoför"
                }
            ],
            "id": 12805,
            "location": {
                "latitude": 39.8974852,
                "type": "single_point",
                "longitude": 32.7762242
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1578667889.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-14T06:17:13.864Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-10T14:51:28.500Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "122",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Engine Malfunction",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "ozde12",
                    "title": "Şoför"
                }
            ],
            "id": 12804,
            "location": {
                "latitude": 39.8974852,
                "type": "single_point",
                "longitude": 32.7762242
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1578667792.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Aksiyon Gerekmiyor",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 0
                },
                {
                    "comment": "jhghgjh",
                    "task_id": null,
                    "title": "Çözüm Bildir",
                    "user": "evreka",
                    "date": "2020-01-14T06:17:23.206Z",
                    "action_taken": true,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-10T14:49:52.321Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "122",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Engine Malfunction",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Çözüm Bildir",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "ozde12",
                    "title": "Şoför"
                }
            ],
            "id": 12803,
            "location": {
                "latitude": 39.8974827,
                "type": "single_point",
                "longitude": 32.7762213
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1578667749.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-14T06:17:33.243Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-10T14:49:08.676Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "truck renkli",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "122",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "truck",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "ozde12",
                    "title": "Şoför"
                }
            ],
            "id": 12802,
            "location": {
                "latitude": 39.8974827,
                "type": "single_point",
                "longitude": 32.7762213
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1578667731.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-14T06:17:40.860Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-10T14:48:50.933Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "122",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Flat Tire",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "ozde12",
                    "title": "Şoför"
                }
            ],
            "id": 12801,
            "location": {
                "latitude": 39.8974834,
                "type": "single_point",
                "longitude": 32.7762185
            }
        },
        {
            "media": [
                {
                    "url": "https://media.evreka.co/1578667657.jpg",
                    "type": "image"
                }
            ],
            "actions": [
                {
                    "comment": "",
                    "task_id": null,
                    "title": "Aksiyon Gerekmiyor",
                    "user": "evreka",
                    "date": "2020-01-10T14:48:17.103Z",
                    "action_taken": true,
                    "action_id": 0
                },
                {
                    "comment": "",
                    "task_id": "",
                    "title": "Çözüm Bildir",
                    "user": "",
                    "date": "",
                    "action_taken": false,
                    "action_id": 1
                }
            ],
            "details": [
                {
                    "format": "date",
                    "value": "2020-01-10T14:47:35.914Z",
                    "title": "Tarih"
                },
                {
                    "format": "incident_type",
                    "value": "Breakdown",
                    "title": "Tip"
                },
                {
                    "format": "string",
                    "link": "/routing/operations/1",
                    "value": "122",
                    "title": "Rota İsmi"
                },
                {
                    "format": "string",
                    "value": "Engine Malfunction",
                    "title": "Kategori"
                },
                {
                    "format": "string",
                    "value": "Aksiyon Gerekmiyor",
                    "title": "Aksiyon"
                },
                {
                    "format": "string",
                    "value": "-",
                    "title": "Kalan Görev(ler)"
                },
                {
                    "format": "vehicle",
                    "value": "imren",
                    "title": "Araç"
                },
                {
                    "format": "string",
                    "value": "ozde12",
                    "title": "Şoför"
                }
            ],
            "id": 12800,
            "location": {
                "latitude": 39.8974809,
                "type": "single_point",
                "longitude": 32.7762164
            }
        }
    ]
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showActionModal: false,
        };
    }

    render() {

        return (
            <div className="page-wrapper">
                <Container fluid>
                    <Row className="">
                        <Col xl="8">
                            <h3 className="heading3 text-uppercase">Events</h3>
                            {myData.data.map((items, i) => {
                                console.log(items);
                                {
                                    return (
                                        <div key={i} className="eventListing__list" onClick={console.log(items)} >
                                            <div className="eventListing__text">
                                                <div><b>Date</b></div>
                                                {items.details.map((detail, i) => {
                                                    if (detail.format == "date") {
                                                        return <div key={i}>
                                                            <div>{detail.value}</div>
                                                        </div>
                                                    }

                                                })}
                                            </div>
                                            <div className="eventListing__text">
                                                <div><b>Type</b></div>
                                                {items.details.map((detail, i) => {
                                                    if (detail.format == "incident_type") {
                                                        return <div key={i}>
                                                            <div>{detail.value}</div>
                                                        </div>
                                                    }

                                                })}
                                            </div>
                                            <div className="eventListing__text">
                                                <div><b>Event ID</b></div>
                                                <div><u>{items.id}</u></div>
                                            </div>
                                            <div className="eventListing__text">
                                                <div><b>Vehicle</b></div>
                                                {items.details.map((detail, i) => {
                                                    if (detail.format == "vehicle") {
                                                        return <div key={i}>
                                                            <div>{detail.value}</div>
                                                        </div>
                                                    }

                                                })}
                                            </div>
                                            <div className="eventListing__text">
                                                <div><b>Action</b></div>
                                                {items.actions.map((action, i) => {
                                                    return <div key={i}>
                                                        <div>{action.action_taken}</div>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </Col>
                        <Col xl="4">
                            <h3 className="heading3 text-uppercase">Event details</h3>
                            <div className="p-2 bg-white">
                                <Form.Row>
                                    <Col xl="6" className="mb-3">
                                        <Button className="customBtn" variant="primary" block>no action
                                            needed</Button>
                                    </Col>
                                    <Col xl="6" className="mb-3">
                                        <Button className="customBtn" variant="secondary" block
                                                onClick={() => this.setState({showActionModal: true})}>take
                                            action</Button>
                                    </Col>
                                </Form.Row>
                                <Tabs defaultActiveKey="details" id="details-tab" className="customTabs mb-3">
                                    <Tab eventKey="details" title="DETAILS">
                                        <Row>
                                            <Col xl="6" className="mb-3">
                                                <div><b>Temperature Threshold</b></div>
                                                <div>50c</div>
                                            </Col>
                                            <Col xl="6" className="mb-3">
                                                <div><b>Sensor</b></div>
                                                <div>50c</div>
                                            </Col>
                                        </Row>
                                    </Tab>
                                    <Tab eventKey="location" title="LOCATION">
                                        <Location/>
                                    </Tab>
                                    <Tab eventKey="media" title="MEDIA">
                                        media
                                    </Tab>
                                </Tabs>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <TakeAction
                    show={this.state.showActionModal}
                    hide={() => this.setState({showActionModal: false})}
                />
            </div>
        );
    }
}

export default App;
