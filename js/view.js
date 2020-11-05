const view = {};
view.currenScreen = "equipment";

view.setActiveScreen = async (screenName) => {
  switch (screenName) {
    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;
      const loginForm = document.getElementById("form-login");
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const loginInfo = {
          username: loginForm.username.value,
          password: loginForm.password.value,
        };
        await controller.login(loginInfo);
      });
      break;

    case "mainScreen":
      model.dataEquipment = await ultis.fetchData("equipments");
      model.dataUser = await ultis.fetchData("users");
      document.getElementById("app").innerHTML = components.mainScreen;
      const equipment = document.getElementById("equipment");
      const user = document.getElementById("user");
      const logOutBtn = document.querySelector(".log-out");
      const maintain = document.getElementById('maintain')
      const history = document.getElementById('history')
      logOutBtn.addEventListener("click", () => {
        sessionStorage.setItem("isLoggedIn", "false");
        sessionStorage.removeItem('currentUser')
        sessionStorage.removeItem('currentRole')
        view.setActiveScreen("loginScreen");
      });
      document.querySelector(".aside-right").innerHTML =
        components.equipmentMainScreen;
      document.getElementById("add-equipment").addEventListener("click", () => {
        document.querySelector(".aside-right").innerHTML =
          components.addEquipmentScreen;
        document
          .getElementById("go-back-btn")
          .addEventListener("click", async () => {
            await view.rerenderEquipmentMainScreen();
          });
        document
          .getElementById("add-equipment-btn")
          .addEventListener("click", async () => {
            const equipmentInfo = {
              equipmentID: model.dataEquipment.length !== 0 ? (model.dataEquipment[model.dataEquipment.length - 1].equipmentID + 1) : 1,
              equipmentName: document.getElementById("equipment-name").value,
              equipmentSerialNumber: document.getElementById(
                "equipment-serial-number"
              ).value,
              equipmentModel: document.getElementById("equipment-model").value,
              equipmentOrigin: document.getElementById("equipment-origin")
                .value,
              equipmentManufacturer: document.getElementById(
                "equipment-manufacturer"
              ).value,
              equipmentManufactureYear: document.getElementById(
                "equipment-manufacture-year"
              ).value,
              equipmentFacultyUse: document.getElementById(
                "equipment-faculty-use"
              ).value,
              equipmentIsActive: document.getElementById("status").checked,
            };
            console.log(equipmentInfo);
            await controller.addEquipment(equipmentInfo);
          });
      });
      await view.renderDataEquipment();
      equipment.addEventListener("click", async () => {
        view.currenScreen = "equipment";
        document.querySelector(".choosen").classList.remove("choosen");
        equipment.classList.add("choosen");
        document.querySelector(".aside-right").innerHTML =
          components.equipmentMainScreen;
        document
          .getElementById("add-equipment")
          .addEventListener("click", () => {
            document.querySelector(".aside-right").innerHTML =
              components.addEquipmentScreen;
            document
              .getElementById("go-back-btn")
              .addEventListener("click", async () => {
                await view.rerenderEquipmentMainScreen();
              });
            document
              .getElementById("add-equipment-btn")
              .addEventListener("click", async () => {
                const equipmentInfo = {
                  equipmentID: model.dataEquipment.length !== 0 ? (model.dataEquipment[model.dataEquipment.length - 1].equipmentID + 1) : 1,
                  equipmentName: document.getElementById("equipment-name")
                    .value,
                  equipmentSerialNumber: document.getElementById(
                    "equipment-serial-number"
                  ).value,
                  equipmentModel: document.getElementById("equipment-model")
                    .value,
                  equipmentOrigin: document.getElementById("equipment-origin")
                    .value,
                  equipmentManufacturer: document.getElementById(
                    "equipment-manufacturer"
                  ).value,
                  equipmentManufactureYear: document.getElementById(
                    "equipment-manufacture-year"
                  ).value,
                  equipmentFacultyUse: document.getElementById(
                    "equipment-faculty-use"
                  ).value,
                  equipmentIsActive: document.getElementById("status").checked,
                };
                console.log(equipmentInfo);
                await controller.addEquipment(equipmentInfo);
              });
          });
        await view.renderDataEquipment();
      });
      user.addEventListener("click", async () => {
        view.currenScreen = "user";
        document.querySelector(".choosen").classList.remove("choosen");
        user.classList.add("choosen");
        document.querySelector(".aside-right").innerHTML =
          components.userMainScreen;
        document.getElementById('add-user').disabled = sessionStorage.getItem('currentRole') == 'Quản lý' ?  false : true
        document.getElementById("add-user").addEventListener("click", () => {
          document.querySelector(".aside-right").innerHTML =
            components.addUserScreen;
          document
            .getElementById("go-back-btn")
            .addEventListener("click", async () => {
              await view.rerenderUserMainScreen();
            });
          document
            .getElementById("add-user-btn")
            .addEventListener("click", async () => {
              const userInfo = {
                userID: model.dataUser.length == 0 ? 1 : (model.dataUser[model.dataUser.length - 1].userID + 1),
                userLoginId: document.getElementById("user-login-id").value,
                userPassword: document.getElementById("user-password").value,
                userName: document.getElementById("user-name").value,
                userRole: document.getElementById("user-role").value,
              };
              console.log(userInfo);
              await controller.addUser(userInfo);
            });
        });
        view.renderDataUser();
      });
      maintain.addEventListener('click', async () => {
        view.currenScreen = 'maintain'
        document.querySelector(".choosen").classList.remove("choosen");
        maintain.classList.add("choosen");
        document.querySelector(".aside-right").innerHTML =
          components.maintainScreen;
        document.getElementById('form-create-maintain').addEventListener('submit', async (e) =>{
          e.preventDefault()
          const maintainInfo = {
            deviceId: document.getElementById('equipment-id').value,
            time: document.getElementById('equipment-maintain-time').value
          }
          await controller.createMaintain(maintainInfo)
          document.getElementById('equipment-id').value = ''
          document.getElementById('equipment-maintain-time').value = ''
        })        
      })
      history.addEventListener('click',async () => {
        view.currenScreen = 'history'
        document.querySelector(".choosen").classList.remove("choosen");
        history.classList.add("choosen");
        document.querySelector(".aside-right").innerHTML =
          components.historyScreen;
        model.dataMaintain = await ultis.fetchData('maintains')
        for(let i=0; i<model.dataMaintain.length; i++) {
          if (model.dataMaintain[i] !== undefined){
            const tableRow = document.createElement('tr')
            tableRow.innerHTML = `
            <td>${i+1}</td>
            <td>${model.dataMaintain[i].deviceId}</td>
            <td>${model.dataMaintain[i].time}</td>
            <td>${model.dataMaintain[i].created}</td>
            <td>${model.dataMaintain[i].createdBy}</td>
            <td>${model.dataMaintain[i].updated}</td>
            <td>${model.dataMaintain[i].updatedBy}</td>
            `
            document.querySelector(".data-table").appendChild(tableRow);
          }
          
        }
      })
      break;
  }
};

view.setErrorMessage = (id, message) => {
  document.getElementById(id).innerText = message;
};

view.rerenderEquipmentMainScreen = async () => {
  document.querySelector(".aside-right").innerHTML =
    components.equipmentMainScreen;
  document.getElementById("add-equipment").addEventListener("click", () => {
    document.querySelector(".aside-right").innerHTML =
      components.addEquipmentScreen;
    document.getElementById("go-back-btn").addEventListener("click", (e) => {
      e.preventDefault();
      view.rerenderEquipmentMainScreen();
    });
    document.getElementById('add-equipment-btn').addEventListener('click', async () => {
      const equipmentInfo = {
        equipmentID: model.dataEquipment.length !== 0 ? (model.dataEquipment[model.dataEquipment.length - 1].equipmentID + 1) : 1,
        equipmentName: document.getElementById("equipment-name")
          .value,
        equipmentSerialNumber: document.getElementById(
          "equipment-serial-number"
        ).value,
        equipmentModel: document.getElementById("equipment-model")
          .value,
        equipmentOrigin: document.getElementById("equipment-origin")
          .value,
        equipmentManufacturer: document.getElementById(
          "equipment-manufacturer"
        ).value,
        equipmentManufactureYear: document.getElementById(
          "equipment-manufacture-year"
        ).value,
        equipmentFacultyUse: document.getElementById(
          "equipment-faculty-use"
        ).value,
        equipmentIsActive: document.getElementById("status").checked,
      };
      console.log(equipmentInfo);
      await controller.addEquipment(equipmentInfo);
    })
  });
  await view.renderDataEquipment();
};

view.renderDataEquipment = async () => {
  for (let i = 0; i < model.dataEquipment.length; i++) {
    if (model.dataEquipment[i] !== undefined){
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `
      <td>${i + 1}</td>
      <td>${model.dataEquipment[i].equipmentName}</td>
      <td>${model.dataEquipment[i].equipmentSerialNumber}</td>
      <td>${model.dataEquipment[i].equipmentModel}</td>
      <td>${model.dataEquipment[i].equipmentOrigin}</td>
      <td>${model.dataEquipment[i].equipmentManufacturer}</td>
      <td>${model.dataEquipment[i].equipmentManufactureYear}</td>
      <td>${model.dataEquipment[i].equipmentFacultyUse}</td>
      <td>${
        model.dataEquipment[i].equipmentIsActive
          ? `<div class="active-equipment">Hoạt động</div>`
          : `<div class="inactive-equipment">Không hoạt động</div>`
      }</td>
      <td>${model.dataEquipment[i].equipmentCreatedTime}</td>
      <td>${model.dataEquipment[i].equipmentCreatedBy}</td>
      <td>${model.dataEquipment[i].equipmentUpdatedTime}</td>
      <td>${model.dataEquipment[i].equipmentUpdatedBy}</td>
      <td>
        <div class="button-wrapper">
          <button id="edit-btn" class="edit-btn-${i}">Sửa</button>
          <button id="delete-btn" class="delete-btn-${i}">Xoá</button>
        </div>
      </td>
      `;
      document.querySelector(".data-table").appendChild(tableRow);
    }
  }
  for (let i = 0; i < model.dataEquipment.length; i++) {
    if (model.dataEquipment[i] !== undefined){
      document
        .querySelector(`.delete-btn-${i}`)
        .addEventListener("click", async () => {
          await ultis.deleteData(
            model.dataEquipment[i].equipmentID,
            "equipments"
          );
          console.log("Deleted!");
          model.dataEquipment = await ultis.fetchData('equipments')
          await view.rerenderEquipmentMainScreen();
        });
      document.querySelector(`.edit-btn-${i}`).addEventListener("click", () => {
        document.querySelector(".aside-right").innerHTML =
          components.editEquipmentScreen;
        document.getElementById("equipment-name").value =
          model.dataEquipment[i].equipmentName;
        document.getElementById("equipment-serial-number").value =
          model.dataEquipment[i].equipmentSerialNumber;
        document.getElementById("equipment-model").value =
          model.dataEquipment[i].equipmentModel;
        document.getElementById("equipment-origin").value =
          model.dataEquipment[i].equipmentOrigin;
        document.getElementById("equipment-manufacturer").value =
          model.dataEquipment[i].equipmentManufacturer;
        document.getElementById("equipment-manufacture-year").value =
          model.dataEquipment[i].equipmentManufactureYear;
        document.getElementById("equipment-faculty-use").value =
          model.dataEquipment[i].equipmentFacultyUse;
        document.getElementById("status").checked =
          model.dataEquipment[i].isActive;
        document
          .getElementById("go-back-btn")
          .addEventListener("click", async () => {
            await view.rerenderEquipmentMainScreen();
          });
        document
          .getElementById("edit-equipment-btn")
          .addEventListener("click", async () => {
            const equipmentInfo = {
              equipmentID: model.dataEquipment[i].equipmentID,
              equipmentName: document.getElementById("equipment-name").value,
              equipmentSerialNumber: document.getElementById(
                "equipment-serial-number"
              ).value,
              equipmentModel: document.getElementById("equipment-model").value,
              equipmentOrigin: document.getElementById("equipment-origin").value,
              equipmentManufacturer: document.getElementById(
                "equipment-manufacturer"
              ).value,
              equipmentManufactureYear: document.getElementById(
                "equipment-manufacture-year"
              ).value,
              equipmentFacultyUse: document.getElementById(
                "equipment-faculty-use"
              ).value,
              equipmentIsActive: document.getElementById("status").checked,
              equipmentCreatedTime: model.dataEquipment[i].equipmentCreatedTime,
              equipmentCreatedBy: model.dataEquipment[i].equipmentCreatedBy
            };
            await controller.editEquipment(equipmentInfo);
            await view.rerenderEquipmentMainScreen();
          });
      });
    }
  }
};

view.rerenderUserMainScreen = async () => {
  document.querySelector(".aside-right").innerHTML = components.userMainScreen;
  document.getElementById('add-user').disabled = sessionStorage.getItem('currentRole') == 'Quản lý' ?  false : true
  document.getElementById("add-user").addEventListener("click", () => {
    document.querySelector(".aside-right").innerHTML = components.addUserScreen;
    document.getElementById("go-back-btn").addEventListener("click", (e) => {
      e.preventDefault();
      view.rerenderUserMainScreen();
    });
    document
    .getElementById("add-user-btn")
    .addEventListener("click", async () => {
      const userInfo = {
        userID: model.dataUser.length == 0 ? 1 : (model.dataUser[model.dataUser.length - 1].userID + 1),
        userLoginId: document.getElementById("user-login-id").value,
        userPassword: document.getElementById("user-password").value,
        userName: document.getElementById("user-name").value,
        userRole: document.getElementById("user-role").value,
      };
      console.log(userInfo);
      await controller.addUser(userInfo);
    });
  });
  await view.renderDataUser();
};

view.renderDataUser = async () => {
  for (let i = 0; i < model.dataUser.length; i++) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${i + 1}</td>
    <td>${model.dataUser[i].userName}</td>
    <td>${model.dataUser[i].userLoginId}</td>
    <td>${model.dataUser[i].userPassword}</td>
    <td>${model.dataUser[i].userRole}</td>
    <td>${model.dataUser[i].userCreatedTime}</td>
    <td>${model.dataUser[i].userCreatedBy}</td>
    <td>${model.dataUser[i].userUpdatedTime}</td>
    <td>${model.dataUser[i].userUpdatedBy}</td>
    <td>
      <div class="button-wrapper">
        <button id="edit-btn" class="edit-btn-${i}" ${sessionStorage.getItem('currentRole') == 'Quản lý' ? '' : 'disabled'}>Sửa</button>
        <button id="delete-btn" class="delete-btn-${i}" ${sessionStorage.getItem('currentRole') == 'Quản lý' ? '' : 'disabled'}>Xoá</button>
      </div>
    </td>
    `;
    document.querySelector(".data-table").appendChild(tableRow);

  }
  for (let i = 0; i < model.dataUser.length; i++) {
    document
      .querySelector(`.delete-btn-${i}`)
      .addEventListener("click", async () => {
        await ultis.deleteData(model.dataUser[i].userID, "users");
        console.log("Deleted!");
        model.dataEquipment.splice(i, 1);
        view.rerenderUserMainScreen();
      });
    document.querySelector(`.edit-btn-${i}`).addEventListener("click", async  () => {
      document.querySelector(".aside-right").innerHTML =
        components.editUserScreen;
      document.getElementById("user-login-id").value =
        model.dataUser[i].userLoginId;
      document.getElementById("user-password").value =
        model.dataUser[i].userPassword;
      document.getElementById("user-name").value = model.dataUser[i].userName;
      document.getElementById("user-login-id").value =
        model.dataUser[i].userLoginId;
      document.getElementById("user-role").value = model.dataUser[i].userRole;
      document
        .getElementById("go-back-btn")
        .addEventListener("click", async () => {
          await view.rerenderUserMainScreen();
        });
      document
        .getElementById("edit-user-btn")
        .addEventListener("click", async () => {
          const userInfo = {
            userID: model.dataUser.length == 0 ? 1 : (model.dataUser[model.dataUser.length - 1].userID + 1),
            userLoginId: document.getElementById("user-login-id").value,
            userPassword: document.getElementById("user-password").value,
            userName: document.getElementById("user-name").value,
            userRole: document.getElementById("user-role").value,
            userCreatedTime: model.dataUser[i].userCreatedTime,
            userCreatedBy: model.dataUser[i].userCreatedBy,
            userUpdatedTime: new Date(),
            userUpdatedBy: sessionStorage.getItem('currentUser'),
          };
          await ultis.putData(model.dataUser[i].userID, "users", userInfo);
          model.dataUser = await ultis.fetchData('users');
          await view.rerenderUserMainScreen();
        });
    });
  }
};