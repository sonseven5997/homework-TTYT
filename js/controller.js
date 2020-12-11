const controller = {};

controller.login = async (loginInfo) => {
  view.setErrorMessage(
    "username-error",
    loginInfo.username == "" ? "Bạn hãy điền tên đăng nhập" : ""
  );
  view.setErrorMessage(
    "password-error",
    loginInfo.password == "" ? "Bạn hãy điền mật khẩu" : ""
  );
  if (loginInfo.username !== "" && loginInfo.password !== "") {
    await model.login(loginInfo);
  }
};

controller.addEquipment = async (equipmentInfo) => {
  view.setErrorMessage(
    "equipment-name-error",
    equipmentInfo.equipmentName == "" ? "Bạn hãy nhập tên thiết bị" : ""
  );
  view.setErrorMessage(
    "equipment-serial-number-error",
    equipmentInfo.equipmentSerialNumber == ""
      ? "Bạn hãy nhập mã số thiết bị"
      : ""
  );
  view.setErrorMessage(
    "equipment-model-error",
    equipmentInfo.equipmentModel == "" ? "Bạn hãy nhập mẫu thiết bị" : ""
  );
  view.setErrorMessage(
    "equipment-origin-error",
    equipmentInfo.equipmentOrigin == "" ? "Bạn hãy nhập xuất xứ thiết bị" : ""
  );
  view.setErrorMessage(
    "equipment-manufacturer-error",
    equipmentInfo.equipmentManufacturer == "" ? "Bạn hãy nhập nhà sản xuất" : ""
  );
  view.setErrorMessage(
    "equipment-manufacture-year-error",
    equipmentInfo.equipmentManufactureYear == ""
      ? "Bạn hãy điền năm sản xuất"
      : ""
  );
  view.setErrorMessage(
    "equipment-faculty-use-error",
    equipmentInfo.equipmentFacultyUse == "" ? "Bạn hãy nhập khoa sử dụng" : ""
  );
  if (
    equipmentInfo.equipmentName !== "" &&
    equipmentInfo.equipmentSerialNumber !== "" &&
    equipmentInfo.equipmentModel !== "" &&
    equipmentInfo.equipmentOrigin !== "" &&
    equipmentInfo.equipmentManufacturer !== "" &&
    equipmentInfo.equipmentManufactureYear !== "" &&
    equipmentInfo.equipmentFacultyUse !== ""
  ) {
    await model.addEquipment(equipmentInfo);
  }
};

controller.addUser = async (userInfo) => {
  view.setErrorMessage(
    "user-login-id-error-1",
    userInfo.userLoginId == "" ? "Bạn hãy điền tên đăng nhập" : ""
  );
  view.setErrorMessage(
    "user-login-id-error-2",
    model.dataUser.find(
      (element) => element.userLoginId == userInfo.userLoginId
    ) !== undefined
      ? "Tên đăng nhập đã tồn tại"
      : ""
  );
  view.setErrorMessage(
    "user-password-error",
    userInfo.userPassword == "" ? "Bạn hãy điền mật khẩu" : ""
  );
  view.setErrorMessage(
    "user-name-error",
    userInfo.userName == "" ? "Bạn hãy điền tên nhân viên" : ""
  );
  if (
    userInfo.userLoginId !== "" &&
    model.dataUser.find(
      (element) => element.userLoginId == userInfo.userLoginId
    ) == undefined &&
    userInfo.userPassword !== "" &&
    userInfo.userName !== ""
  ) {
    await model.addUser(userInfo);
  }
};

controller.editEquipment = async (equipmentInfo) => {
  view.setErrorMessage(
    "equipment-name-error",
    equipmentInfo.equipmentName == "" ? "Bạn hãy nhập tên thiết bị" : ""
  );
  view.setErrorMessage(
    "equipment-serial-number-error",
    equipmentInfo.equipmentSerialNumber == ""
      ? "Bạn hãy nhập mã số thiết bị"
      : ""
  );
  view.setErrorMessage(
    "equipment-model-error",
    equipmentInfo.equipmentModel == "" ? "Bạn hãy nhập mẫu thiết bị" : ""
  );
  view.setErrorMessage(
    "equipment-origin-error",
    equipmentInfo.equipmentOrigin == "" ? "Bạn hãy nhập xuất xứ thiết bị" : ""
  );
  view.setErrorMessage(
    "equipment-manufacturer-error",
    equipmentInfo.equipmentManufacturer == "" ? "Bạn hãy nhập nhà sản xuất" : ""
  );
  view.setErrorMessage(
    "equipment-manufacture-year-error",
    equipmentInfo.equipmentManufactureYear == ""
      ? "Bạn hãy điền năm sản xuất"
      : ""
  );
  view.setErrorMessage(
    "equipment-faculty-use-error",
    equipmentInfo.equipmentFacultyUse == "" ? "Bạn hãy nhập khoa sử dụng" : ""
  );
  if (
    equipmentInfo.equipmentName !== "" &&
    equipmentInfo.equipmentSerialNumber !== "" &&
    equipmentInfo.equipmentModel !== "" &&
    equipmentInfo.equipmentOrigin !== "" &&
    equipmentInfo.equipmentManufacturer !== "" &&
    equipmentInfo.equipmentManufactureYear !== "" &&
    equipmentInfo.equipmentFacultyUse !== ""
  ) {
    await model.editEquipment(equipmentInfo);
  }
};

controller.createMaintain = async (maintainInfo) => {
  view.setErrorMessage(
    "equipment-id-error",
    model.dataEquipment.find(
      (element) => element.id == maintainInfo.deviceId
    ) == undefined
      ? "Bạn đã nhập sai ID thiết bị"
      : ""
  );
  view.setErrorMessage(
    "equipment-maintain-time",
    maintainInfo.time == "" ? "Bạn hãy nhập thời gian bảo dưỡng" : ""
  );
  if (
    model.dataEquipment.find(
      (element) => element.id == maintainInfo.deviceId
    ) !== undefined &&
    maintainInfo.time !== ""
  ) {
    await model.createMaintain(maintainInfo);
  }
};
