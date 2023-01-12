export let address: any = {
  country: 'korea',
  city: 'seoul',
  address1: '11',
  address2: '22',
  address3: '33',
};

const { country, city, ...detail } = address;
console.log(detail);
