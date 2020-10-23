import _ from 'lodash';

export const serializeWorker = worker => {
  return {
    firstName: worker.personalDetails.firstName,
    middleName: worker.personalDetails.middleName,
    lastName: worker.personalDetails.lastName,
    dateOfBirth: worker.personalDetails.dateOfBirth,
    gender: worker.personalDetails.gender,
    address: [
      {
        street: worker.address.addressLine1,
        street2: worker.address.addressLine2,
        city: worker.address.city,
        state: worker.address.state,
        zipcode: worker.address.areaCode,
        country: worker.address.country,
      },
    ],
    contacts: [
      {
        type: 'CELL_PHONE',
        value: worker.personalDetails.cellPhone,
        primary: worker.personalDetails.primaryContactType === 'CELL_PHONE',
      },
      {
        type: 'HOME_PHONE',
        value: worker.personalDetails.homePhone,
        primary: worker.personalDetails.primaryContactType === 'HOME_PHONE',
      },
      {
        type: 'WORK_PHONE',
        value: worker.personalDetails.workPhone,
        primary: worker.personalDetails.primaryContactType === 'WORK_PHONE',
      },
      {
        type: 'EMAIL',
        value: worker.personalDetails.email,
        primary: worker.personalDetails.primaryContactType === 'EMAIL',
      },
      {
        type: 'SECONDARY_EMAIL',
        value: worker.personalDetails.secondaryEmail,
        primary:
          worker.personalDetails.primaryContactType === 'SECONDARY_EMAIL',
      },
    ],
    family: {
      familyName: worker.family.familyName,
      relationshipType: worker.family.relationshipType,
    },
    testimony: worker.testimony,
  };
};

export const deserializeWorker = worker => {
  let retrieveContact = (contacts, contactType) => {
    let typeAndContactType = ['type', contactType];
    return contacts
      ? _.isEmpty(_.filter(contacts, typeAndContactType))
        ? null
        : _.filter(contacts, typeAndContactType)[0].value
      : null;
  };
  return {
    id: worker.id,
    personalDetails: {
      firstName: worker.firstName,
      middleName: worker.middleName,
      lastName: worker.lastName,
      dateOfBirth: worker.dateOfBirth,
      gender: worker.gender,
      cellPhone: retrieveContact(worker.contacts, 'CELL_PHONE'),
      homePhone: retrieveContact(worker.contacts, 'HOME_PHONE'),
      workPhone: retrieveContact(worker.contacts, 'WORK_PHONE'),
      email: retrieveContact(worker.contacts, 'EMAIL'),
      secondaryEmail: retrieveContact(worker.contacts, 'SECONDARY_EMAIL'),
      primaryContactType: worker.contacts
        ? _.filter(worker.contacts, ['primary', true])[0].type
        : null,
    },
    address: {
      addressLine1: worker.address[0].street,
      addressLine2: worker.address[0].street2,
      city: worker.address[0].city,
      state: worker.address[0].state,
      areaCode: worker.address[0].zipcode,
      country: worker.address[0].country,
    },
    family: {
      familyName: null,
      relationshipType: null,
    },
    testimony: worker.testimony,
  };
};
