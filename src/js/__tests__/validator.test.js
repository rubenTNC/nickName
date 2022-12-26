import Validator from '../Validator';

test('тест на валидное значение имени', () => {
  expect(Validator.validateUsername('snezhka003pr')).toEqual('Ваше имя соответствует правилам!');
});

test('тест на невалидные символы в имени', () => {
  expect(() => Validator.validateUsername('f555sfvприт)')).toThrow(new Error('Имя должно содержать только латинские буквы, тире, подчеркивание и цифры'));
});

test('тест на выдачу ошибки, если в имени более трех цифр подряд', () => {
  expect(() => Validator.validateUsername('f55523sfv')).toThrow(new Error('Имя не должно содержать более трёх цифр подряд'));
});

test('тест на невалидное значение в начале имени', () => {
  expect(() => Validator.validateUsername('_f555sfv')).toThrow(new Error('Имя не должно начинаться с цифр, тире или подчеркивания'));
});

test('тест на невалидное значение в конце имени', () => {
  expect(() => Validator.validateUsername('f555sfv-')).toThrow(new Error('Имя не должно заканчиваться цифрами, тире или подчеркиванием'));
});
