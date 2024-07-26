describe('Проверка авторизации', function () {

    it('Валидный логин и валидный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Нашла поле E-mail и ввела валидный логин
        
         cy.get('#pass').type('iLoveqastudio1'); // Нашла поле Пароль и ввела валидный пароль
         cy.get('#loginButton').click(); // Нашла кнопку Войти и нажала на нее

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль?"
     
        })

    it('Проверка логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // Зашла на сайт
        
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)') // Нашли кнопку и проверили ее цвет
         cy.get('#forgotEmailButton').click(); // Нашли кнопку и нажали на нее

         cy.get('#mailForgot').type('german@dolnikov.ru'); // Нашла поле E-mail и ввела валидный логин 
         cy.get('#restoreEmailButton').click(); // Нашли кнопку и нажали на нее

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
     
        })

    it('Валидный логин и невалидный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // Нашла поле E-mail и ввела валидный логин
   
            cy.get('#pass').type('iLoveqastudio11'); // Нашла поле Пароль и ввела невалидный пароль
            cy.get('#loginButton').click(); // Нашла кнопку Войти и нажала на нее
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль?"
        })
 
    it('Невалидный логи и валидный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#mail').type('german@dolnkov.ru'); // Нашла поле E-mail и ввела невалидный логин
   
            cy.get('#pass').type('iLoveqastudio1'); // Нашла поле Пароль и ввела валидный пароль
            cy.get('#loginButton').click(); // Нашла кнопку Войти и нажала на нее
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль?"
        })
        
    it('Валидный логи без @ и валидный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#mail').type('germandolnikov.ru'); // Нашла поле E-mail и ввела валидный логин, но без @
   
            cy.get('#pass').type('iLoveqastudio1'); // Нашла поле Пароль и ввела валидный пароль
            cy.get('#loginButton').click(); // Нашла кнопку Войти и нажала на нее
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль?"
        })

    it('Проверка разного регистра в логине', function () {
            cy.visit('https://login.qa.studio/'); // Зашла на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Нашла поле E-mail и ввела валидный логин, но в разном регистре
   
            cy.get('#pass').type('iLoveqastudio1'); // Нашла поле Пароль и ввела валидный пароль
            cy.get('#loginButton').click(); // Нашла кнопку Войти и нажала на нее
   
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки "Забыли пароль?"
        
        })
 
})




  // Напиши проверку на приведение к строчным буквам в логине:
  // а) Ввести логин GerMan@Dolnikov.ru
  // б) Ввести правильный пароль
  // в) Нажать войти
  // г) Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)
  // Разработчик допустил баг и это не реализовал. Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)