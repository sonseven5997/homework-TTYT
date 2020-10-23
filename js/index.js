window.onload = () => {
  if (sessionStorage.getItem('isLoggedIn') == 'true') {
    view.setActiveScreen('mainScreen')
  } else {
    view.setActiveScreen('loginScreen')
  }
  //view.setActiveScreen('loginScreen')
}