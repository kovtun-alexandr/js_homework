// При старті питаємо у користувача чи хоче він читати новини. Якщо так, 
// то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо 
// на сайт ukr.net. Для цього через 20 секунд після відкриття треба виконати команду

if (confirm('Почати тестування?')) {
    const userResponse: boolean = confirm('Бажаєте читати новини?')

    /**
     * If the client refused to go to the news portal, we call the function and he gets to the news portal after 20 seconds.
     */
    const startTimeout = setTimeout(() => {
        window.location.href = 'https://www.ukr.net/'
    }, 20000)

    if (userResponse)
        window.location.href = 'https://www.ukr.net/'
    else
        startTimeout
} else {
    alert(`Нажаль ви відмовились від теста 😞`)
}