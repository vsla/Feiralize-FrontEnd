import React from "react";
import { Platform } from "react-native";
import {Icon} from "react-native-elements";

export default ({ name, color, size}) => (
    console.log(name),
    <Icon
        name={Platform.OS === "ios" ? 'ios-' + name : 'md-'+name}
        color={color}
        size={size}
        type='ionicon'
        
    />
);