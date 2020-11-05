const components = {};

components.loginScreen = `
<div class="login-container">
<div class="login-form">
  <div class="login-title">Phần mềm quản lý y tế</div>
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
`;

components.mainScreen = `
<div class="main-screen-container">
<div class="header">Phần mềm quản lý y tế</div>
<div class="main">
  <div class="aside-left">
    <div class="navigation-wrapper">
      <div class="aside-left-element choosen" id="equipment">Danh sách thiết bị</div>
      <div class="aside-left-element" id="user">Danh sách nhân viên</div>
      <div class="aside-left-element" id="maintain">Bảo trì</div>
      <div class="aside-left-element" id="history">Lịch sử</div>
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
`;

components.equipmentMainScreen = `
<button id="add-equipment">Thêm thiết bị</button>
<table class="data-table">
  <caption>Danh sách thiết bị</caption>
  <tr>
    <th >ID</th>
    <th>Tên thiết bị</th>
    <th>Mã số</th>
    <th>Mẫu thiết bị</th>
    <th>Xuất xứ</th>
    <th>Nhà sản xuất</th>
    <th>Năm sản xuất</th>
    <th>Khoa sử dụng</th>
    <th>Trạng thái</th>
    <th>Thời gian tạo</th>
    <th>Người tạo</th>
    <th>Thời gian cập nhật</th>
    <th>Người cập nhật</th>
    <th>Hành động</th>
  </tr>
</table>
`;

components.addEquipmentScreen = `
<form id="form-add-equipment">
<div class="input-wrapper">
      <div class="input-title">Tên thiết bị</div>
      <input type="text" id="equipment-name">
      <div class="input-error" id="equipment-name-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mã số thiết bị</div>
      <input type="text" id="equipment-serial-number">
      <div class="input-error" id="equipment-serial-number-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mẫu thiết bị</div>
      <input type="text" id="equipment-model">
      <div class="input-error" id="equipment-model-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Xuất xứ</div>
      <input type="text" id="equipment-origin">
      <div class="input-error" id="equipment-origin-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Nhà sản xuất</div>
      <input type="text" id="equipment-manufacturer">
      <div class="input-error" id="equipment-manufacturer-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Năm sản xuất</div>
      <input type="number" id="equipment-manufacture-year" min="1900" max="2020">
      <div class="input-error" id="equipment-manufacture-year-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Khoa sử dụng</div>
      <input type="text" id="equipment-faculty-use">
      <div class="input-error" id="equipment-faculty-use-error"></div>
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
`;

components.editEquipmentScreen = `
<form id="form-edit-equipment">
    <div class="input-wrapper">
      <div class="input-title">Tên thiết bị</div>
      <input type="text" id="equipment-name">
      <div class="input-error" id="equipment-name-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mã số thiết bị</div>
      <input type="text" id="equipment-serial-number">
      <div class="input-error" id="equipment-serial-number-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mẫu thiết bị</div>
      <input type="text" id="equipment-model">
      <div class="input-error" id="equipment-model-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Xuất xứ</div>
      <input type="text" id="equipment-origin">
      <div class="input-error" id="equipment-origin-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Nhà sản xuất</div>
      <input type="text" id="equipment-manufacturer">
      <div class="input-error" id="equipment-manufacturer-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Năm sản xuất</div>
      <input type="number" id="equipment-manufacture-year" min="1900" max="2020">
      <div class="input-error" id="equipment-manufacture-year-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Khoa sử dụng</div>
      <input type="text" id="equipment-faculty-use">
      <div class="input-error" id="equipment-faculty-use-error"></div>
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
`;
components.userMainScreen = `
<button id="add-user">Thêm nhân viên</button>
<table class="data-table">
  <caption>Danh sách nhân viên</caption>
  <tr>
    <th >STT</th>
    <th>Tên nhân viên</th>
    <th>Tên đăng nhập</th>
    <th>Mật khẩu</th>
    <th>Chức vụ</th>
    <th>Thời gian tạo</th>
    <th>Người tạo</th>
    <th>Thời gian cập nhật</th>
    <th>Người cập nhật</th>
    <th>Hành động</th>
  </tr>
</table>
`;
components.addUserScreen = `
<form id="form-add-equipment">
    <div class="input-wrapper">
      <div class="input-title">Tên đăng nhập</div>
      <input type="text" id="user-login-id">
      <div class="input-error" id="user-login-id-error-1"></div>
      <div class="input-error" id="user-login-id-error-2"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mật khẩu</div>
      <input type="text" id="user-password">
      <div class="input-error" id="user-password-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Tên nhân viên</div>
      <input type="text" id="user-name">
      <div class="input-error" id="user-name-error"></div>
    </div>
    <div class="select-box-wrapper" style="margin-bottom:5px">
      <label for="role" id="role-label">Chức vụ</label>
      <select name="role" id="user-role">
        <option value="Nhân viên">Nhân viên</option>
        <option value="Quản lý">Quản lý</option>
      </select>
    </div>
</form>
  <div class="button-wrapper-add-user-screen">
    <button id="add-user-btn">Lưu</button>
    <button id="go-back-btn">Trở lại</button>
  </div>
`;

components.editUserScreen = `
<form id="form-edit-equipment">
    <div class="input-wrapper">
      <div class="input-title">Tên đăng nhập</div>
      <input type="text" id="user-login-id">
      <div class="input-error" id="user-login-id-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Mật khẩu</div>
      <input type="text" id="user-password">
      <div class="input-error" id="user-password-error"></div>
    </div>
    <div class="input-wrapper">
      <div class="input-title">Tên nhân viên</div>
      <input type="text" id="user-name">
      <div class="input-error" id="user-name"></div>
    </div>
    <div class="select-box-wrapper" style="margin-bottom:5px">
      <label for="role" id="role-label">Chức vụ</label>
      <select name="role" id="user-role">
        <option value="employee">Nhân viên</option>
        <option value="admin">Quản lý</option>
      </select>
    </div>
</form>
  <div class="button-wrapper-edit-user-screen">
    <button id="edit-user-btn">Lưu</button>
    <button id="go-back-btn">Trở lại</button>
  </div>
`;

components.maintainScreen = `
<form  id="form-create-maintain">
  <div class="input-wrapper">
    <div class="input-title">ID thiết bị</div>
    <input type="text" id="equipment-id">
    <div class="input-error" id="equipment-id-error"></div>
  </div>
  <div class="input-wrapper">
    <div class="input-title">Thời gian bảo dưỡng</div>
    <input type="text" id="equipment-maintain-time">
    <div class="input-error" id="equipment-maintain-time-error"></div>
  </div>
  <div class="create-maintain-schedule-wrapper">
    <button id="create-maintain-schedule-btn">Tạo</button>
  </div>
</form>
<div class="maintain-content"></div>
`

components.historyScreen = `
<table class="data-table">
  <caption>Lịch sử bảo dưỡng</caption>
  <tr>
    <th >STT</th>
    <th>ID thiết bị</th>
    <th>Thời gian bảo trì</th>
    <th>Thời gian tạo</th>
    <th>Người tạo</th>
    <th>Thời gian cập nhật</th>
    <th>Người cập nhật</th>
  </tr>
</table>
`