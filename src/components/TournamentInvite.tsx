import { View, Text, Modal, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { crossCircle, trophyGreen } from '../assets/images'
import { SCREENDIMENSIONS } from '../constants/constants'
import CustomPressable from './CustomPressable'

const { SCREEN_HEIGHT, SCREEN_WIDTH } = SCREENDIMENSIONS
type Props = {
    visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>, onAccept: Function, onReject: Function
}

const TournamentInvite: React.FC<Props> = ({ visible, setVisible, onAccept, onReject }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: colors.Surface_light, alignItems: 'center', width: SCREEN_WIDTH * 0.65, height: SCREEN_HEIGHT * 0.28, borderRadius: SCREEN_WIDTH * 0.02, paddingVertical: SCREEN_HEIGHT * 0.01, paddingHorizontal: SCREEN_WIDTH * 0.01, justifyContent: 'space-evenly' }}>
                    <Pressable style={{ alignSelf: 'flex-end', marginHorizontal: SCREEN_WIDTH * .03 }} onPress={() => setVisible(false)}>
                        <Image source={crossCircle} />
                    </Pressable>
                    <Image source={trophyGreen} />
                    <Text style={{ textAlign: 'center', fontSize: 16, color: colors.Text, opacity: 0.8, fontWeight: '500', maxWidth: SCREEN_WIDTH * .4, marginVertical: SCREEN_HEIGHT * .01 }}>
                        Tournament Invitation
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 14, color: colors.Text, opacity: 0.8, fontWeight: '400', maxWidth: SCREEN_WIDTH * .5 }}>
                        [Username] has invited you to join the [tournament name]
                    </Text>
                    <View style={{ flexDirection: 'row', width: SCREEN_WIDTH * 0.45, justifyContent: 'space-evenly', marginTop: SCREEN_HEIGHT * .01 }}>
                        <CustomPressable buttonStyles={{ width: SCREEN_WIDTH * 0.25, height: SCREEN_HEIGHT * 0.04 }} textStyles={{ fontSize: 16 }} title="Accept" onPress={onAccept} />
                        <CustomPressable buttonStyles={{ width: SCREEN_WIDTH * 0.25, height: SCREEN_HEIGHT * 0.04, backgroundColor: 'transparent' }} textStyles={{ color: 'red' }} title="Reject" onPress={onReject} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};


export default TournamentInvite