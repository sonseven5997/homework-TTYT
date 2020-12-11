const model = {};
model.dataUser = undefined;
model.dataEquipment = undefined;
model.currentUser = undefined;
model.currentRole = undefined;
model.dataMaintain = undefined;
model.login = async (loginInfo) => {
  const dataToLogin = {
    userLoginId: loginInfo.username,
    userPassword: loginInfo.password,
  };
  const response = await ultis.postData(
    "https://floating-eyrie-61483.herokuapp.com/api/users/login",
    dataToLogin
  );
  console.log(response);
  if (response.userLoginId !== null) {
    //alert('Đăng nhập thành công!')
    sessionStorage.setItem("isLoggedIn", true);
    view.setActiveScreen("mainScreen");
    model.currentUser = response.userLoginId;
    sessionStorage.setItem("currentUser", model.currentUser);
    model.currentRole = response.userRole;
    sessionStorage.setItem("currentRole", model.currentRole);
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
};

model.addEquipment = async (equipmentInfo) => {
  const dataToCreate = {
    id: equipmentInfo.id,
    equipmentName: equipmentInfo.equipmentName,
    equipmentSerialNumber: equipmentInfo.equipmentSerialNumber,
    equipmentModel: equipmentInfo.equipmentModel,
    equipmentOrigin: equipmentInfo.equipmentOrigin,
    equipmentManufacturer: equipmentInfo.equipmentManufacturer,
    equipmentManufactureYear: equipmentInfo.equipmentManufactureYear,
    equipmentFacultyUse: equipmentInfo.equipmentFacultyUse,
    equipmentIsActive: equipmentInfo.equipmentIsActive,
    equipmentCreatedTime: new Date(),
    equipmentCreatedBy: sessionStorage.getItem("currentUser"),
    equipmentUpdatedTime: null,
    equipmentUpdatedBy: null,
  };
  await ultis.postData(
    "https://floating-eyrie-61483.herokuapp.com/api/equipments/",
    dataToCreate
  );
  console.log("Equipment added!");
  model.dataEquipment = await ultis.fetchData("equipments");
  view.rerenderEquipmentMainScreen();
};

model.addUser = async (userInfo) => {
  const dataToCreate = {
    userID: userInfo.userID,
    userLoginId: userInfo.userLoginId,
    userPassword: userInfo.userPassword,
    userName: userInfo.userName,
    userRole: userInfo.userRole,
    userCreatedTime: new Date(),
    userCreatedBy: sessionStorage.getItem("currentUser"),
    userUpdatedTime: null,
    userUpdatedBy: null,
  };
  await ultis.postData(
    "https://floating-eyrie-61483.herokuapp.com/api/users/",
    dataToCreate
  );
  console.log("User added!");
  model.dataUser.push(dataToCreate);
  view.rerenderUserMainScreen();
};

model.editEquipment = async (equipmentInfo) => {
  const dataToEdit = {
    id: equipmentInfo.id,
    equipmentName: equipmentInfo.equipmentName,
    equipmentSerialNumber: equipmentInfo.equipmentSerialNumber,
    equipmentModel: equipmentInfo.equipmentModel,
    equipmentOrigin: equipmentInfo.equipmentOrigin,
    equipmentManufacturer: equipmentInfo.equipmentManufacturer,
    equipmentManufactureYear: equipmentInfo.equipmentManufactureYear,
    equipmentFacultyUse: equipmentInfo.equipmentFacultyUse,
    equipmentIsActive: equipmentInfo.equipmentIsActive,
    equipmentCreatedTime: equipmentInfo.equipmentCreatedTime,
    equipmentCreatedBy: equipmentInfo.equipmentCreatedBy,
    equipmentUpdatedTime: new Date(),
    equipmentUpdatedBy: sessionStorage.getItem("currentUser"),
  };
  console.log(dataToEdit);
  await ultis.putData(equipmentInfo.id, "equipments", dataToEdit);
  model.dataEquipment = await ultis.fetchData("equipments");
};

model.createMaintain = async (maintainInfo) => {
  const dataToCreate = {
    deviceId: maintainInfo.deviceId,
    time: maintainInfo.time,
    created: new Date(),
    createdBy: sessionStorage.getItem("currentUser"),
    updated: null,
    updatedBy: null,
  };
  await ultis.postData(
    "https://floating-eyrie-61483.herokuapp.com/api/maintains",
    dataToCreate
  );
};
