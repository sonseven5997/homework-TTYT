const view = {}


view.setActiveScreen = async (screenName) => {
  switch (screenName) {
    case 'loginScreen':
      document.getElementById('app').innerHTML = components.loginScreen
      const loginForm = document.getElementById('form-login')
      loginForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const loginInfo = {
          username: loginForm.username.value,
          password: loginForm.password.value
        }
        controller.login(loginInfo)
      })
      break;

    case 'mainScreen':
      let currentScreen = 'equipment'
      document.getElementById('app').innerHTML = components.mainScreen
      const equipment = document.getElementById('equipment')
      const doctor = document.getElementById('doctor')
      const employee = document.getElementById('employee')
      const logOutBtn = document.querySelector('.log-out')
      logOutBtn.addEventListener('click', () => {
        sessionStorage.setItem('isLoggedIn','false')
        location.reload()
      })
      equipment.addEventListener('click', () => {
        currenScreen = 'equipment'
        document.querySelector('.choosen').classList.remove('choosen')
        equipment.classList.add('choosen')
      })
      doctor.addEventListener('click', ()=> {
        currenScreen = 'doctor'
        document.querySelector('.choosen').classList.remove('choosen')
        doctor.classList.add('choosen')
      })
      employee.addEventListener('click', () => {
        currenScreen = 'employee'
        document.querySelector('.choosen').classList.remove('choosen')
        employee.classList.add('choosen')
      })
      if (currentScreen == 'equipment') {
        document.querySelector('.aside-right').innerHTML = components.equipmentMainScreen
        document.getElementById('add-equipment').addEventListener('click', () => {
          document.querySelector('.aside-right').innerHTML = components.addEquipmentScreen
          document.getElementById('go-back-btn').addEventListener('click', async () => {
            await view.rerenderEquipmentMainScreen()
          })
          document.getElementById('add-equipment-btn').addEventListener('click', () => {
            const equipmentInfo = {
              equipmentName : document.getElementById('equipment-name').value,
              equipmentImage: document.getElementById('equipment-image').value,
              equipmentStatus: document.getElementById('status').checked
            }
            console.log(equipmentInfo)
            controller.addEquipment(equipmentInfo)
          })
        })
        await view.renderDataEquipment()
      }


      
      break;
  }
}

view.setErrorMessage = (id,message) =>{
  document.getElementById(id).innerText = message
}

view.addChoosenTab = (tab,screen) => {
  if (tab.id == screen) {
    document.querySelector('.choosen').classList.remove('choosen')
    tab.classList.add('choosen')
  } 
}

view.rerenderEquipmentMainScreen = async () => {
  document.querySelector('.aside-right').innerHTML = components.equipmentMainScreen
  document.getElementById('add-equipment').addEventListener('click', () => {
    document.querySelector('.aside-right').innerHTML = components.addEquipmentScreen
    document.getElementById('go-back-btn').addEventListener('click', (e) => {
      e.preventDefault()
      view.rerenderEquipmentMainScreen()
    })
  })  
  await view.renderDataEquipment()
}

view.renderDataEquipment = async () => {
  let equipmentData = await ultis.fetchData('equipment')
  for (let i=0; i<equipmentData.length; i++){
    const tableRow = document.createElement('tr')
    tableRow.innerHTML = `
    <td>${i + 1}</td>
    <td>${equipmentData[i].equipmentID}</td>
    <td>${equipmentData[i].equipmentName}</td>
    <td>${equipmentData[i].date}</td>
    <td>${equipmentData[i].image}</td>
    <td>${equipmentData[i].isActive ? `<div class="active-equipment">Hoạt động</div>` : `<div class="inactive-equipment">Không hoạt động</div>`}</td>
    <td>
      <div class="button-wrapper">
        <button id="edit-btn" class="edit-btn-${i}">Sửa</button>
        <button id="delete-btn" class="delete-btn-${i}">Xoá</button>
      </div>
    </td>
    `
    document.querySelector('.data-table').appendChild(tableRow)
  }
  for (let i=0; i<equipmentData.length; i++) {
    document.querySelector(`.delete-btn-${i}`).addEventListener('click',  async () => {
      await ultis.deleteData(equipmentData[i].equipmentID,'equipment')
      console.log('Deleted!')
      location.reload()
    })
    document.querySelector(`.edit-btn-${i}`).addEventListener('click', () => {
      document.querySelector('.aside-right').innerHTML = components.editEquipmentScreen
      document.getElementById('equipment-name').value = equipmentData[i].equipmentName
      document.getElementById('equipment-image').value = equipmentData[i].image
      document.getElementById('status').checked = equipmentData[i].isActive
      document.getElementById("go-back-btn").addEventListener('click', async () => {
        await view.rerenderEquipmentMainScreen()
      })
      document.getElementById("edit-equipment-btn").addEventListener('click', async () => {
        const equipmentInfo = {
          equipmentName : document.getElementById('equipment-name').value,
          date: new Date(),
          equipmentImage: document.getElementById('equipment-image').value,
          isActive: document.getElementById('status').checked
        }
        await ultis.putData(equipmentData[i].equipmentID,'equipment',equipmentInfo)
        await view.rerenderEquipmentMainScreen()
      })
    })
  }
  
}