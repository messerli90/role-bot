Discord Role Bot
=========

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Built For Discord](https://img.shields.io/badge/built%20for-Discord-7289DA.svg)](http://discordapp.com)

Tiny bot that allows users to self-assign roles. Requires you to set a list of 'safe roles' that users can self-assign to.

You need to create an application and bot to get your BOT TOKEN. This can be done from the [Discord Docs](https://discordapp.com/developers/applications/me).

## Installation

If using Heroku skip the Configuration step below and add the key to your Heroku app's settings under 'Config Variables'.

## Configuration

Run `node setup.js` to initialize your `.env` file or create it yourself to these specs:

```
BOT_TOKEN=XXX
ALLOWED_ROLES=list,your,roles
```

## Usage

The following commands are then available to your users:
```
// Lists the roles the user is allowed to join
!role --help

// Join a role
!role <role name>
```


## Discord API
- [Discord Docs](https://discordapp.com/developers/)
- [Obtain a Key by creating an App here](https://discordapp.com/developers/applications/me) (must be logged in)


## Contribute
If you'd like to contribute feel free to fork and submit a PR.
