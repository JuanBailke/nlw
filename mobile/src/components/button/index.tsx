import {
    TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator,
} from "react-native";
import {IconProps as TablerIconProps} from "@tabler/icons-react-native"

import {styles} from "./styles";
import {colors} from "@/styles/theme";
import { Children } from "react";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;
}

function Button({children, isLoading = false, ...rest}: ButtonProps){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} disabled={isLoading} {...rest}>
            {isLoading ? <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
        </TouchableOpacity>
    );
}

function Title({children}: TextProps){
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

type iconProps = {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({icon: Icon}: iconProps){
    return (
        <Icon color={colors.gray[100]} size={24} />
    );
}

Button.Title = Title;
Button.Icon = Icon; 

export {Button};