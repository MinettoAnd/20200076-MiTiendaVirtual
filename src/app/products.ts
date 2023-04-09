export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro Max',
    price: 799,
    description: 'Un teléfono premium y con una mayor pantalla.'
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    price: 699,
    description: 'Una versión más premium y tres cámaras.'
  },
  {
    id: 3,
    name: 'iPhone 13 ',
    price: 699,
    description: 'Un buen teléfono con dos cámaras.'
  },
  {
    id: 4,
    name: 'iPhone 13 Mini',
    price: 699,
    description: 'Un teléfono con medidas más pequeñas.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/