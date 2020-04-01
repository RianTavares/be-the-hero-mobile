import React from 'react'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import logoImg from '../../assets/logo.png'
import styles from './styles'
import { Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

export default function Detail() {
    const navigation = useNavigation()
    const message = 'Testando envio de email de caso de Cadelinha atropelada'

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['diego@rocket.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5521000000000&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} > 
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack} >
                    <Feather name="arrow-left" size={28} color='#e02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
            
                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}