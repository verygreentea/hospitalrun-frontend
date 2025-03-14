export default {
  patient: {
    code: 'Código del paciente',
    firstName: 'Nombre',
    lastName: 'Apellido',
    suffix: 'Sufijo',
    prefix: 'Prefijo',
    givenName: 'Nombre personal',
    familyName: 'Nombre familiar',
    dateOfBirth: 'Fecha de nacimiento',
    approximateDateOfBirth: 'Fecha aproximada de nacimiento',
    age: 'Edad',
    approximateAge: 'Edad aproximada',
    placeOfBirth: 'Lugar de nacimiento',
    sex: 'Sexo',
    phoneNumber: 'Número de teléfono',
    email: 'Correo electrónico',
    address: 'Dirección',
    occupation: 'Occupación',
    type: 'Tipo de paciente',
    preferredLanguage: 'Idioma preferido',
    basicInformation: 'Datos básicos',
    generalInformation: 'Datos generales',
    contactInformation: 'Datos de contacto',
    unknownDateOfBirth: 'Desconocida',
    relatedPerson: 'Persona relacionadas',
    relatedPersons: {
      error: {
        unableToAddRelatedPerson: 'No se ha podido añadir una persona relacionada',
        relatedPersonRequired: 'Se necesita una persona relacionada',
        relationshipTypeRequired: 'Se necesita incluir la relación',
      },
      label: 'Personas relacionadas',
      new: 'Nueva persona relacionada',
      add: 'Añadir persona relacionada',
      relationshipType: 'Relación',
      warning: {
        noRelatedPersons: 'No hay personas relacionadas',
      },
      addRelatedPersonAbove: 'Añade una persona usando el botón arriba. ',
    },
    appointments: {
      new: 'Programar cita',
    },
    allergies: {
      label: 'Alergías',
      allergyName: 'Sustancia',
      new: 'Añadir alergía',
      error: {
        nameRequired: 'Se precisa especificar una sustancia',
        unableToAdd: 'No se ha podido añadir una alergía',
      },
      warning: {
        noAllergies: 'No hay alergías',
      },
      addAllergyAbove: 'Añade una alergía usando el botó arriba.',
      successfullyAdded: 'La alergía ha sido añadido existosamente',
    },
    diagnoses: {
      label: 'Diagnosis',
      new: 'Añadir diagnosis',
      diagnosisName: 'Diagnosis',
      diagnosisDate: 'Fecha de diagnosis',
      warning: {
        noDiagnoses: 'No hay diagnosis',
      },
      error: {
        nameRequired: 'Se necesita especificar una diagnosis',
        dateRequired: 'Se necesita especificar la fecha de diagnosis',
        unableToAdd: 'No se ha podido añadir la diagnosis',
      },
      addDiagnosisAbove: 'Añade una diagnosis usando el botón arriba.',
      successfullyAdded: 'Se ha añadido la diagnosis existosamente',
    },
    note: 'Nota',
    notes: {
      label: 'Notas',
      new: 'Añadir nota',
      warning: {
        noNotes: 'No hay notas',
      },
      error: {
        noteRequired: 'Se necesita añadir una nota',
        unableToAdd: 'No se ha podido añadir una nota',
      },
      addNoteAbove: 'Añade una nota usando el botón arriba.',
    },
    labs: {
      label: 'Pruebas de laboratorio',
      new: 'Añadir nueva prueba',
      warning: {
        noLabs: 'No hay prueba de laboratorio',
      },
      noLabsMessage: 'No se ha solicitado ningún prueba para este paciente',
    },
    types: {
      charity: 'Caridad',
      private: 'Privado',
    },
    errors: {
      createPatientError: 'No se ha podido crear el paciente',
      updatePatientError: 'No se ha podido actualizar el paciente',
      patientGivenNameFeedback: 'Es necesario añadir el nombre personal',
      patientDateOfBirthFeedback: 'La fecha de nacimiento no puede ser en el futuro',
      patientNumInSuffixFeedback: 'El sufijo no puede ser númerico',
      patientNumInPrefixFeedback: 'El prefijo no puede ser númerico.',
      patientNumInFamilyNameFeedback: 'El nombre familiar no puede ser númerico',
      patientNumInPreferredLanguageFeedback: 'El idioma preferido no puede ser númerico',
      invalidEmail: 'La dirección de correo electrónico es inválida',
      invalidPhoneNumber: 'El número de teléfona es inválido',
    },
  },
}
