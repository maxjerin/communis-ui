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
  return {
    id: worker.id,
    personalDetails: {
      firstName: worker.firstName,
      middleName: worker.middleName,
      lastName: worker.lastName,
      dateOfBirth: worker.dateOfBirth,
      gender: worker.gender,
      cellPhone: worker.contacts
        ? _.isEmpty(_.filter(worker.contacts, ['type', 'CELL_PHONE']))
          ? null
          : _.filter(worker.contacts, ['type', 'CELL_PHONE'])[0].value
        : null,
      homePhone: worker.contacts
        ? _.isEmpty(_.filter(worker.contacts, ['type', 'HOME_PHONE']))
          ? null
          : _.filter(worker.contacts, ['type', 'HOME_PHONE'])[0].value
        : null,
      workPhone: worker.contacts
        ? _.isEmpty(_.filter(worker.contacts, ['type', 'WORK_PHONE']))
          ? null
          : _.filter(worker.contacts, ['type', 'WORK_PHONE'])[0].value
        : null,
      email: worker.contacts
        ? _.isEmpty(_.filter(worker.contacts, ['type', 'EMAIL']))
          ? null
          : _.filter(worker.contacts, ['type', 'EMAIL'])[0].value
        : null,
      secondaryEmail: worker.contacts
        ? _.isEmpty(_.filter(worker.contacts, ['type', 'SECONDARY_EMAIL']))
          ? null
          : _.filter(worker.contacts, ['type', 'SECONDARY_EMAIL'])[0].value
        : null,
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
