describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // Зашла на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');             // Ввожу валидный логин
         cy.get('#password').type('USER_PASSWORD');                             // Ввожу валидный пароль
         cy.get('.auth__button').click();                                       // Нахожу и нажимаю кнопку Подтвердить
         cy.get('.header__btns > :nth-child(4)').click();                       // Нахожу и нажимаю кнопку Магазин
         cy.get('.available > button').first().click();                         // Нахожу и кликаю по кнопке Купить у первого доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 4444 4442');   // Ввожу валидный номер карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                    // Ввожу валидный CVV карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');                                     // Ввожу валидный срок действия карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');                           // Ввожу имя владельца действия карты
         cy.get('.pay-btn').click();                                             // Нахожу и нажимаю кнопку Оплатить
         cy.get('#cardnumber').type('56456');                                    // Ввожу код подтверждения СМС
         cy.get('.payment__submit-button').click();                              // Нахожу и нажимаю кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');             // Проверяю наличие и видимость сообщения о успешной покупке
     });
 });