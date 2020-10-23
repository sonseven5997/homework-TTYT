const model = {}

model.login = (loginInfo) => {
  if (loginInfo.username == 'admin' && loginInfo.password == 'admin'){
    //alert('Đăng nhập thành công!')
    sessionStorage.setItem('isLoggedIn',true)
    view.setActiveScreen('mainScreen')
  } else {
    alert('Tên đăng nhập hoặc mật khẩu không đúng!')
  }
}

model.addEquipment = async (equipmentInfo) => {
  const dataToCreate = {
    equipmentName: equipmentInfo.equipmentName,
    date: new Date(),
    image: equipmentInfo.equipmentImage,
    isActive: equipmentInfo.equipmentStatus
  }
  await ultis.postData('https://5f91384ae0559c0016ad7349.mockapi.io/equipment/',dataToCreate)
  console.log('Equipment added!')
  location.reload()
}