import { Modal, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SCREENDIMENSIONS } from '../constants/constants'
import { colors } from '../constants/colors'
import ActionsheetHeader from './ActionsheetHeader'
const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    children: React.ReactNode, modalVisible: boolean, setModalVisible: (visible: boolean) => void, height: number
}

const ModalOverlay: React.FC<Props> = ({ children, modalVisible, setModalVisible, height }) => {
    return (
        <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", flex: 1, justifyContent: "flex-end" }}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={{ flex: 1 }} />
                </TouchableWithoutFeedback>

                <View style={{ height: height ? height : SCREEN_HEIGHT * 0.5, width: SCREEN_WIDTH, backgroundColor: colors.Surface_light }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ActionsheetHeader />
                        <View style={{ paddingHorizontal: SCREEN_WIDTH * .05, flex: 1 }}>
                            {children}

                        </View>
                    </SafeAreaView>
                </View>

            </View>
        </Modal>

    )
}

export default ModalOverlay
