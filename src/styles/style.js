import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "Helvetica, Arial, Sans-Serif, sans-serif",
        "background": "white"
    },
    "title": {
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "textOverflowEllipsis": "overflow",
        "overflow": "hidden",
        "display": "block"
    },
    "selected-image": {
        "height": 500
    },
    "select-video": {
        "height": 500
    },
    "selected-image img": {
        "width": "100%",
        "height": 450
    },
    "select-video video": {
        "width": "100%",
        "height": 450
    },
    "image-thumbnail": {
        "display": "flex",
        "justifyContent": "space-around",
        "overflow": "auto",
        "overflowY": "hidden"
    },
    "video-thumbnail": {
        "display": "flex",
        "justifyContent": "space-around",
        "overflow": "auto",
        "overflowY": "hidden"
    },
    "image-thumbnail img": {
        "width": 70,
        "height": 70,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "border": "1px solid grey"
    },
    "video-thumbnail video": {
        "width": 70,
        "height": 70,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "border": "1px solid grey"
    }
});