const components = {}

components.loginScreen  = `
<div class="login-container">
<div class="login-form">
  <div class="login-title">Bệnh viện xyz</div>
  <form id="form-login">
    <div class="input-wrapper">
      <div class="input-title">Tên đăng nhập</div>
      <input type="text" name="username">
      <div class="input-error" id="username-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mật khẩu</div>
      <input type="password" name="password">
      <div class="input-error" id="password-error"></div>
    </div>
    <div class="button-wrapper">
      <button id="login-btn">Đăng nhập</button>
    </div>
  </form>
</div>
</div>
`

components.mainScreen =`
<div class="main-screen-container">
<div class="header">Bệnh viện xyz</div>
<div class="main">
  <div class="aside-left">
    <div class="navigation-wrapper">
      <div class="aside-left-element choosen" id="equipment">Danh sách thiết bị</div>
      <div class="aside-left-element" id="doctor">Danh sách bác sĩ</div>
      <div class="aside-left-element" id="employee">Danh sách nhân viên</div>
    </div>
    <div class="log-out aside-left-element">
      <div class="text">Đăng xuất</div>
      <i class="fas fa-sign-out-alt" style="font-size: 20px;"></i>
    </div>
  </div>
  <div class="aside-right">

  </div>
</div>
</div>
`

components.equipmentMainScreen = `
<button id="add-equipment">Thêm thiết bị</button>
<table class="data-table">
  <caption>Danh sách thiết bị</caption>
  <tr>
    <th >STT</th>
    <th>ID</th>
    <th>Tên thiết bị</th>
    <th>Thời gian</th>
    <th>Hình ảnh</th>
    <th>Trạng thái</th>
    <th>Hành động</th>
  </tr>
</table>
`

components.addEquipmentScreen = `
<form id="form-add-equipment">
    <div class="input-wrapper">
      <div class="input-title">Tên thiết bị</div>
      <input type="text" id="equipment-name">
      <div class="input-error" id="equipment-name-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Hình ảnh (url)</div>
      <input type="text" id="equipment-image">
      <div class="input-error" id="equipment-image-error"></div>
    </div>
    <div class="checkbox-wrapper">
      <div class="input-title">Trạng thái</div>
      <input type="checkbox" name="status" id="status">
      <label for="status">Hoạt động</label>
    </div>
</form>
  <div class="button-wrapper-add-equipment-screen">
    <button id="add-equipment-btn">Lưu</button>
    <button id="go-back-btn">Trở lại</button>
  </div>
`

components.editEquipmentScreen = `
<form id="form-edit-equipment">
    <div class="input-wrapper">
      <div class="input-title">Tên thiết bị</div>
      <input type="text" id="equipment-name">
      <div class="input-error" id="equipment-name-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Hình ảnh (url)</div>
      <input type="text" id="equipment-image">
      <div class="input-error" id="equipment-image-error"></div>
    </div>
    <div class="checkbox-wrapper">
      <div class="input-title">Trạng thái</div>
      <input type="checkbox" name="status" id="status">
      <label for="status">Hoạt động</label>
    </div>
</form>
  <div class="button-wrapper-edit-equipment-screen">
    <button id="edit-equipment-btn">Lưu</button>
    <button id="go-back-btn">Trở lại</button>
  </div>
`