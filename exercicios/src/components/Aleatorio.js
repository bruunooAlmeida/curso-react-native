import React from 'react'
import { Text } from "react-native"

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

export default () => <Text > {getRandom(100)} </Text>

