describe('Тест-кейс: Проверяем шаблон формы обратной связи для сайта', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');// + зайти на сайт
        cy.wait(2000); //ставим безусловное ожидание
        cy.get(':nth-child(5) > .uiButton').click(); //кликаем по кнопке "Использовать шаблон"
        cy.wait(2000); //ставим безусловное ожидание
        //cy.visit('https://www.testograf.ru/auth/login').click
        cy.get(':nth-child(2) > .wrapper___FYa4kZq > .input___FYa4kZq').type('vovan-gr@mail.ru');// + Найти поле логин и ввести правильный логин
        cy.get(':nth-child(3) > .wrapper___FYa4kZq > .input___FYa4kZq').type('D1l99N198420201946$$$&&&');// + Найти поле пароль и ввести правильный пароль
        cy.get('.button___DLyoik1').click();// + Найти кнопку войти и нажать на неё
        cy.get('.content___zBPVuHJ').contains('be.visible');// + Проверить проверить наличие вспл. окна "Авторизация прошла успешно" 
        cy.get('.title___DLyoik1').should('be.visible');// + Проверить наличие текст "Авторизация прошла успешно" 
        cy.get('.btnWrap___DLyoik1').should('be.visible');// + Проверить наличие кнопки "отправить ссылку еще раз"
     })
})
 