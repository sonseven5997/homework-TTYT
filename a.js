department.addEventListener("click", async () => {
  view.currenScreen = "department";
  document.querySelector(".choosen").classList.remove("choosen");
  department.classList.add("choosen");
  document.querySelector(".aside-right").innerHTML =
    components.departmentMainScreen;
  document.getElementById("add-department").disabled =
    sessionStorage.getItem("currentRole") == "Quản lý" ? false : true;
  document.getElementById("add-department").addEventListener("click", () => {
    document.querySelector(".aside-right").innerHTML =
      components.addDepartmentScreen;
    document
      .getElementById("go-back-btn")
      .addEventListener("click", async () => {
        await view.rerenderDepartmentMainScreen();
      });
    document
      .getElementById("add-department-btn")
      .addEventListener("click", async () => {
        const departmentInfo = {
          departmentID:
            model.datadepartment.length == 0
              ? 1
              : model.datadepartment[model.datadepartment.length - 1].departmentID + 1,
          departmentLoginId: document.getElementById("department-login-id").value,
          departmentPassword: document.getElementById("department-password").value,
          departmentName: document.getElementById("department-name").value,
          departmentRole: document.getElementById("department-role").value,
        };
        console.log(departmentInfo);
        await controller.adddepartment(departmentInfo);
      });
  });
  view.renderDatadepartment();
});