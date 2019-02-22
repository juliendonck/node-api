import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  const response = {
    repos: [
      {
          "id": 0,
          "name": "oscoin",
          "description": "the open source coin",
          "owner": "monadic",
          "lastUpdated": "1529425176",
          "forks": "2303",
          "license": "GPL",
          "OSC": "804",
          "content": [
            {
              "id": 0,
              "type": "dir",
              "size": 0,
              "name": "src",
              "lastUpdated": "1529425176",
            },
            {
              "id": 1,
              "type": "file",
              "size": 625,
              "name": "readme.md",
              "lastUpdated": "1529425176",
            },
          ]
      },
      {
          "id": 1,
          "name": "radicle",
          "description": "a blocktree language",
          "owner": "monadic",
          "lastUpdated": "1529484039",
          "forks": "9323",
          "license": "MIT",
          "OSC": "231",
          "content": [
            {
              "id": 0,
              "type": "dir",
              "size": 0,
              "name": "src",
              "lastUpdated": "1529425176",
            },
            {
              "id": 1,
              "type": "file",
              "size": 625,
              "name": "readme.md",
              "lastUpdated": "1529425176",
            },
          ]
      },
      {
          "id": 2,
          "name": "oscoin-frontend",
          "description": "The front end code of the GUI that let's users manage their repos through a web interface",
          "owner": "monadic",
          "lastUpdated": "1529484039",
          "forks": "231",
          "license": "MIT",
          "OSC": "231",
          "content": [
            {
              "id": 0,
              "type": "dir",
              "size": 0,
              "name": "public",
              "lastUpdated": "1529425176",
            },
            {
              "id": 1,
              "type": "dir",
              "size": 0,
              "name": "src",
              "lastUpdated": "1529425176",
            },
            {
              "id": 2,
              "type": "file",
              "size": 625,
              "name": ".eslintignore",
              "lastUpdated": "1529425176",
            },
            {
              "id": 3,
              "type": "file",
              "size": 625,
              "name": ".eslintrc.json",
              "lastUpdated": "1529425176",
            },
            {
              "id": 4,
              "type": "file",
              "size": 625,
              "name": ".gitignore",
              "lastUpdated": "1529425176",
            },
            {
              "id": 5,
              "type": "file",
              "size": 625,
              "name": "package.json",
              "lastUpdated": "1529425176",
            },
            {
              "id": 6,
              "type": "file",
              "size": 625,
              "name": "yarn.lock",
              "lastUpdated": "1529425176",
            },
          ]
      },
      {
          "id": 3,
          "name": "light-client",
          "description": "the light client",
          "owner": "monadic",
          "lastUpdated": "1529484039",
          "forks": "6343",
          "license": "MIT",
          "OSC": "231",
          "content": [
            {
              "id": 0,
              "type": "dir",
              "size": 0,
              "name": "src",
              "lastUpdated": "1529425176",
            },
            {
              "id": 1,
              "type": "file",
              "size": 625,
              "name": "readme.md",
              "lastUpdated": "1529425176",
            },
          ]
      },
    ],
    users: [
      {
        "id": 0,
        "lastName": "Donck",
        "firstName": "Julien",
        "username": "julien",
        "avatarUrl": "https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/2326909.jpg"
      },
      {
        "id": 1,
        "lastName": "Akpolat",
        "firstName": "Onur",
        "username": "onr",
        "avatarUrl": "https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/1712926.png"
      },
      {
        "id": 2,
        "lastName": "Sellier",
        "firstName": "Alexis",
        "username": "cloudhead",
        "avatarUrl": "https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/40774.png"
      },
      {
        "id": 3,
        "lastName": "Karni",
        "firstName": "Julian",
        "username": "jkarni",
        "avatarUrl": "https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/1657498.png"
      },
      {
        "id": 4,
        "lastName": "Diakomichalis",
        "firstName": "Eleftherios",
        "username": "lftherios",
        "avatarUrl": "https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/853825.png"
      },
      {
        "id": 5,
        "lastName": "Altintop",
        "firstName": "Kim",
        "username": "kalt",
        "avatarUrl": "https://res.cloudinary.com/juliendonck/image/upload/v1536080565/avatars/6163.png"
      },
    ]
  }
  res.json(response)
})

// app.get('/users', (req, res) => {
//   const response = [
//     {
//         "id": 0,
//         "lastName": "donck",
//         "firstName": "Julien",
//     },
//     {
//         "id": 1,
//         "lastName": "test",
//         "firstName": "Julien",
//     },
//   ]
//   res.json(response)
// })
module.exports = app