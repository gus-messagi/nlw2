import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import headerIcon from '../../assets/images/icons/heart.png';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

function Landing() {

    const { navigate } = useNavigation();

    const [totalConnetions, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            setTotalConnections(response.data.total);
        });
    }, [])

    function handleNavigationToGiveClassesPage() {
        navigate('Give Classes');
    }

    function handleNavigationStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner}/>
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer ?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigationStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress={handleNavigationToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnetions} conexões já realizadas {' '}
                <Image source={headerIcon} />
            </Text>
        </View>
    );
}

export default Landing;
