import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
import MaskInput from 'react-native-mask-input'
import { primary } from '../constants/colors'
import { calculateAge, validateBirthDate } from '../utils'
import FadeBox from './FadeBox'

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

const AnalysisForm = () => {
  const lastNameRef = useRef(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const { navigate } = useNavigation()

  const checkFormValidation = () => {
    if (!firstName) {
      alert('Lütfen adınızı girin.')
      return false
    }

    if (!lastName) {
      alert('Lütfen soyadınızı girin.')
      return false
    }

    if (!gender) {
      alert('Lütfen cinsiyetinizi seçin.')
      return false
    }

    if (!birthDate) {
      alert('Lütfen doğum tarihinizi girin.')
      return false
    }

    if (birthDate.length < 14) {
      alert('Lütfen doğum tarihinizi girdiğinizden emin olun.')
      return false
    }

    const birthDateError = validateBirthDate(birthDate)

    if (birthDateError) {
      alert(birthDateError)
      return false
    }

    return true
  }

  const handleSubmit = () => {
    if (!checkFormValidation()) return
    navigate('AnalysisResultScreen', {
      firstName,
      lastName,
      gender,
      age: calculateAge(birthDate)
    })
  }

  return (
    <View style={{ flex: 1, paddingBottom: 48 }}>
      <FadeBox>
        <TextInput
          style={styles.input}
          placeholderTextColor="#898989"
          placeholder="Ad"
          value={firstName}
          onChangeText={setFirstName}
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
          onChangeText={setLastName}
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
            onPress={() => setGender('female')}
            isActive={gender === 'female'}
          />

          <CheckButton
            text="Erkek"
            onPress={() => setGender('male')}
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
          onChangeText={setBirthDate}
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
