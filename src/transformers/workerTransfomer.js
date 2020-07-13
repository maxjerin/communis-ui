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
    testimony: worker.testimony,
  };
};
