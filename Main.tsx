import React, { useEffect, useRef } from 'react'
import { View, Dimensions, Animated } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width

const ANIMATE_DURATION = 500
const ANIMATION_DELAY = 1000

const ReactAnimatedLogo = () => {

    const animatedLogoSize = useRef(new Animated.Value(0)).current;
    const rotateAnimatedVal = useRef(new Animated.Value(0)).current;
    const expandKeyboardVal = useRef(new Animated.Value(0)).current;
    const animatedHeight = useRef(new Animated.Value(SCREEN_WIDTH / 1.2)).current;
    const animatedWidth = useRef(new Animated.Value(SCREEN_WIDTH / 1.2)).current;
    const animatedOpacity = useRef(new Animated.Value(0)).current;

    const boxContainerStyle = {
        opacity: animatedLogoSize.interpolate({
            inputRange: [0, 0.7],
            outputRange: [0, 1],
            extrapolate: "clamp",
        }),
    }

    const expandKeyboardStyle = {

        width: expandKeyboardVal.interpolate({
            inputRange: [0, 1],
            outputRange: [0, SCREEN_WIDTH / 1.9],
            extrapolate: "clamp",
        }),
        marginTop: expandKeyboardVal.interpolate({
            inputRange: [0, 1],
            outputRange: [-115, -100],
            extrapolate: "clamp",
        })
    }

    const tabLineWidth = {
        width: animatedLogoSize.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 60],
            extrapolate: "clamp",
        }),
        marginTop: animatedLogoSize.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, -15],
            extrapolate: "clamp",
        }),
    }

    const rotateStyleLine = {
        transform: [{
            rotateY: rotateAnimatedVal.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "-180deg"]
            })
        }],
        height: rotateAnimatedVal.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [4, 25, 4],
            extrapolate: "clamp",
        })
    }

    const interpolatedRotateAnimation = rotateAnimatedVal.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ["0deg", "-90deg", "-180deg"]
    });


    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(animatedLogoSize, {
                        toValue: 1,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedHeight, {
                        toValue: SCREEN_HEIGHT / 3,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedWidth, {
                        toValue: SCREEN_WIDTH / 2,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedOpacity, {
                        toValue: 1,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),

                ]),
                Animated.timing(rotateAnimatedVal, {
                    toValue: 1,
                    duration: ANIMATE_DURATION,
                    useNativeDriver: false,
                    delay: ANIMATION_DELAY
                }),
                Animated.parallel([
                    Animated.timing(expandKeyboardVal, {
                        toValue: 1,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedHeight, {
                        toValue: SCREEN_WIDTH / 2,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedWidth, {
                        toValue: SCREEN_WIDTH / 3.5,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedOpacity, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(rotateAnimatedVal, {
                        toValue: 2,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedHeight, {
                        toValue: SCREEN_HEIGHT / 3,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedWidth, {
                        toValue: SCREEN_WIDTH / 2,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedOpacity, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(expandKeyboardVal, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(animatedOpacity, {
                        toValue: 0,
                        duration: 100,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),

                    Animated.timing(animatedLogoSize, {
                        toValue: 0,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedHeight, {
                        toValue: SCREEN_WIDTH / 1.2,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                    Animated.timing(animatedWidth, {
                        toValue: SCREEN_WIDTH / 1.2,
                        duration: ANIMATE_DURATION,
                        useNativeDriver: false,
                        delay: ANIMATION_DELAY
                    }),
                ])


            ])
        ).start()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#282c34" }}>
            <Animated.View style={[{ borderColor: 'white', borderWidth: 5, borderRadius: 10, height: animatedHeight, width: animatedWidth }, boxContainerStyle, { transform: [{ rotate: interpolatedRotateAnimation }] }]}>
                <Animated.Image resizeMode={"contain"} source={require("./reactlogo.png")} style={{ height: "100%", width: "100%" }} />
            </Animated.View>
            <Animated.View style={[{ height: 4, backgroundColor: 'white', alignSelf: 'center', borderRadius: 4, opacity: animatedOpacity }, tabLineWidth, rotateStyleLine]} />
            <Animated.View style={[{ height: 150, backgroundColor: 'white', borderRadius: 10, transform: [{perspective: 650},{ rotateX: '70deg' }] }, expandKeyboardStyle]} />
            {/* <View style={[{ height: 200,width:300, backgroundColor: 'white', borderRadius: 10, transform: [{perspective: 700},{ rotateX: '70deg' }] }]}/> */}
        </View>
    )
}

export default ReactAnimatedLogo