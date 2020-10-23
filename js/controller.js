const controller = {}

controller.login = (loginInfo) => {
  view.setErrorMessage('username-error',loginInfo.username == '' ? 'Bạn hãy điền tên đăng nhập' : '')
  view.setErrorMessage('password-error',loginInfo.password == '' ? 'Bạn hãy điền mật khẩu' : '')
  if (loginInfo.username !== '' && loginInfo.password !== '') {
    model.login(loginInfo)
  }
}

controller.addEquipment = (equipmentInfo)  => {
  view.setErrorMessage('equipment-name-error', equipmentInfo.equipmentName == '' ? 'Bạn hãy điền tên thiết bị' : '')
  view.setErrorMessage('equipment-image-error', equipmentInfo.equipmentImage == '' ? 'Bạn hãy điền đường dẫn ảnh của thiết bị' : '')
  if (equipmentInfo.equipmentName !== '' && equipmentInfo.equipmentImage !== '') {
    model.addEquipment(equipmentInfo)
  }
}