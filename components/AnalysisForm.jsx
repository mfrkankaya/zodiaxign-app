import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native'
import MaskInput from 'react-native-mask-input'
import { primary } from '../constants/colors'
import { calculateAge, validateBirthDate } from '../utils'
import FadeBox from './FadeBox'

const showValidationError = (error) => {
  Alert.alert('Form Hatası', error, [{ text: 'Tamam', style: 'cancel' }], {
    cancelable: true
  })
}

const CheckButton = ({ onPress, isActive, text }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.checkButton, isActive && styles.activeCheckButton]}
    >
      <Text
        style={[
          styles.checkButtonText,
          isActive && styles.activeCheckButtonTexT
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const INITIAL_STATE = { firstName: '', lastName: '', gender: '', birthDate: '' }

const AnalysisForm = () => {
  const lastNameRef = useRef(null)
  const [user, setUser] = useState({ ...INITIAL_STATE })
  const { navigate } = useNavigation()
  const { firstName, lastName, gender, birthDate } = user

  const handleFieldChange = (name) => (value) =>
    setUser((user) => ({ ...user, [name]: value }))

  const checkFormValidation = () => {
    if (!firstName) {
      showValidationError('Adınızı girmeyi unuttunuz.')
      return false
    }

    if (!lastName) {
      showValidationError('Soyadınızı girmeyi unuttunuz.')
      return false
    }

    if (!gender) {
      showValidationError('Cinsiyetinizi belirtmeyi unuttunuz.')
      return false
    }

    if (!birthDate) {
      showValidationError('Doğum tarihinizi girmeyi unuttunuz.')
      return false
    }

    if (birthDate.length < 14) {
      showValidationError('Doğum tarihiniz eksik görünüyor.')
      return false
    }

    const birthDateError = validateBirthDate(birthDate)

    if (birthDateError) {
      showValidationError(birthDateError)
      return false
    }

    return true
  }

  const handleSubmit = () => {
    if (!checkFormValidation()) return
    setUser({ ...INITIAL_STATE })
    navigate('AnalysisResultScreen', {
      firstName,
      lastName,
      gender,
      age: calculateAge(birthDate)
    })
  }

  return (
    <View style={{ flex: 1, paddingBottom: 48, paddingTop: 24 }}>
      <FadeBox>
        <TextInput
          style={styles.input}
          placeholderTextColor="#898989"
          placeholder="Ad"
          value={firstName}
          onChangeText={handleFieldChange('firstName')}
          returnKeyType="next"
          onSubmitEditing={() => lastNameRef.current.focus()}
          autoFocus
        />
      </FadeBox>

      <View style={{ marginTop: 12 }} />

      <FadeBox delay={100}>
        <TextInput
          ref={lastNameRef}
          style={styles.input}
          placeholderTextColor="#898989"
          placeholder="Soyad"
          value={lastName}
          onChangeText={handleFieldChange('lastName')}
        />
      </FadeBox>

      <View style={{ marginTop: 12 }} />

      <FadeBox delay={200}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <CheckButton
            text="Kadın"
            onPress={() => handleFieldChange('gender')('female')}
            isActive={gender === 'female'}
          />

          <CheckButton
            text="Erkek"
            onPress={() => handleFieldChange('gender')('male')}
            isActive={gender === 'male'}
          />
        </View>
      </FadeBox>

      <View style={{ marginTop: 12 }} />

      <FadeBox delay={300}>
        <MaskInput
          style={styles.input}
          placeholderTextColor="#898989"
          placeholder="Doğum Tarihi"
          value={birthDate}
          onChangeText={handleFieldChange('birthDate')}
          mask={[
            /\d/,
            /\d/,
            ' ',
            '/',
            ' ',
            /\d/,
            /\d/,
            ' ',
            '/',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/
          ]}
          keyboardType="numeric"
        />
      </FadeBox>

      <View style={{ marginTop: 12 }} />

      <FadeBox delay={800}>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Analizi Başlat</Text>
        </TouchableOpacity>
      </FadeBox>
    </View>
  )
}

export default AnalysisForm

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    paddingHorizontal: 16,
    fontFamily: 'sans-medium',
    color: '#343434'
  },
  checkButton: {
    width: '48%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkButtonText: {
    fontFamily: 'sans-medium',
    color: '#343434'
  },
  activeCheckButton: {
    borderColor: primary(),
    backgroundColor: primary()
  },
  activeCheckButtonTexT: {
    color: '#fff'
  },
  submitButton: {
    backgroundColor: primary(),
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'sans-medium'
  }
})
