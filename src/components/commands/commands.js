import React, { Component } from "react";
// import { useLocation, withRouter, useParams } from "react-router-dom";
import { withState } from "../../utils";

import './commands.css'

class Commands extends Component{
    constructor(props) {
        super(props);
        this.state = {
            category:{
                "fun": {
                    "tweet": {
                        "aliases": [
                            "twiter"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create funny tweets",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "tweet",
                        "short_doc": "",
                        "signature": "<user/id/mention> <tweet>",
                        "full_signature": "eru ( tweet | twiter ) <user/id/mention> <tweet>",
                        "usage": "<user/id/mention> <tweet>",
                        "sub_commands": null
                    },
                    "joke": {
                        "aliases": [
                            "makejoke"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "make a joke",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "joke",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( joke | makejoke ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "8ball": {
                        "aliases": [
                            "8balls"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "ask 8ball",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "8ball",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( 8ball | 8balls ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "fakedc": {
                        "aliases": [
                            "dcmsg"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create funny discord messages",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "fakedc",
                        "short_doc": "",
                        "signature": "<user/id/mention> <message>",
                        "full_signature": "eru ( fakedc | dcmsg ) <user/id/mention> <message>",
                        "usage": "<user/id/mention> <message>",
                        "sub_commands": null
                    },
                    "phcmnt": {
                        "aliases": [
                            "pornhubcomment"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create funny ph comments",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "phcmnt",
                        "short_doc": "",
                        "signature": "<user/id/mention><message>",
                        "full_signature": "eru ( phcmnt | pornhubcomment ) <user/id/mention><message>",
                        "usage": "<user/id/mention><message>",
                        "sub_commands": null
                    },
                    "changemymind": {
                        "aliases": [
                            "cmm"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "change my mind",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "changemymind",
                        "short_doc": "",
                        "signature": "<message>",
                        "full_signature": "eru ( changemymind | cmm ) <message>",
                        "usage": "<message>",
                        "sub_commands": null
                    },
                    "pp": {
                        "aliases": [
                            "ppsize"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "how big is your pp",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "pp",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( pp | ppsize ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "ytcmnt": {
                        "aliases": [
                            "youtubecomment"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create funny youtube comments",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "ytcmnt",
                        "short_doc": "",
                        "signature": "<user/id/mention> <comment>",
                        "full_signature": "eru ( ytcmnt | youtubecomment ) <user/id/mention> <comment>",
                        "usage": "<user/id/mention> <comment>",
                        "sub_commands": null
                    },
                    "tpde": {
                        "aliases": [
                            "thispersondoesnotexist"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "thispersondoesnotexist.com",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "tpde",
                        "short_doc": "",
                        "signature": "experimental",
                        "full_signature": "eru ( tpde | thispersondoesnotexist ) experimental",
                        "usage": "experimental",
                        "sub_commands": null
                    },
                    "gay": {
                        "aliases": [
                            "howgay",
                            "gaymeter"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "how much gae you have?",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "gay",
                        "short_doc": "",
                        "signature": "<user id/user name>",
                        "full_signature": "eru ( gay | howgay | gaymeter ) <user id/user name>",
                        "usage": "<user id/user name>",
                        "sub_commands": null
                    },
                    "wasted": {
                        "aliases": [
                            "wastedgta"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create wasted pic",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "wasted",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( wasted | wastedgta ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "ship": {
                        "aliases": [
                            "lovecalc",
                            "lovecalculator"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "calculate how much you match with your cursh \u25d5\u203f\u21bc",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "ship",
                        "short_doc": "",
                        "signature": "<user1>,<user2>",
                        "full_signature": "eru ( ship | lovecalc | lovecalculator ) <user1>,<user2>",
                        "usage": "<user1>,<user2>",
                        "sub_commands": null
                    },
                    "jail": {
                        "aliases": [
                            "prison"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "jail those users",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "jail",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( jail | prison ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "waifu": {
                        "aliases": [
                            "eru"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "a random waifi for you!",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "waifu",
                        "short_doc": "",
                        "signature": "[message=None]",
                        "full_signature": "eru ( waifu | eru ) [message=None]",
                        "usage": null,
                        "sub_commands": null
                    },
                    "whygay": {
                        "aliases": [
                            "whygae"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create why you gae meme",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "whygay",
                        "short_doc": "",
                        "signature": "<user1/id/mention> <user2/id/mention>",
                        "full_signature": "eru ( whygay | whygae ) <user1/id/mention> <user2/id/mention>",
                        "usage": "<user1/id/mention> <user2/id/mention>",
                        "sub_commands": null
                    },
                    "threats": {
                        "aliases": [
                            "dangers"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "threats to society",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "threats",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( threats | dangers ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "5g1g": {
                        "aliases": [
                            "5g1gg"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "5 guys 1 girl",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "5g1g",
                        "short_doc": "",
                        "signature": "<user1/id/mention> <user2/id/mention>",
                        "full_signature": "eru ( 5g1g | 5g1gg ) <user1/id/mention> <user2/id/mention>",
                        "usage": "<user1/id/mention> <user2/id/mention>",
                        "sub_commands": null
                    },
                    "wanted": {
                        "aliases": [
                            "wantedposter"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "create wanted poster",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "wanted",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( wanted | wantedposter ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "trash": {
                        "aliases": [
                            "trashmeme"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "trash meme",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "trash",
                        "short_doc": "",
                        "signature": "<user/id/name>",
                        "full_signature": "eru ( trash | trashmeme ) <user/id/name>",
                        "usage": "<user/id/name>",
                        "sub_commands": null
                    },
                    "trigger": {
                        "aliases": [
                            "triggered"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "triggered gif",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "trigger",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( trigger | triggered ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "swirl": {
                        "aliases": [
                            "swirlimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "image filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "swirl",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( swirl | swirlimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "sketch": {
                        "aliases": [
                            "sketchimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "sketch filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "sketch",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( sketch | sketchimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "shatter": {
                        "aliases": [
                            "shatterimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "shatter filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "shatter",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( shatter | shatterimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "sepia": {
                        "aliases": [
                            "sepiafilter"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "sepia filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "sepia",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( sepia | sepiafilter ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "rainbow": {
                        "aliases": [
                            "rainbowimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "rainbow filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "rainbow",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( rainbow | rainbowimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "pride": {
                        "aliases": [
                            "gayimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "pride filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "pride",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( pride | gayimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "pixel": {
                        "aliases": [
                            "pixelify"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "pixelate image",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "pixel",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( pixel | pixelify ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "obama": {
                        "aliases": [
                            "medal"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "obama awards medal meme",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "obama",
                        "short_doc": "",
                        "signature": "<user1/id/mention> <user2/id/mention>",
                        "full_signature": "eru ( obama | medal ) <user1/id/mention> <user2/id/mention>",
                        "usage": "<user1/id/mention> <user2/id/mention>",
                        "sub_commands": null
                    },
                    "magik": {
                        "aliases": [
                            "mgaikimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "magik filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "magik",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( magik | mgaikimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "awo": {
                        "aliases": [
                            "eruuuu"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "awooo.....",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "awo",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( awo | eruuuu ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "fedora": {
                        "aliases": [
                            "fedoraa"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "tips fedora",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "fedora",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( fedora | fedoraa ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "invert": {
                        "aliases": [
                            "negativeimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "invert image colours",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "invert",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( invert | negativeimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "delthis": {
                        "aliases": [
                            "deletethis"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "delete this meme",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "delthis",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( delthis | deletethis ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "deepfry": {
                        "aliases": [
                            "deepfried"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "deepfry filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "deepfry",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( deepfry | deepfried ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "communism": {
                        "aliases": [
                            "ussr"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "communism filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "communism",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( communism | ussr ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "lego": {
                        "aliases": [
                            "legofy"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "lego filter",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "lego",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( lego | legofy ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "roast": {
                        "aliases": [
                            "roastthem"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "roast them folks",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "roast",
                        "short_doc": "",
                        "signature": "<user/id/mention or reply-message>",
                        "full_signature": "eru ( roast | roastthem ) <user/id/mention or reply-message>",
                        "usage": "<user/id/mention or reply-message>",
                        "sub_commands": null
                    },
                    "ascii": {
                        "aliases": [
                            "asciify"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "asciify image",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "ascii",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( ascii | asciify ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "ppat": {
                        "aliases": [
                            "patimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "pat image",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "ppat",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( ppat | patimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "bbonk": {
                        "aliases": [
                            "bonkimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "bonk image",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "bbonk",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( bbonk | bonkimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "bomb": {
                        "aliases": [
                            "bombimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "bomb image",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "bomb",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( bomb | bombimage ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    },
                    "roll": {
                        "aliases": [
                            "droll",
                            "diceroll",
                            "dicer"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "roll a dice",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "roll",
                        "short_doc": "",
                        "signature": "<number of dice to roll>",
                        "full_signature": "eru ( roll | droll | diceroll | dicer ) <number of dice to roll>",
                        "usage": "<number of dice to roll>",
                        "sub_commands": null
                    },
                    "rps": {
                        "aliases": [
                            "rockpaperscissor"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "rock paper scissors",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "rps",
                        "short_doc": "",
                        "signature": "[member/id/name/mention]",
                        "full_signature": "eru ( rps | rockpaperscissor ) [member/id/name/mention]",
                        "usage": "[member/id/name/mention]",
                        "sub_commands": null
                    },
                    "bully": {
                        "aliases": [
                            "bullies"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "no bully",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "bully",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( bully | bullies ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "coinflip": {
                        "aliases": [
                            "cf",
                            "flip",
                            "toss"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "flip a coin",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "coinflip",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( coinflip | cf | flip | toss ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "kiss": {
                        "aliases": [
                            "kisses",
                            "smooch"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "OwO, kiss",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "kiss",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( kiss | kisses | smooch ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "akinator": {
                        "aliases": [
                            "aki"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Akinator, guess game",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "akinator",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( akinator | aki ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "nom": {
                        "aliases": [
                            "nomnom"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "nomnom \ud83d\ude0b",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "nom",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( nom | nomnom ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "pat": {
                        "aliases": [
                            "pats"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "owo i love pats",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "pat",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( pat | pats ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "bonk": {
                        "aliases": [
                            "bonks"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "baka...",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "bonk",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( bonk | bonks ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "slap": {
                        "aliases": [
                            "slaps"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "slap that bad person",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "slap",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( slap | slaps ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "poke": {
                        "aliases": [
                            "pokes"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "poke the person to remind them",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "poke",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( poke | pokes ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "knock": {
                        "aliases": [
                            "knocks"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "this person must have done some sins",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "knock",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( knock | knocks ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "hifi": {
                        "aliases": [
                            "hi5",
                            "highfive"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "give highfive to your pal",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "hifi",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( hifi | hi5 | highfive ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "bite": {
                        "aliases": [
                            "bites"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "bite them and show love",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "bite",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( bite | bites ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "blush": {
                        "aliases": [
                            "blushes"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": ">/////<",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "blush",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( blush | blushes ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "dance": {
                        "aliases": [
                            "dances"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "show some dance moves",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "dance",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( dance | dances ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "hug": {
                        "aliases": [
                            "hugs",
                            "cuddle"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "OwO, hug somebody.",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "hug",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( hug | hugs | cuddle ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "cry": {
                        "aliases": [
                            "crys",
                            "cries"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "TwT, why cry ",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "cry",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( cry | crys | cries ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "kill": {
                        "aliases": [
                            "kills"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "must be really mad..",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "kill",
                        "short_doc": "",
                        "signature": "<user name/user id>",
                        "full_signature": "eru ( kill | kills ) <user name/user id>",
                        "usage": "<user name/user id>",
                        "sub_commands": null
                    },
                    "truth": {
                        "aliases": [
                            "turthonly"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "truth or truth",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "truth",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( truth | turthonly ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "smug": {
                        "aliases": [
                            "smugs"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "smug face",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "smug",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( smug | smugs ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "wave": {
                        "aliases": [
                            "waves",
                            "hello"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Hello there beautiful person",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "wave",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( wave | waves | hello ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "pickup": {
                        "aliases": [
                            "pickupline"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "try juicy pickup lines",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "pickup",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( pickup | pickupline ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    }
                },
                "helpful": {
                    "ping": {
                        "aliases": [
                            "pong"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check latency of bot!!",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "ping",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( ping | pong ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "invite": {
                        "aliases": [
                            "inv",
                            "invitelink"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Invite Link for bot",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "invite",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( invite | inv | invitelink ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "support": {
                        "aliases": [
                            "sup"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Support Server Link",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "support",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( support | sup ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "stats": {
                        "aliases": [
                            "botstats",
                            "about"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check bots stats!!",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "stats",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( stats | botstats | about ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "feedback": {
                        "aliases": [
                            "suggestions",
                            "report"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Share your feedbacks or suggestions with us",
                        "enabled": true,
                        "extras": {},
                        "help": "if message is there just send it to suggestions channel\nif no message is there create embed add top.gg button \nadd server link\nadd dm link to eru and ask them to dm her too",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "feedback",
                        "short_doc": "if message is there just send it to suggestions channel",
                        "signature": "[message=None]",
                        "full_signature": "eru ( feedback | suggestions | report ) [message=None]",
                        "usage": null,
                        "sub_commands": null
                    },
                    "help": {
                        "aliases": [
                            "helps"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "I will help you",
                        "enabled": true,
                        "extras": {},
                        "help": "Shows this message",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "help",
                        "short_doc": "Shows this message",
                        "signature": "[command=None] [interaction=None]",
                        "full_signature": "eru ( help | helps ) [command=None] [interaction=None]",
                        "usage": null,
                        "sub_commands": null
                    }
                },
                "moderation": {
                    "commands": {
                        "aliases": [
                            "cmmds"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check disabled commands/categories in currenct channel",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "commands",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( commands | cmmds ) ",
                        "usage": null,
                        "sub_commands": {
                            "reset": {
                                "aliases": [
                                    "resetchannel"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Resets channel commands",
                                "enabled": true,
                                "extras": {},
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "commands",
                                "name": "reset",
                                "short_doc": "",
                                "signature": "<channel/id/mention>",
                                "full_signature": "eru (commands | cmmds ) ( reset | resetchannel ) <channel/id/mention>",
                                "usage": "<channel/id/mention>",
                                "sub_commands": null
                            },
                            "guildreset": {
                                "aliases": [
                                    "rsg"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Resets Guild commands",
                                "enabled": true,
                                "extras": {},
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "commands",
                                "name": "guildreset",
                                "short_doc": "",
                                "signature": "",
                                "full_signature": "eru (commands | cmmds ) ( guildreset | rsg ) ",
                                "usage": null,
                                "sub_commands": null
                            },
                            "stats": {
                                "aliases": [
                                    "status"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Resets channel commands",
                                "enabled": true,
                                "extras": {},
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "commands",
                                "name": "stats",
                                "short_doc": "",
                                "signature": "<channel/id/mention>",
                                "full_signature": "eru (commands | cmmds ) ( stats | status ) <channel/id/mention>",
                                "usage": "<channel/id/mention>",
                                "sub_commands": null
                            }
                        }
                    },
                    "purge": {
                        "aliases": [
                            "clean"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_guild",
                            "manage_messages",
                            "administrator"
                        ],
                        "description": "Delete Messages in the channel",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "purge",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( purge | clean ) ",
                        "usage": null,
                        "sub_commands": {
                            "embed": {
                                "aliases": [
                                    "em"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes messages that have embeds in them.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "embed",
                                "short_doc": "Removes messages that have embeds in them.",
                                "signature": "[search=100]",
                                "full_signature": "eru (purge | clean ) ( embed | em ) [search=100]",
                                "usage": null,
                                "sub_commands": null
                            },
                            "bots": {
                                "aliases": [
                                    "bot"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes a bot user's messages and messages with their optional prefix.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "bots",
                                "short_doc": "Removes a bot user's messages and messages with their optional prefix.",
                                "signature": "[prefix=None] [search=100]",
                                "full_signature": "eru (purge | clean ) ( bots | bot ) [prefix=None] [search=100]",
                                "usage": null,
                                "sub_commands": null
                            },
                            "user": {
                                "aliases": [
                                    "us"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes all messages by the member.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "user",
                                "short_doc": "Removes all messages by the member.",
                                "signature": "<member> [search=100]",
                                "full_signature": "eru (purge | clean ) ( user | us ) <member> [search=100]",
                                "usage": null,
                                "sub_commands": null
                            },
                            "attachments": {
                                "aliases": [
                                    "attc",
                                    "files"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes messages that have embeds or attachments.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "attachments",
                                "short_doc": "Removes messages that have embeds or attachments.",
                                "signature": "[search=100]",
                                "full_signature": "eru (purge | clean ) ( attachments | attc | files ) [search=100]",
                                "usage": null,
                                "sub_commands": null
                            },
                            "contains": {
                                "aliases": [
                                    "ct"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes all messages containing a substring.\nThe substring must be at least 3 characters long.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "contains",
                                "short_doc": "Removes all messages containing a substring.",
                                "signature": "<substr>",
                                "full_signature": "eru (purge | clean ) ( contains | ct ) <substr>",
                                "usage": null,
                                "sub_commands": null
                            },
                            "all": {
                                "aliases": [
                                    "a"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes all messages.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "all",
                                "short_doc": "Removes all messages.",
                                "signature": "[search=100]",
                                "full_signature": "eru (purge | clean ) ( all | a ) [search=100]",
                                "usage": null,
                                "sub_commands": null
                            },
                            "reactions": {
                                "aliases": [
                                    "rc"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "manage_messages",
                                    "manage_guild"
                                ],
                                "description": "",
                                "enabled": true,
                                "extras": {},
                                "help": "Removes all reactions from messages that have them.",
                                "hidden": false,
                                "full_parent_name": "purge",
                                "name": "reactions",
                                "short_doc": "Removes all reactions from messages that have them.",
                                "signature": "[search=100]",
                                "full_signature": "eru (purge | clean ) ( reactions | rc ) [search=100]",
                                "usage": null,
                                "sub_commands": null
                            }
                        }
                    },
                    "prefix": {
                        "aliases": [
                            "pre"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Want to change or check my prefix?",
                        "enabled": true,
                        "extras": {
                            "example": "eru prefix\neru prefix e!",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "prefix",
                        "short_doc": "",
                        "signature": "<prefix>",
                        "full_signature": "eru ( prefix | pre ) <prefix>",
                        "usage": "<prefix>",
                        "sub_commands": null
                    },
                    "ban": {
                        "aliases": [
                            "yeet"
                        ],
                        "brief": null,
                        "checks": [
                            "ban_members",
                            "administrator"
                        ],
                        "description": "Ban users who are annoying",
                        "enabled": true,
                        "extras": {},
                        "help": "Ban member/s ",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "ban",
                        "short_doc": "Ban member/s ",
                        "signature": "<user/id/name/mention/s> [reason]",
                        "full_signature": "eru ( ban | yeet ) <user/id/name/mention/s> [reason]",
                        "usage": "<user/id/name/mention/s> [reason]",
                        "sub_commands": null
                    },
                    "addsticker": {
                        "aliases": [
                            "addstick"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "experimental",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "addsticker",
                        "short_doc": "",
                        "signature": "experimental",
                        "full_signature": "eru ( addsticker | addstick ) experimental",
                        "usage": "experimental",
                        "sub_commands": null
                    },
                    "removeemote": {
                        "aliases": [
                            "rmemoji",
                            "rmemote"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_emojis",
                            "manage_emojis_and_stickers",
                            "manage_guild",
                            "administrator"
                        ],
                        "description": "Remove emote/s",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "removeemote",
                        "short_doc": "",
                        "signature": "<emote/s>",
                        "full_signature": "eru ( removeemote | rmemoji | rmemote ) <emote/s>",
                        "usage": "<emote/s>",
                        "sub_commands": null
                    },
                    "disable": {
                        "aliases": [
                            "ds"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Disable commands/categories in current channel",
                        "enabled": true,
                        "extras": {
                            "example": "eru disable helpful\ne! disable ping",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "disable",
                        "short_doc": "",
                        "signature": "<Commands/Categories>",
                        "full_signature": "eru ( disable | ds ) <Commands/Categories>",
                        "usage": "<Commands/Categories>",
                        "sub_commands": null
                    },
                    "addemote": {
                        "aliases": [
                            "addemoji"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_emojis",
                            "manage_emojis_and_stickers",
                            "manage_guild",
                            "administrator"
                        ],
                        "description": "Add emoji/s",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "addemote",
                        "short_doc": "",
                        "signature": "<name> <image>",
                        "full_signature": "eru ( addemote | addemoji ) <name> <image>",
                        "usage": "<name> <image>",
                        "sub_commands": null
                    },
                    "automod": {
                        "aliases": [
                            "antiraid"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_guild",
                            "ban_members",
                            "administrator"
                        ],
                        "description": "Raid mode config",
                        "enabled": true,
                        "extras": {},
                        "help": "Controls raid mode on the server.\nCalling this command with no arguments will show the current raid\nmode information.\nYou must have Manage Server permissions to use this command or\nits subcommands.",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "automod",
                        "short_doc": "Controls raid mode on the server.",
                        "signature": "",
                        "full_signature": "eru ( automod | antiraid ) ",
                        "usage": null,
                        "sub_commands": {
                            "unignore": {
                                "aliases": [
                                    "protect"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Remove channels from mentionspam ignore list",
                                "enabled": true,
                                "extras": {},
                                "help": "Specifies what channels to take off the ignore list.\nTo use this command you must have the Ban Members permission.",
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "unignore",
                                "short_doc": "Specifies what channels to take off the ignore list.",
                                "signature": "<Channels/id/mention>",
                                "full_signature": "eru (automod | antiraid ) ( unignore | protect ) <Channels/id/mention>",
                                "usage": "<Channels/id/mention>",
                                "sub_commands": null
                            },
                            "disable": {
                                "aliases": [
                                    "disabled",
                                    "off"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Disables raid mode",
                                "enabled": true,
                                "extras": {},
                                "help": "Disables raid mode on the server.\nWhen disabled, the server verification levels are set\nback to Low levels and the bot will stop broadcasting\njoin messages.",
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "disable",
                                "short_doc": "Disables raid mode on the server.",
                                "signature": "",
                                "full_signature": "eru (automod | antiraid ) ( disable | disabled | off ) ",
                                "usage": null,
                                "sub_commands": null
                            },
                            "ignore": {
                                "aliases": [
                                    "bypass"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Add channels to be ignored for mentionspam",
                                "enabled": true,
                                "extras": {},
                                "help": "Specifies what channels ignore mentionspam auto-bans.\nIf a channel is given then that channel will no longer be protected\nby auto-banning from mention spammers.\nTo use this command you must have the Ban Members permission.",
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "ignore",
                                "short_doc": "Specifies what channels ignore mentionspam auto-bans.",
                                "signature": "<Channels/id/mention>",
                                "full_signature": "eru (automod | antiraid ) ( ignore | bypass ) <Channels/id/mention>",
                                "usage": "<Channels/id/mention>",
                                "sub_commands": null
                            },
                            "enable": {
                                "aliases": [
                                    "enabled",
                                    "on"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Enables basic raid mode",
                                "enabled": true,
                                "extras": {},
                                "help": "Enables basic raid mode on the server.\nWhen enabled, server verification level is set to high\nand allows the bot to broadcast new members joining\nto a specified channel.\nIf no channel is given, then the bot will broadcast join\nmessages on the channel this command was used in.",
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "enable",
                                "short_doc": "Enables basic raid mode on the server.",
                                "signature": "<Channel/id/mention>",
                                "full_signature": "eru (automod | antiraid ) ( enable | enabled | on ) <Channel/id/mention>",
                                "usage": "<Channel/id/mention>",
                                "sub_commands": null
                            },
                            "verification": {
                                "aliases": [
                                    "verificationlevel"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Set verification level",
                                "enabled": true,
                                "extras": {},
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "verification",
                                "short_doc": "",
                                "signature": "<highest/high/medium/low/none>",
                                "full_signature": "eru (automod | antiraid ) ( verification | verificationlevel ) <highest/high/medium/low/none>",
                                "usage": "<highest/high/medium/low/none>",
                                "sub_commands": null
                            },
                            "mentionspam": {
                                "aliases": [],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Auto ban for mention spam",
                                "enabled": true,
                                "extras": {},
                                "help": "Enables auto-banning accounts that spam mentions.\nIf a message contains `count` or more mentions then the\nbot will automatically attempt to auto-ban the member.\nThe `count` must be greater than 3. If the `count` is 0\nthen this is disabled.\nThis only applies for user mentions. Everyone or Role\nmentions are not included.\nTo use this command you must have the Ban Members permission.",
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "mentionspam",
                                "short_doc": "Enables auto-banning accounts that spam mentions.",
                                "signature": "<count>",
                                "full_signature": "eru (automod | antiraid ) mentionspam <count>",
                                "usage": "<count>",
                                "sub_commands": null
                            },
                            "strict": {
                                "aliases": [
                                    "str"
                                ],
                                "brief": null,
                                "checks": [
                                    "administrator",
                                    "ban_members",
                                    "manage_guild"
                                ],
                                "description": "Enables strict raid mode (Auto Mod)",
                                "enabled": true,
                                "extras": {},
                                "help": "Enables strict raid mode on the server.\nStrict mode is similar to regular enabled raid mode, with the added\nbenefit of auto-banning members that are spamming. The threshold for\nspamming depends on a per-content basis and also on a per-user basis\nof 15 messages per 17 seconds.\nIf this is considered too strict, it is recommended to fall back to regular\nraid mode.",
                                "hidden": false,
                                "full_parent_name": "automod",
                                "name": "strict",
                                "short_doc": "Enables strict raid mode on the server.",
                                "signature": "<Channel/id/mention>",
                                "full_signature": "eru (automod | antiraid ) ( strict | str ) <Channel/id/mention>",
                                "usage": "<Channel/id/mention>",
                                "sub_commands": null
                            }
                        }
                    },
                    "unban": {
                        "aliases": [
                            "unyeet"
                        ],
                        "brief": null,
                        "checks": [
                            "ban_members",
                            "administrator"
                        ],
                        "description": "Unban them good users",
                        "enabled": true,
                        "extras": {},
                        "help": "Unban Users",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "unban",
                        "short_doc": "Unban Users",
                        "signature": "<user id/s> [reason]",
                        "full_signature": "eru ( unban | unyeet ) <user id/s> [reason]",
                        "usage": "<user id/s> [reason]",
                        "sub_commands": null
                    },
                    "addrole": {
                        "aliases": [
                            "addroles"
                        ],
                        "brief": null,
                        "checks": [
                            "administrator",
                            "manage_permissions",
                            "manage_roles",
                            "manage_guild"
                        ],
                        "description": "Give role/s to user/s",
                        "enabled": true,
                        "extras": {},
                        "help": "Add role/s to member/s",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "addrole",
                        "short_doc": "Add role/s to member/s",
                        "signature": "<user/id/name/mention/s> <role/id/name/mention/s> [reason]",
                        "full_signature": "eru ( addrole | addroles ) <user/id/name/mention/s> <role/id/name/mention/s> [reason]",
                        "usage": "<user/id/name/mention/s> <role/id/name/mention/s> [reason]",
                        "sub_commands": null
                    },
                    "lock": {
                        "aliases": [
                            "lockdown"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_guild",
                            "administrator"
                        ],
                        "description": "Lock channel",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "lock",
                        "short_doc": "",
                        "signature": "<channel/id/name/mention>",
                        "full_signature": "eru ( lock | lockdown ) <channel/id/name/mention>",
                        "usage": "<channel/id/name/mention>",
                        "sub_commands": null
                    },
                    "removerole": {
                        "aliases": [
                            "removeroles"
                        ],
                        "brief": null,
                        "checks": [
                            "administrator",
                            "manage_permissions",
                            "manage_roles",
                            "manage_guild"
                        ],
                        "description": "Remove role/s to user/s",
                        "enabled": true,
                        "extras": {},
                        "help": "Remove role/s to member/s",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "removerole",
                        "short_doc": "Remove role/s to member/s",
                        "signature": "<user/id/name/mention/s> <role/id/name/mention/s> [reason]",
                        "full_signature": "eru ( removerole | removeroles ) <user/id/name/mention/s> <role/id/name/mention/s> [reason]",
                        "usage": "<user/id/name/mention/s> <role/id/name/mention/s> [reason]",
                        "sub_commands": null
                    },
                    "newusers": {
                        "aliases": [
                            "newmembers"
                        ],
                        "brief": null,
                        "checks": [
                            "administrator",
                            "manage_guild"
                        ],
                        "description": "Get info of recently joined users",
                        "enabled": true,
                        "extras": {},
                        "help": "Tells you the newest members of the server.\nThis is useful to check if any suspicious members have\njoined.\nThe count parameter can only be up to 25.",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "newusers",
                        "short_doc": "Tells you the newest members of the server.",
                        "signature": "<count>",
                        "full_signature": "eru ( newusers | newmembers ) <count>",
                        "usage": "<count>",
                        "sub_commands": null
                    },
                    "unlock": {
                        "aliases": [
                            "unlockdown"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_guild",
                            "administrator"
                        ],
                        "description": "Unock channel",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "unlock",
                        "short_doc": "",
                        "signature": "<channel/id/name/mention>",
                        "full_signature": "eru ( unlock | unlockdown ) <channel/id/name/mention>",
                        "usage": "<channel/id/name/mention>",
                        "sub_commands": null
                    },
                    "kick": {
                        "aliases": [
                            "softyeet"
                        ],
                        "brief": null,
                        "checks": [
                            "kick_members",
                            "administrator"
                        ],
                        "description": "Kick user to warn them",
                        "enabled": true,
                        "extras": {},
                        "help": "Kick members",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "kick",
                        "short_doc": "Kick members",
                        "signature": "<user/id/name/mention/s> [reason]",
                        "full_signature": "eru ( kick | softyeet ) <user/id/name/mention/s> [reason]",
                        "usage": "<user/id/name/mention/s> [reason]",
                        "sub_commands": null
                    },
                    "sticky": {
                        "aliases": [
                            "stickylist",
                            "stls"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "show all members for server with sticky names",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "sticky",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( sticky | stickylist | stls ) ",
                        "usage": null,
                        "sub_commands": {
                            "add": {
                                "aliases": [
                                    "addsticky",
                                    "adst"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Add sticky name to users",
                                "enabled": true,
                                "extras": {},
                                "help": "Adds stickyname to a Member",
                                "hidden": false,
                                "full_parent_name": "sticky",
                                "name": "add",
                                "short_doc": "Adds stickyname to a Member",
                                "signature": "<user/id/name/mention>",
                                "full_signature": "eru (sticky | stickylist  | stls ) ( add | addsticky | adst ) <user/id/name/mention>",
                                "usage": "<user/id/name/mention>",
                                "sub_commands": null
                            },
                            "remove": {
                                "aliases": [
                                    "rm",
                                    "rmst"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Remove sticky name frome user",
                                "enabled": true,
                                "extras": {},
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "sticky",
                                "name": "remove",
                                "short_doc": "",
                                "signature": "<user/id/name/mention>",
                                "full_signature": "eru (sticky | stickylist  | stls ) ( remove | rm | rmst ) <user/id/name/mention>",
                                "usage": "<user/id/name/mention>",
                                "sub_commands": null
                            }
                        }
                    },
                    "showcase": {
                        "aliases": [
                            "show"
                        ],
                        "brief": null,
                        "checks": [
                            "administrator"
                        ],
                        "description": "Show precious messages in Starboard channel",
                        "enabled": true,
                        "extras": {
                            "example": "eru showcase #starboard\ne!show #starboard",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "showcase",
                        "short_doc": "",
                        "signature": "<reply message + channel/id>",
                        "full_signature": "eru ( showcase | show ) <reply message + channel/id>",
                        "usage": "<reply message + channel/id>",
                        "sub_commands": null
                    },
                    "custompurge": {
                        "aliases": [
                            "cpurge"
                        ],
                        "brief": null,
                        "checks": [
                            "manage_guild",
                            "manage_messages",
                            "administrator"
                        ],
                        "description": "A advance purge command",
                        "enabled": true,
                        "extras": {
                            "example": "\n            If value has spaces it must be quoted\n            The following options are valid\n            `--user`: A user/name/mention/id to remove\n            `--contains`: A substring to search in message\n            `--starts`: A substring for message to start with\n            `--ends`: A substring for message to end with\n            `--search`: No. of messages to search. Default 100 Max 2000\n            `--after`: Messages must come after this message ID.\n            `--before`: Messages must come before this message ID.\n            Flags (no arguments):\n            `--bot`: Check if bot user.\n            `--embeds`: Check if message has embeds\n            `--files`: Check if message has attachments\n            `--emoji`: Check if message has custom emoji\n            `--reactions`: Check if message has reactions\n            `--or`: Use logical OR for all options.Default 'any'  \n            `--not`: Use logical NOT for all options.\n            ",
                            "gif": null
                        },
                        "help": "A advanced purge command.\nMost options support multiple values to indicate 'any' match.\nIf the value has spaces it must be quoted.\nThe messages are only deleted if all options are met unless\nthe `--or` flag is passed, in which case only if any is met.\nThe following options are valid.\n`--user`: A mention or name of the user to remove.\n`--contains`: A substring to search for in the message.\n`--starts`: A substring to search if the message starts with.\n`--ends`: A substring to search if the message ends with.\n`--search`: How many messages to search. Default 100. Max 2000.\n`--after`: Messages must come after this message ID.\n`--before`: Messages must come before this message ID.\nFlag options (no arguments):\n`--bot`: Check if it's a bot user.\n`--embeds`: Check if the message has embeds.\n`--files`: Check if the message has attachments.\n`--emoji`: Check if the message has custom emoji.\n`--reactions`: Check if the message has reactions\n`--or`: Use logical OR for all options.\n`--not`: Use logical NOT for all options.",
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "custompurge",
                        "short_doc": "A advanced purge command.",
                        "signature": "<arguments>",
                        "full_signature": "eru ( custompurge | cpurge ) <arguments>",
                        "usage": null,
                        "sub_commands": null
                    },
                    "enable": {
                        "aliases": [
                            "en"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Enable commands/categories in current channel",
                        "enabled": true,
                        "extras": {
                            "example": "eru enable helpful\ne! enable ping",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "enable",
                        "short_doc": "",
                        "signature": "<Commands/Categories>",
                        "full_signature": "eru ( enable | en ) <Commands/Categories>",
                        "usage": "<Commands/Categories>",
                        "sub_commands": null
                    }
                },
                "server": {
                    "poll": {
                        "aliases": [
                            "createpoll"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Create polls to get members opinion quickly",
                        "enabled": true,
                        "extras": {
                            "example": "e!createpoll apple,orange,mango\neru poll akeno,rias",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "poll",
                        "short_doc": "",
                        "signature": "<','serperated options>",
                        "full_signature": "eru ( poll | createpoll ) <','serperated options>",
                        "usage": "<','serperated options>",
                        "sub_commands": null
                    },
                    "banner": {
                        "aliases": [
                            "bannerimage"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check user's banner",
                        "enabled": true,
                        "extras": {
                            "example": "eru banner @eru#5028\ne!banner 841372493746798612\ne!banner eru",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "banner",
                        "short_doc": "",
                        "signature": "<user/id/name/mention>",
                        "full_signature": "eru ( banner | bannerimage ) <user/id/name/mention>",
                        "usage": "<user/id/name/mention>",
                        "sub_commands": null
                    },
                    "emojis": {
                        "aliases": [
                            "getemojis"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "View emojis sent inchat",
                        "enabled": true,
                        "extras": {
                            "example": "eru emojis\ne! emojis <:a3:897704645345017887>",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "emojis",
                        "short_doc": "",
                        "signature": "<emojis/reply>",
                        "full_signature": "eru ( emojis | getemojis ) <emojis/reply>",
                        "usage": "<emojis/reply>",
                        "sub_commands": null
                    },
                    "avatar": {
                        "aliases": [
                            "av",
                            "pfp"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check user's avatar",
                        "enabled": true,
                        "extras": {
                            "example": "eru av @eru#5028\ne!avatar 841372493746798612\ne!avatar eru",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "avatar",
                        "short_doc": "",
                        "signature": "<user/id/name/mention>",
                        "full_signature": "eru ( avatar | av | pfp ) <user/id/name/mention>",
                        "usage": "<user/id/name/mention>",
                        "sub_commands": null
                    },
                    "stickers": {
                        "aliases": [
                            "getstickers",
                            "stkr"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "View stickers sent inchat",
                        "enabled": true,
                        "extras": {
                            "example": "eru stickers\ne! emojis <:a3:897704645345017887>",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "stickers",
                        "short_doc": "",
                        "signature": "<emojis/reply>",
                        "full_signature": "eru ( stickers | getstickers | stkr ) <emojis/reply>",
                        "usage": "<emojis/reply>",
                        "sub_commands": null
                    },
                    "spotify": {
                        "aliases": [
                            "sp"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Show what you are listening on spotfiy",
                        "enabled": true,
                        "extras": {
                            "example": "eru sp @eru#5028\ne!spotify 841372493746798612",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "spotify",
                        "short_doc": "",
                        "signature": "<user/id/name/mention>",
                        "full_signature": "eru ( spotify | sp ) <user/id/name/mention>",
                        "usage": "<user/id/name/mention>",
                        "sub_commands": null
                    },
                    "serverinfo": {
                        "aliases": [
                            "si"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check servers's info",
                        "enabled": true,
                        "extras": {
                            "example": "eru si\ne!serverinfo",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "serverinfo",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( serverinfo | si ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "inviteinfo": {
                        "aliases": [
                            "ii"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Check invite link's info",
                        "enabled": true,
                        "extras": {
                            "example": "e!inviteinfo discord.gg/genshinimpact\neru ii azurlane",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "inviteinfo",
                        "short_doc": "",
                        "signature": "<invite id/link>",
                        "full_signature": "eru ( inviteinfo | ii ) <invite id/link>",
                        "usage": "<invite id/link>",
                        "sub_commands": null
                    },
                    "userinfo": {
                        "aliases": [
                            "ui",
                            "info",
                            "whois"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "check user's info",
                        "enabled": true,
                        "extras": {
                            "example": "eru ui @eru#5028\ne! userinfo 841372493746798612",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "userinfo",
                        "short_doc": "",
                        "signature": "<user id/name/mention>",
                        "full_signature": "eru ( userinfo | ui | info | whois ) <user id/name/mention>",
                        "usage": "<user id/name/mention>",
                        "sub_commands": null
                    },
                    "lastfm": {
                        "aliases": [
                            "lfm",
                            "fm"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Manage your last.fm account",
                        "enabled": true,
                        "extras": {},
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "lastfm",
                        "short_doc": "",
                        "signature": "<sub commands>",
                        "full_signature": "eru ( lastfm | lfm | fm ) <sub commands>",
                        "usage": "<sub commands>",
                        "sub_commands": {
                            "username": {
                                "aliases": [
                                    "addusername",
                                    "un"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Set/Check your username.",
                                "enabled": true,
                                "extras": {
                                    "example": "eru lfm username\ne!lastfm un username",
                                    "gif": null
                                },
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "lastfm",
                                "name": "username",
                                "short_doc": "",
                                "signature": "<username>",
                                "full_signature": "eru (lastfm | lfm  | fm ) ( username | addusername | un ) <username>",
                                "usage": "<username>",
                                "sub_commands": null
                            },
                            "remove": {
                                "aliases": [
                                    "rm",
                                    "reset"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "Remove your username.",
                                "enabled": true,
                                "extras": {
                                    "example": "eru lfm rm\ne!lastfm remove",
                                    "gif": null
                                },
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "lastfm",
                                "name": "remove",
                                "short_doc": "",
                                "signature": "",
                                "full_signature": "eru (lastfm | lfm  | fm ) ( remove | rm | reset ) ",
                                "usage": null,
                                "sub_commands": null
                            }
                        }
                    },
                    "lyrics": {
                        "aliases": [
                            "ly"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Search lyrics of now playing song",
                        "enabled": true,
                        "extras": {
                            "example": "eru ly @eru#5028\ne!lyrics 841372493746798612",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "lyrics",
                        "short_doc": "",
                        "signature": "<user/id/mention>",
                        "full_signature": "eru ( lyrics | ly ) <user/id/mention>",
                        "usage": "<user/id/mention>",
                        "sub_commands": null
                    }
                },
                "utilities": {
                    "fact": {
                        "aliases": [
                            "afact"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "get a random fact",
                        "enabled": true,
                        "extras": {
                            "example": "eru fact\ne! afact",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "fact",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( fact | afact ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "color": {
                        "aliases": [
                            "colour"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "check colors with thier rgb/hex values",
                        "enabled": true,
                        "extras": {
                            "example": "eru color 244,233,233\ne!colour #111111",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "color",
                        "short_doc": "",
                        "signature": "<color value>",
                        "full_signature": "eru ( color | colour ) <color value>",
                        "usage": "<color value>",
                        "sub_commands": null
                    },
                    "urban": {
                        "aliases": [
                            "ud"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "search for urbandictionary",
                        "enabled": true,
                        "extras": {
                            "example": "eru ud wassup\ne! ud elon musk",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "urban",
                        "short_doc": "",
                        "signature": "<anything>",
                        "full_signature": "eru ( urban | ud ) <anything>",
                        "usage": "<anything>",
                        "sub_commands": null
                    },
                    "inshorts": {
                        "aliases": [
                            "is",
                            "news"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "<:beta:941321545459056671> Check News ",
                        "enabled": true,
                        "extras": {
                            "example": "eru inshorts\ne!is technology",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "inshorts",
                        "short_doc": "",
                        "signature": "<category>",
                        "full_signature": "eru ( inshorts | is | news ) <category>",
                        "usage": "<category>",
                        "sub_commands": null
                    },
                    "track": {
                        "aliases": [
                            "trc"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "search tracks on spotify",
                        "enabled": true,
                        "extras": {
                            "example": "eru trc hyouka\ne! trc nandemoniya",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "track",
                        "short_doc": "",
                        "signature": "<anything>",
                        "full_signature": "eru ( track | trc ) <anything>",
                        "usage": "<anything>",
                        "sub_commands": null
                    },
                    "youtube": {
                        "aliases": [
                            "yt"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "search youtube",
                        "enabled": true,
                        "extras": {
                            "example": "eru yt hyouka\ne! youtube pewdiepie",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "youtube",
                        "short_doc": "",
                        "signature": "<anything>",
                        "full_signature": "eru ( youtube | yt ) <anything>",
                        "usage": "<anything>",
                        "sub_commands": null
                    },
                    "dictionary": {
                        "aliases": [
                            "define",
                            "dict"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "looking for proper meaning of words?",
                        "enabled": true,
                        "extras": {
                            "example": "eru dict hat\ne! define chair",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "dictionary",
                        "short_doc": "",
                        "signature": "<anything>",
                        "full_signature": "eru ( dictionary | define | dict ) <anything>",
                        "usage": "<anything>",
                        "sub_commands": null
                    },
                    "privacysetting": {
                        "aliases": [
                            "pvcset"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Set your privacy settings. Your messages wont be tracked if set ON",
                        "enabled": true,
                        "extras": {
                            "example": "eru privacysetting off\ne! pvcset on",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "privacysetting",
                        "short_doc": "",
                        "signature": "<status>",
                        "full_signature": "eru ( privacysetting | pvcset ) <status>",
                        "usage": null,
                        "sub_commands": null
                    },
                    "anime": {
                        "aliases": [
                            "animesearch"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "search for animes",
                        "enabled": true,
                        "extras": {
                            "example": "eru anime hyouka\ne! anime one piece",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "anime",
                        "short_doc": "",
                        "signature": "<anything>",
                        "full_signature": "eru ( anime | animesearch ) <anything>",
                        "usage": "<anything>",
                        "sub_commands": null
                    },
                    "policy": {
                        "aliases": [
                            "privacy"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "our privacy policy",
                        "enabled": true,
                        "extras": {
                            "example": "eru privacy\ne! policy",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "policy",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( policy | privacy ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "wikipedia": {
                        "aliases": [
                            "wiki"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "search wikipedia",
                        "enabled": true,
                        "extras": {
                            "example": "eru wiki hello world\ne! wikipedia hyouka",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "wikipedia",
                        "short_doc": "",
                        "signature": "<anything>",
                        "full_signature": "eru ( wikipedia | wiki ) <anything>",
                        "usage": "<anything>",
                        "sub_commands": null
                    },
                    "yttogether": {
                        "aliases": [
                            "yttg"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "youtube together",
                        "enabled": true,
                        "extras": {
                            "example": "eru yttg\ne! yttogether",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "yttogether",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( yttogether | yttg ) ",
                        "usage": null,
                        "sub_commands": null
                    },
                    "math": {
                        "aliases": [
                            "maths"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "Do some maths with eru",
                        "enabled": true,
                        "extras": {
                            "example": "\n            eru math 1+2\n            eru math sqrt(1+2)\n            ___functions available___\n            + , - , * , / , ^ , sqrt , sin , cos , tan , asin , acos , atan , deg , rad            \n            ",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "math",
                        "short_doc": "",
                        "signature": "<expression>",
                        "full_signature": "eru ( math | maths ) <expression>",
                        "usage": "<expression>",
                        "sub_commands": null
                    },
                    "translate": {
                        "aliases": [
                            "tr"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "tranlsate texts",
                        "enabled": true,
                        "extras": {
                            "example": "eru tr hello\ne! translate en i am eru",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "translate",
                        "short_doc": "",
                        "signature": "<message>",
                        "full_signature": "eru ( translate | tr ) <message>",
                        "usage": "<message>",
                        "sub_commands": {
                            "languages": {
                                "aliases": [
                                    "lang"
                                ],
                                "brief": null,
                                "checks": [],
                                "description": "translate languages",
                                "enabled": true,
                                "extras": {
                                    "example": "eru tr lang english",
                                    "gif": null
                                },
                                "help": null,
                                "hidden": false,
                                "full_parent_name": "translate",
                                "name": "languages",
                                "short_doc": "",
                                "signature": "<language>",
                                "full_signature": "eru (translate | tr ) ( languages | lang ) <language>",
                                "usage": "<language>",
                                "sub_commands": null
                            }
                        }
                    },
                    "quote": {
                        "aliases": [
                            "excerpt"
                        ],
                        "brief": null,
                        "checks": [],
                        "description": "get a random quote",
                        "enabled": true,
                        "extras": {
                            "example": "eru quote\ne!excerpt",
                            "gif": null
                        },
                        "help": null,
                        "hidden": false,
                        "full_parent_name": "",
                        "name": "quote",
                        "short_doc": "",
                        "signature": "",
                        "full_signature": "eru ( quote | excerpt ) ",
                        "usage": null,
                        "sub_commands": null
                    }
                }
            
            },
            commands:{
                "jishaku": [
                    "Jishaku",
                    "jishaku"
                ],
                "jsk": [
                    "Jishaku",
                    "jishaku"
                ],
                "truth": [
                    "fun",
                    "truth"
                ],
                "turthonly": [
                    "fun",
                    "truth"
                ],
                "pickup": [
                    "fun",
                    "pickup"
                ],
                "pickupline": [
                    "fun",
                    "pickup"
                ],
                "phcmnt": [
                    "fun",
                    "phcmnt"
                ],
                "pornhubcomment": [
                    "fun",
                    "phcmnt"
                ],
                "joke": [
                    "fun",
                    "joke"
                ],
                "makejoke": [
                    "fun",
                    "joke"
                ],
                "tweet": [
                    "fun",
                    "tweet"
                ],
                "twiter": [
                    "fun",
                    "tweet"
                ],
                "8ball": [
                    "fun",
                    "8ball"
                ],
                "8balls": [
                    "fun",
                    "8ball"
                ],
                "fakedc": [
                    "fun",
                    "fakedc"
                ],
                "dcmsg": [
                    "fun",
                    "fakedc"
                ],
                "changemymind": [
                    "fun",
                    "changemymind"
                ],
                "cmm": [
                    "fun",
                    "changemymind"
                ],
                "pp": [
                    "fun",
                    "pp"
                ],
                "ppsize": [
                    "fun",
                    "pp"
                ],
                "ytcmnt": [
                    "fun",
                    "ytcmnt"
                ],
                "youtubecomment": [
                    "fun",
                    "ytcmnt"
                ],
                "tpde": [
                    "fun",
                    "tpde"
                ],
                "thispersondoesnotexist": [
                    "fun",
                    "tpde"
                ],
                "gay": [
                    "fun",
                    "gay"
                ],
                "howgay": [
                    "fun",
                    "gay"
                ],
                "gaymeter": [
                    "fun",
                    "gay"
                ],
                "wasted": [
                    "fun",
                    "wasted"
                ],
                "wastedgta": [
                    "fun",
                    "wasted"
                ],
                "ship": [
                    "fun",
                    "ship"
                ],
                "lovecalc": [
                    "fun",
                    "ship"
                ],
                "lovecalculator": [
                    "fun",
                    "ship"
                ],
                "jail": [
                    "fun",
                    "jail"
                ],
                "prison": [
                    "fun",
                    "jail"
                ],
                "waifu": [
                    "fun",
                    "waifu"
                ],
                "eru": [
                    "fun",
                    "waifu"
                ],
                "whygay": [
                    "fun",
                    "whygay"
                ],
                "whygae": [
                    "fun",
                    "whygay"
                ],
                "threats": [
                    "fun",
                    "threats"
                ],
                "dangers": [
                    "fun",
                    "threats"
                ],
                "5g1g": [
                    "fun",
                    "5g1g"
                ],
                "5g1gg": [
                    "fun",
                    "5g1g"
                ],
                "wanted": [
                    "fun",
                    "wanted"
                ],
                "wantedposter": [
                    "fun",
                    "wanted"
                ],
                "trash": [
                    "fun",
                    "trash"
                ],
                "trashmeme": [
                    "fun",
                    "trash"
                ],
                "trigger": [
                    "fun",
                    "trigger"
                ],
                "triggered": [
                    "fun",
                    "trigger"
                ],
                "swirl": [
                    "fun",
                    "swirl"
                ],
                "swirlimage": [
                    "fun",
                    "swirl"
                ],
                "sketch": [
                    "fun",
                    "sketch"
                ],
                "sketchimage": [
                    "fun",
                    "sketch"
                ],
                "shatter": [
                    "fun",
                    "shatter"
                ],
                "shatterimage": [
                    "fun",
                    "shatter"
                ],
                "sepia": [
                    "fun",
                    "sepia"
                ],
                "sepiafilter": [
                    "fun",
                    "sepia"
                ],
                "rainbow": [
                    "fun",
                    "rainbow"
                ],
                "rainbowimage": [
                    "fun",
                    "rainbow"
                ],
                "pride": [
                    "fun",
                    "pride"
                ],
                "gayimage": [
                    "fun",
                    "pride"
                ],
                "pixel": [
                    "fun",
                    "pixel"
                ],
                "pixelify": [
                    "fun",
                    "pixel"
                ],
                "obama": [
                    "fun",
                    "obama"
                ],
                "medal": [
                    "fun",
                    "obama"
                ],
                "magik": [
                    "fun",
                    "magik"
                ],
                "mgaikimage": [
                    "fun",
                    "magik"
                ],
                "fedora": [
                    "fun",
                    "fedora"
                ],
                "fedoraa": [
                    "fun",
                    "fedora"
                ],
                "delthis": [
                    "fun",
                    "delthis"
                ],
                "deletethis": [
                    "fun",
                    "delthis"
                ],
                "invert": [
                    "fun",
                    "invert"
                ],
                "negativeimage": [
                    "fun",
                    "invert"
                ],
                "deepfry": [
                    "fun",
                    "deepfry"
                ],
                "deepfried": [
                    "fun",
                    "deepfry"
                ],
                "awo": [
                    "fun",
                    "awo"
                ],
                "eruuuu": [
                    "fun",
                    "awo"
                ],
                "lego": [
                    "fun",
                    "lego"
                ],
                "legofy": [
                    "fun",
                    "lego"
                ],
                "roast": [
                    "fun",
                    "roast"
                ],
                "roastthem": [
                    "fun",
                    "roast"
                ],
                "ascii": [
                    "fun",
                    "ascii"
                ],
                "asciify": [
                    "fun",
                    "ascii"
                ],
                "communism": [
                    "fun",
                    "communism"
                ],
                "ussr": [
                    "fun",
                    "communism"
                ],
                "ppat": [
                    "fun",
                    "ppat"
                ],
                "patimage": [
                    "fun",
                    "ppat"
                ],
                "bbonk": [
                    "fun",
                    "bbonk"
                ],
                "bonkimage": [
                    "fun",
                    "bbonk"
                ],
                "bomb": [
                    "fun",
                    "bomb"
                ],
                "bombimage": [
                    "fun",
                    "bomb"
                ],
                "roll": [
                    "fun",
                    "roll"
                ],
                "droll": [
                    "fun",
                    "roll"
                ],
                "diceroll": [
                    "fun",
                    "roll"
                ],
                "dicer": [
                    "fun",
                    "roll"
                ],
                "rps": [
                    "fun",
                    "rps"
                ],
                "rockpaperscissor": [
                    "fun",
                    "rps"
                ],
                "bully": [
                    "fun",
                    "bully"
                ],
                "bullies": [
                    "fun",
                    "bully"
                ],
                "coinflip": [
                    "fun",
                    "coinflip"
                ],
                "cf": [
                    "fun",
                    "coinflip"
                ],
                "flip": [
                    "fun",
                    "coinflip"
                ],
                "toss": [
                    "fun",
                    "coinflip"
                ],
                "kiss": [
                    "fun",
                    "kiss"
                ],
                "kisses": [
                    "fun",
                    "kiss"
                ],
                "smooch": [
                    "fun",
                    "kiss"
                ],
                "akinator": [
                    "fun",
                    "akinator"
                ],
                "aki": [
                    "fun",
                    "akinator"
                ],
                "nom": [
                    "fun",
                    "nom"
                ],
                "nomnom": [
                    "fun",
                    "nom"
                ],
                "pat": [
                    "fun",
                    "pat"
                ],
                "pats": [
                    "fun",
                    "pat"
                ],
                "bonk": [
                    "fun",
                    "bonk"
                ],
                "bonks": [
                    "fun",
                    "bonk"
                ],
                "slap": [
                    "fun",
                    "slap"
                ],
                "slaps": [
                    "fun",
                    "slap"
                ],
                "poke": [
                    "fun",
                    "poke"
                ],
                "pokes": [
                    "fun",
                    "poke"
                ],
                "knock": [
                    "fun",
                    "knock"
                ],
                "knocks": [
                    "fun",
                    "knock"
                ],
                "hifi": [
                    "fun",
                    "hifi"
                ],
                "hi5": [
                    "fun",
                    "hifi"
                ],
                "highfive": [
                    "fun",
                    "hifi"
                ],
                "bite": [
                    "fun",
                    "bite"
                ],
                "bites": [
                    "fun",
                    "bite"
                ],
                "blush": [
                    "fun",
                    "blush"
                ],
                "blushes": [
                    "fun",
                    "blush"
                ],
                "dance": [
                    "fun",
                    "dance"
                ],
                "dances": [
                    "fun",
                    "dance"
                ],
                "hug": [
                    "fun",
                    "hug"
                ],
                "hugs": [
                    "fun",
                    "hug"
                ],
                "cuddle": [
                    "fun",
                    "hug"
                ],
                "cry": [
                    "fun",
                    "cry"
                ],
                "crys": [
                    "fun",
                    "cry"
                ],
                "cries": [
                    "fun",
                    "cry"
                ],
                "kill": [
                    "fun",
                    "kill"
                ],
                "kills": [
                    "fun",
                    "kill"
                ],
                "smug": [
                    "fun",
                    "smug"
                ],
                "smugs": [
                    "fun",
                    "smug"
                ],
                "wave": [
                    "fun",
                    "wave"
                ],
                "waves": [
                    "fun",
                    "wave"
                ],
                "hello": [
                    "fun",
                    "wave"
                ],
                "ping": [
                    "helpful",
                    "ping"
                ],
                "pong": [
                    "helpful",
                    "ping"
                ],
                "help": [
                    "helpful",
                    "help"
                ],
                "helps": [
                    "helpful",
                    "help"
                ],
                "invite": [
                    "helpful",
                    "invite"
                ],
                "inv": [
                    "helpful",
                    "invite"
                ],
                "invitelink": [
                    "helpful",
                    "invite"
                ],
                "support": [
                    "helpful",
                    "support"
                ],
                "sup": [
                    "helpful",
                    "support"
                ],
                "stats": [
                    "helpful",
                    "stats"
                ],
                "botstats": [
                    "helpful",
                    "stats"
                ],
                "about": [
                    "helpful",
                    "stats"
                ],
                "feedback": [
                    "helpful",
                    "feedback"
                ],
                "suggestions": [
                    "helpful",
                    "feedback"
                ],
                "report": [
                    "helpful",
                    "feedback"
                ],
                "avatar": [
                    "server",
                    "avatar"
                ],
                "av": [
                    "server",
                    "avatar"
                ],
                "pfp": [
                    "server",
                    "avatar"
                ],
                "spotify": [
                    "server",
                    "spotify"
                ],
                "sp": [
                    "server",
                    "spotify"
                ],
                "serverinfo": [
                    "server",
                    "serverinfo"
                ],
                "si": [
                    "server",
                    "serverinfo"
                ],
                "banner": [
                    "server",
                    "banner"
                ],
                "bannerimage": [
                    "server",
                    "banner"
                ],
                "inviteinfo": [
                    "server",
                    "inviteinfo"
                ],
                "ii": [
                    "server",
                    "inviteinfo"
                ],
                "userinfo": [
                    "server",
                    "userinfo"
                ],
                "ui": [
                    "server",
                    "userinfo"
                ],
                "info": [
                    "server",
                    "userinfo"
                ],
                "whois": [
                    "server",
                    "userinfo"
                ],
                "lastfm": [
                    "server",
                    "lastfm"
                ],
                "lfm": [
                    "server",
                    "lastfm"
                ],
                "fm": [
                    "server",
                    "lastfm"
                ],
                "lyrics": [
                    "server",
                    "lyrics"
                ],
                "ly": [
                    "server",
                    "lyrics"
                ],
                "stickers": [
                    "server",
                    "stickers"
                ],
                "getstickers": [
                    "server",
                    "stickers"
                ],
                "stkr": [
                    "server",
                    "stickers"
                ],
                "emojis": [
                    "server",
                    "emojis"
                ],
                "getemojis": [
                    "server",
                    "emojis"
                ],
                "poll": [
                    "server",
                    "poll"
                ],
                "createpoll": [
                    "server",
                    "poll"
                ],
                "youtube": [
                    "utilities",
                    "youtube"
                ],
                "yt": [
                    "utilities",
                    "youtube"
                ],
                "inshorts": [
                    "utilities",
                    "inshorts"
                ],
                "is": [
                    "utilities",
                    "inshorts"
                ],
                "news": [
                    "utilities",
                    "inshorts"
                ],
                "translate": [
                    "utilities",
                    "translate"
                ],
                "tr": [
                    "utilities",
                    "translate"
                ],
                "track": [
                    "utilities",
                    "track"
                ],
                "trc": [
                    "utilities",
                    "track"
                ],
                "color": [
                    "utilities",
                    "color"
                ],
                "colour": [
                    "utilities",
                    "color"
                ],
                "privacysetting": [
                    "utilities",
                    "privacysetting"
                ],
                "pvcset": [
                    "utilities",
                    "privacysetting"
                ],
                "dictionary": [
                    "utilities",
                    "dictionary"
                ],
                "define": [
                    "utilities",
                    "dictionary"
                ],
                "dict": [
                    "utilities",
                    "dictionary"
                ],
                "policy": [
                    "utilities",
                    "policy"
                ],
                "privacy": [
                    "utilities",
                    "policy"
                ],
                "quote": [
                    "utilities",
                    "quote"
                ],
                "excerpt": [
                    "utilities",
                    "quote"
                ],
                "yttogether": [
                    "utilities",
                    "yttogether"
                ],
                "yttg": [
                    "utilities",
                    "yttogether"
                ],
                "urban": [
                    "utilities",
                    "urban"
                ],
                "ud": [
                    "utilities",
                    "urban"
                ],
                "anime": [
                    "utilities",
                    "anime"
                ],
                "animesearch": [
                    "utilities",
                    "anime"
                ],
                "math": [
                    "utilities",
                    "math"
                ],
                "maths": [
                    "utilities",
                    "math"
                ],
                "fact": [
                    "utilities",
                    "fact"
                ],
                "afact": [
                    "utilities",
                    "fact"
                ],
                "wikipedia": [
                    "utilities",
                    "wikipedia"
                ],
                "wiki": [
                    "utilities",
                    "wikipedia"
                ]
            },
            searchText:'',
            activeCategory:'',
            sidebarHidden:true,
        };
    }

    createCategory = () => {
        let arr = Object.keys(this.state.category).map((e) => {
            // console.log(e)
            return (
                <div key={e} onClick={(x)=>{
                    // console.log(e)
                    this.setState((pre) => {
                        return {
                            activeCategory: e,
                            sidebarHidden: (pre.sidebarHidden)?true:true
                        }
                    })
                }} className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >
                    <span className="text-[15px] ml-4  capitalize font-bold">{e}</span>
                </div>
            )
        })
        return arr
    }

    createCommands = () => {
        let actCat = this.state.activeCategory || 'server';
        let arr = Object.entries(this.state.category[actCat]).map(([k,v], i) => {
            // console.log(k)
            // console.log(v)
            return (
                <div key={k} id={k} className="m-5 fadeIn">
                    <div className="p-2 px-4 border-c_focus-light border-2 rounded-lg">
                        <div className="flex justify-between">
                            <div className="">
                                {k}
                            </div>
                            <div className="flex break-words">
                                {/* {
                                    v.checks.map((e)=>{
                                        return (
                                            <>
                                            <div className="text-sm text-rose-200 bg-pink-600 rounded-lg p-1 px-2">
                                                {e}
                                            </div>
                                            </>
                                        )
                                    })
                                } */}
                                {v.checks.length>0?
                                    <div className="text-sm text-rose-200 bg-pink-600 rounded-lg p-1 px-2">
                                        ● Admin
                                    </div>
                                :''}
                                {/* <span className="text-sm text-rose-200 bg-pink-600 rounded-lg p-1 px-2">● Admin</span> */}
                            </div>
                        </div>
                        <hr className="border-c_nav-pink-light my-2 "></hr>
                        <div className="break-words flex-row">
                            <div className="">
                                {v.description}
                            </div>
                            <div className="bg-rose-50 rounded-md p-1 px-3 shadow-inner whitespace-pre-line">
                                    Aliases: {v.aliases.join(', ')}<br/>
                                    Signature: {v.full_signature}<br/>
                                    {(()=>{
                                        if(v.extras.example){
                                            return (
                                                <>
                                                Example:<br/>
                                                <div className="ml-4">
                                                    {v.extras.example}
                                                </div>
                                                </>
                                            )
                                        }
                                    })()
                                    }
                            </div>
                            {/* subcommands */}
                            {
                                ((vsub_commands)=>{
                                    // console.log(vsub_commands)
                                    if(vsub_commands){
                                        let oo = Object.entries(vsub_commands).map(([ek, di],i)=>{
                                            return (
                                                
                                                <div key={ek} className="border-2 border-c_focus-light rounded-md my-2 p-1 px-3 flex-row">
                                                    <div className="">
                                                        {ek}
                                                    </div>
                                                    <hr className="border-c_nav-pink-light my-2 "></hr>


                                                    <div className="break-words flex-row">
                                                        <div className="">
                                                            {v.description}
                                                        </div>
                                                        <div className="bg-rose-50 rounded-md p-1 px-3 shadow-inner whitespace-pre-line">
                                                                Aliases: {di.aliases.join(', ')}<br/>
                                                                Signature: {di.full_signature}<br/>
                                                                {(()=>{
                                                                    if(di.extras.example){
                                                                        return (
                                                                            <>
                                                                            Example:<br/>
                                                                            <div className="ml-4">
                                                                                {di.extras.example}
                                                                            </div>
                                                                            </>
                                                                        )
                                                                    }
                                                                })()
                                                                }
                                                        </div>
                                                    </div>



                                                </div>
                                                
                                            )
                                        })
                                        return oo
                                    }
                                })(v.sub_commands)


                               
                            }
                        </div>
                    </div>
                </div>
            )
        });
        return arr;
    }

    componentDidMount() {
        if (this.props.state && this.props.state.searchText){
            this.setState((pre)=>{
                return {searchText:this.props.state.searchText}
            },this.searchCmmd)
        }
    }

    handleSidebar = ( event ) => {
        // console.log(1)'
        // console.log(this.state.sidebarHidden)
        event.preventDefault();
        this.setState((prevState) => {
            return {sidebarHidden:!prevState.sidebarHidden}
        })
        // console.log(this.state.sidebarHidden)
    }

    searchCmmd = () => {
        
        if (true) {
            console.log(1,this.state.searchText)
            let data = this.state.commands[this.state.searchText.toLowerCase()];
            if (data){
                let [cog, command] = data
                // console.log(cog, command)
                if (cog){
                    this.setState({
                            activeCategory:cog,
                            sidebarHidden:true
                        }
                    ,()=>{
                        document.getElementById(command).scrollIntoView({behavior:'smooth'});
                        return null;
                    })
                }
            }


        }

    }

    
    
    render() {
        return (
            <>
            <div className="relative overflow-x-hidden h-full  container flex flex-1 justify-center items-center mx-auto ">

                {/* sm-screen sidebar */}
                <div className={this.state.sidebarHidden?"hidden md:hidden":"flex justify-center min-h-fit h-full overflow-x-hidden md:hidden absolute left-0 top-0 z-10 w-screen"}>
                    <div className={"flex-row p-1 border-r-2 w-5/6 h-full border-red-50 text-center bg-rose-200"}>
                        <div className="text-pink-800 text-xl">
                            <div className="p-1 mt-1 flex justify-between items-center">
                                {/* <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i> */}
                                <h1 className=" font-bold text-pink-800 text-[15px] ml-3">Categories</h1>
                                {/* <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="Close()" ></i> */}
                                <button className="mr-3" onClick={this.handleSidebar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                            {/* <div className="my-2 bg-gray-600 h-[1px]"></div> */}
                        </div>
                        <hr className="border-red-50 my-2 "></hr>
                        <div
                            className="p-1 flex items-center rounded-md px-4 duration-300 "
                        >
                            {/* <i className="bi bi-search text-sm"></i> */}
                            <div className="relative mt-3 w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input value={this.state.searchText} onChange={(e)=>{
                                        this.setState({searchText:e.target.value})
                                    }} onKeyDown={(e)=>{
                                        if (e.key === 'Enter') {
                                            this.searchCmmd();
                                        }
                                    }}  type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-rose-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-1 focus:outline-c_focus-light" placeholder="eru help"/>
                            </div>
                        </div>
                        {this.createCategory()}
                        {/* <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >

                            <span className="text-[15px] ml-4  font-bold">Home</span>
                        </div>

                        <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >

                            <span className="text-[15px] ml-4  font-bold">Home</span>
                        </div>
                        <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >

                            <span className="text-[15px] ml-4  font-bold">Home</span>
                        </div> */}
                    </div>

                    <button className="backdrop-blur-sm w-1/6 h-full" onClick={this.handleSidebar}>
                        
                    </button>
                </div>
                

                {/* Actual div */}
                <div className="flex-auto container opacity-95 justify-between items-center my-2 mx-2 md:mx-auto rounded-lg bg-rose-100 overflow-x-hidden">
                    <div className="flex flex-row">

                        {/* Categories */}
                        <div className="hidden p-1 border-r-2 border-red-50 md:block w-2/6 xl:w-1/6 overflow-y-auto text-center bg-rose-200">
                            <div className="text-pink-800 text-xl">
                                <div className="p-1 mt-1 flex items-center">
                                    {/* <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i> */}
                                    <h1 className="font-bold text-pink-800 text-[15px] ml-3">Categories</h1>
                                    {/* <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="Close()" ></i> */}
                                </div>
                                {/* <div className="my-2 bg-gray-600 h-[1px]"></div> */}
                            </div>
                            <hr className="border-red-50 my-2 "></hr>
                            <div className="p-1 flex items-center rounded-md px-4 duration-300 ">
                                {/* <i className="bi bi-search text-sm"></i> */}
                                <div className="relative mt-3 w-full">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input value={this.state.searchText} onChange={(e)=>{
                                        this.setState({searchText:e.target.value})
                                    }} onKeyDown={(e)=>{
                                        if (e.key === 'Enter') {
                                            this.searchCmmd();
                                        }
                                    }}  type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-rose-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-pink-500 focus:border-pink-500 focus:outline-1 focus:outline-c_focus-light" placeholder="eru help"/>
                                </div>
                            </div>

                            {this.createCategory()}
                            {/* <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >

                                <span className="text-[15px] ml-4  font-bold">Home</span>
                            </div>

                            <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >

                                <span className="text-[15px] ml-4  font-bold">Home</span>
                            </div>
                            <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-c_focus-light " >
  
                                <span className="text-[15px] ml-4  font-bold">Home</span>
                            </div> */}
                        </div>

                        {/* Commands */}
                        <div className="w-full p-1 md:w-4/6 xl:w-5/6">
                            <div className="text-pink-800 text-2xl ">
                                <div className="flex justify-between md:justify-center p-1 items-center">
                                    <button className="ml-3 md:hidden" onClick={this.handleSidebar}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <h1 className="font-bold text-center text-pink-800 text-[15px] ">Commands List</h1>
                                    {/* <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onclick="Close()" ></i> */}
                                    <button disabled className="ml-3 md:hidden opacity-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                {/* <div className="my-2 bg-gray-600 h-[1px]"></div> */}
                            </div>
                            <hr className="border-white my-2 "></hr>
                            <div className="mt-4 text-left flex-col">


                                {/* commands starts here */}
                                {this.createCommands()}
                                {/* <div className="m-5">
                                    <div className="p-2 px-4 border-c_focus-light border-2 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className="">
                                                command1
                                            </div>
                                            <div className="">
                                                Admin
                                            </div>
                                        </div>
                                        <hr className="border-c_nav-pink-light my-2 "></hr>
                                        <div className="break-words">
                                            {"Description".repeat(100)}
                                        </div>
                                    </div>
                                </div>

                                <div className="m-5">
                                    <div className="p-2 px-4 border-c_focus-light border-2 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className="">
                                                command1
                                            </div>
                                            <div className="">
                                                Admin
                                            </div>
                                        </div>
                                        <hr className="border-c_nav-pink-light my-2 "></hr>
                                        <div className="break-words">
                                            {"Description".repeat(100)}
                                        </div>
                                    </div>
                                </div> */}

                                
                                {/* {"hello".repeat(100)} */}
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withState(Commands);